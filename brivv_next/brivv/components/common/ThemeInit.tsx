import { useEffect } from "react";

export function ThemeInit() {
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("akrapex-theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const theme = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);
  return null;
}