"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(18px)",
        background: "rgba(7,11,20,.75)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        className="container"
        style={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="gradient-text"
          style={{
            fontSize: "1.7rem",
            fontWeight: 900,
          }}
        >
          ⚔️ ValoriaSMP
        </Link>

        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/rules">Rulebook</Link>
          <a href="#features">Features</a>
        </nav>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="mobile-nav glass">
          <Link href="/" onClick={() => setOpen(false)}>
            🏠 Home
          </Link>

          <Link href="/rules" onClick={() => setOpen(false)}>
            📖 Rulebook
          </Link>

          <a
            href="#features"
            onClick={() => setOpen(false)}
          >
            ✨ Features
          </a>
        </div>
      )}
    </header>
  );
}
