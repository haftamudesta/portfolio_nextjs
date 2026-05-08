"use client";

import { useEffect, useState } from "react";
import { useIsDarkMode, useTheme, useSetTheme } from "@/store";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useIsDarkMode();
  const theme = useTheme();
  const setTheme = useSetTheme();
  const [mounted, setMounted] = useState(false);

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        isDarkMode ? "#1a1a1a" : "#ffffff",
      );
    }
  }, [isDarkMode, mounted]);

  // Handle system theme changes when in 'system' mode
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      console.log("📱 System theme changed:", e.matches ? "dark" : "light");

      if (theme === "system") {
        setTheme("system"); // This will trigger the store's system logic
      }
    };

    // Listen for system theme changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, setTheme, mounted]);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return <>{children}</>;
}
