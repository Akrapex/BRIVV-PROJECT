import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const setTheme = (t: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", t === "dark");
    localStorage.setItem("akrapex-theme", t);
    setThemeState(t);
  };
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
  useEffect(() => {
    const stored = localStorage.getItem("akrapex-theme");
    if (stored === "dark" || stored === "light") setThemeState(stored);
  }, []);
  return { theme, toggle, setTheme };
}