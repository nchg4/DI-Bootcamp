import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeSwitcher({ onThemeChange }) {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme();
    onThemeChange(newTheme);
  };

  return (
    <button onClick={handleClick}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

export default ThemeSwitcher;