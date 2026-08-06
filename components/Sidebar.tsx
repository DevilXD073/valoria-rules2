"use client";

import { RuleSection } from "@/types/rule";

interface SidebarProps {
  sections: RuleSection[];
}

export default function Sidebar({ sections }: SidebarProps) {
  return (
    <aside
      className="glass"
      style={{
        position: "sticky",
        top: "24px",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h3
        className="gradient-text"
        style={{
          fontSize: "1.4rem",
          fontWeight: 800,
          marginBottom: "20px",
        }}
      >
        📖 Contents
      </h3>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e2e8f0",
              fontWeight: 600,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg,#3b82f6,#8b5cf6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,0.04)";
            }}
          >
            <span>{section.icon}</span>
            <span>{section.title}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
