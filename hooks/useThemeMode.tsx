"use client";
import { useEffect, useState } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme",theme)
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.add(localTheme)
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
export default useThemeMode;
