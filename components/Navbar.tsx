"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(7,11,20,0.75)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: 900,
            textDecoration: "none",
          }}
          className="gradient-text"
        >
          ⚔️ ValoriaSMP
        </Link>

        <nav
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <Link href="/">Home</Link>

          <Link href="/rules">Rulebook</Link>

          <a href="#general">General</a>

          <a href="#combat">Combat</a>

          <a href="#gameplay">Gameplay</a>
        </nav>
      </div>
    </header>
  );
}
