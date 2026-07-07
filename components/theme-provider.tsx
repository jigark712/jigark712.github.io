"use client";

import { createContext, useCallback, useContext, useEffect } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "jigar-portfolio-theme:v1";

type ThemeContextValue = {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.dataset.theme) {
      const theme = readTheme();
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    }
    root.dataset.hydrated = "true";
  }, []);

  // Theme is locked to light. Toggle is intentionally a no-op so the site
  // always stays white; the dock theme button is removed separately.
  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    root.dataset.theme = "light";
    root.style.colorScheme = "light";
  }, []);

  return <ThemeContext.Provider value={{ toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}

export const themeBootstrapScript = `
(function () {
  // Locked to light: this portfolio is white-background only.
  try {
    document.documentElement.dataset.theme = 'light';
    document.documentElement.style.colorScheme = 'light';
  } catch (_) {
    document.documentElement.dataset.theme = 'light';
  }
})();`;
