"use client";

import { useSyncExternalStore } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY, type Theme } from "./theme";

type ViewTransitionController = {
  finished: Promise<void>;
};

type StartViewTransition = (
  updateCallback: () => void | Promise<void>
) => ViewTransitionController;

type ViewTransitionDocument = Document & {
  startViewTransition?: StartViewTransition;
};

const THEME_TRANSITION_STATE_ATTR = "data-theme-transition";
const THEME_TRANSITION_DURATION_MS = 680;
const THEME_TRANSITION_SETTLE_BUFFER_MS = 120;

let fallbackThemeTransitionTimer: number | null = null;

function applyThemeToRoot(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function persistTheme(theme: Theme) {
  // ============= Theme Persistence =============
  // --------------------- Sync root dataset and user preference storage ------------------
  applyThemeToRoot(theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function getThemeSnapshot() {
  const htmlTheme = document.documentElement.dataset.theme;
  return isTheme(htmlTheme) ? htmlTheme : DEFAULT_THEME;
}

function getServerThemeSnapshot() {
  return DEFAULT_THEME;
}

function subscribeToThemeChange(onStoreChange: () => void) {
  // ============= Theme Sync Channel =============
  // --------------------- React to local toggles plus cross-tab storage updates ------------------
  const handleThemeChange = () => onStoreChange();
  
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY || !isTheme(event.newValue)) {
      return;
    }
    applyThemeToRoot(event.newValue);
    onStoreChange();
  };

  window.addEventListener("themechange", handleThemeChange);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener("themechange", handleThemeChange);
    window.removeEventListener("storage", handleStorageChange);
  };
}

function shouldAnimateThemeSwitch() {
  const root = document.documentElement;
  const motionIsOff = root.dataset.motion === "off";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return !motionIsOff && !prefersReducedMotion;
}

function setThemeTransitionOrigin(triggerElement: HTMLElement | null) {
  const root = document.documentElement;
  const triggerBounds = triggerElement?.getBoundingClientRect();
  const fallbackX = window.innerWidth / 2;
  const fallbackY = window.innerHeight / 2;
  const originX = triggerBounds ? triggerBounds.left + triggerBounds.width / 2 : fallbackX;
  const originY = triggerBounds ? triggerBounds.top + triggerBounds.height / 2 : fallbackY;

  root.style.setProperty("--theme-x", `${Math.round(originX)}px`);
  root.style.setProperty("--theme-y", `${Math.round(originY)}px`);
}

function clearFallbackThemeTransitionState() {
  const root = document.documentElement;
  root.removeAttribute(THEME_TRANSITION_STATE_ATTR);

  if (fallbackThemeTransitionTimer !== null) {
    window.clearTimeout(fallbackThemeTransitionTimer);
    fallbackThemeTransitionTimer = null;
  }
}

function runFallbackThemeTransition(theme: Theme) {
  const root = document.documentElement;
  clearFallbackThemeTransitionState();
  root.setAttribute(THEME_TRANSITION_STATE_ATTR, "running");

  persistTheme(theme);
  window.dispatchEvent(new Event("themechange"));

  fallbackThemeTransitionTimer = window.setTimeout(() => {
    clearFallbackThemeTransitionState();
  }, THEME_TRANSITION_DURATION_MS + THEME_TRANSITION_SETTLE_BUFFER_MS);
}

function getStartViewTransition() {
  const viewTransitionDocument = document as ViewTransitionDocument;
  if (typeof viewTransitionDocument.startViewTransition !== "function") {
    return null;
  }

  return viewTransitionDocument.startViewTransition.bind(viewTransitionDocument);
}

export function ThemeToggle() {
  const activeTheme = useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const nextTheme: Theme = activeTheme === "light" ? "dark" : "light";
  const switchLabel = nextTheme === "dark" ? "Switch to dark mode" : "Switch to light mode";
  const showMoonIcon = activeTheme === "dark";

  const updateTheme = (theme: Theme, triggerElement: HTMLElement | null) => {
    if (theme === activeTheme) {
      return;
    }

    setThemeTransitionOrigin(triggerElement);

    if (!shouldAnimateThemeSwitch()) {
      clearFallbackThemeTransitionState();
      persistTheme(theme);
      window.dispatchEvent(new Event("themechange"));
      return;
    }

    const startViewTransition = getStartViewTransition();
    if (startViewTransition) {
      clearFallbackThemeTransitionState();
      startViewTransition(() => {
        persistTheme(theme);
        window.dispatchEvent(new Event("themechange"));
      });
      return;
    }

    // ============= Fallback Motion =============
    // --------------------- Keep a cinematic transition when the View Transition API is unavailable ------------------
    runFallbackThemeTransition(theme);
  };

  return (
    <div className="theme-toggle">
      <button
        type="button"
        className="theme-toggle-btn tap-target"
        aria-label={switchLabel}
        title={switchLabel}
        onClick={(event) => updateTheme(nextTheme, event.currentTarget)}
      >
        <span className="theme-toggle-icon-wrap" aria-hidden="true">
          <BsMoonFill className="theme-toggle-icon" data-visible={showMoonIcon} />
          <BsSunFill className="theme-toggle-icon" data-visible={!showMoonIcon} />
        </span>
      </button>
    </div>
  );
}

