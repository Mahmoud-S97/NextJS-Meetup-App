"use client";

import { JSX, useEffect, useState } from "react";

const ThemeToggle = (): JSX.Element => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    console.log("Local-Storage: ", localStorage.getItem("theme"));

    const saved = localStorage.getItem("theme");
    let isDark = saved === "dark";

    if (saved === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = !dark;

    setDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer bg-black/20 rounded-full px-4 py-1"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggle;
