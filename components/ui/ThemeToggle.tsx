"use client";

import { useState } from "react";
import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function persistTheme(theme: Theme) {
  // ============= Theme Persistence =============
  // --------------------- Sync DOM + storage ------------------
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return DEFAULT_THEME;
    }

    const htmlTheme = document.documentElement.dataset.theme;
    return isTheme(htmlTheme) ? htmlTheme : DEFAULT_THEME;
  });

  const updateTheme = (theme: Theme) => {
    setActiveTheme(theme);
    persistTheme(theme);
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
