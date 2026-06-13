"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextIsLight = !html.classList.contains("light");

    html.classList.toggle("light");

    localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.icon}
      aria-label="Toggle theme"
    >
      <i className={`fa-solid ${isLight ? "fa-moon" : "fa-sun"}`} />
    </button>
  );
}