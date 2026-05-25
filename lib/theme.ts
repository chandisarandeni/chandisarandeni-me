export type Theme = "light" | "dark";

export const DEFAULT_THEME: Theme = "light";
export const THEME_STORAGE_KEY = "preferred-theme";

export function isTheme(value: string | null | undefined): value is Theme {
  return value === "light" || value === "dark";
}

export function getThemeInitScript() {
  // ============= Theme Bootstrap =============
  // --------------------- Pre-hydration theme sync ------------------
  return `
    (() => {
      const root = document.documentElement;
      const storageKey = "${THEME_STORAGE_KEY}";
      const defaultTheme = "${DEFAULT_THEME}";

      try {
        const searchParams = new URLSearchParams(window.location.search);
        const queryTheme = searchParams.get("theme");
        const queryQa = searchParams.get("qa");
        const queryMotion = searchParams.get("motion");
        const storedTheme = localStorage.getItem(storageKey);
        const themeFromQuery = queryTheme === "dark" || queryTheme === "light" ? queryTheme : null;
        const themeFromStorage = storedTheme === "dark" || storedTheme === "light" ? storedTheme : null;
        const theme = themeFromQuery ?? themeFromStorage ?? defaultTheme;

        // ============= Motion Mode =============
        // --------------------- Allow deterministic capture mode via URL ------------------
        const motionIsOff =
          queryQa === "1" ||
          queryQa === "true" ||
          queryMotion === "off";

        root.dataset.theme = theme;
        root.style.colorScheme = theme;
        root.dataset.motion = motionIsOff ? "off" : "on";

        if (themeFromQuery) {
          // short local comment
          localStorage.setItem(storageKey, themeFromQuery);
        }
      } catch {
        // short local comment
        root.dataset.theme = defaultTheme;
        root.style.colorScheme = defaultTheme;
        root.dataset.motion = "on";
      }
    })();
  `;
}
