"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;

    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";

    setTheme(next);

    document.documentElement.setAttribute("data-theme", next);

    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      className="glass"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        fontSize: "1.4rem",
        zIndex: 999,
        transition: "0.25s",
      }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
