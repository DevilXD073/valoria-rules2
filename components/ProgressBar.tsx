"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        background: "rgba(255,255,255,.08)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background:
            "linear-gradient(90deg,#3b82f6,#8b5cf6)",
          transition: "width .15s linear",
        }}
      />
    </div>
  );
}
