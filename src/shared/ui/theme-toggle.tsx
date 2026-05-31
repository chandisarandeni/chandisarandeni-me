"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY, type Theme } from "@/src/shared/theme/theme";

function persistTheme(theme: Theme) {
  // ============= Theme Persistence =============
  // --------------------- Sync DOM + storage ------------------
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
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
  // --------------------- React to local toggles and cross-tab storage events ------------------
  const handleThemeChange = () => onStoreChange();
  window.addEventListener("themechange", handleThemeChange);
  window.addEventListener("storage", handleThemeChange);

  return () => {
    window.removeEventListener("themechange", handleThemeChange);
    window.removeEventListener("storage", handleThemeChange);
  };
}

export function ThemeToggle() {
  const activeTheme = useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const updateTheme = (theme: Theme) => {
    persistTheme(theme);
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Theme preference">
      <button
        type="button"
        className="theme-toggle-btn tap-target"
        data-active={activeTheme === "light"}
        aria-pressed={activeTheme === "light"}
        onClick={() => updateTheme("light")}
      >
        Light
      </button>
      <button
        type="button"
        className="theme-toggle-btn tap-target"
        data-active={activeTheme === "dark"}
        aria-pressed={activeTheme === "dark"}
        onClick={() => updateTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
}

