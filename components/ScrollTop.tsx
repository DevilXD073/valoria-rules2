"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "96px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: "1.4rem",
        color: "white",
        background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
        boxShadow: "0 0 25px rgba(59,130,246,.35)",
        zIndex: 999,
        transition: "all .25s ease",
      }}
    >
      ↑
    </button>
  );
}
