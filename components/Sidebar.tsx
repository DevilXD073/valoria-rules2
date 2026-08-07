"use client";

import Link from "next/link";
import { RuleSection } from "@/types/rule";

interface SidebarProps {
  sections: RuleSection[];
}

export default function Sidebar({
  sections,
}: SidebarProps) {
  return (
    <aside
      className="glass"
      style={{
        padding: "20px",
        position: "sticky",
        top: "90px",
      }}
    >
      <h3
        style={{
          marginBottom: "18px",
          fontSize: "1.2rem",
          fontWeight: 800,
        }}
      >
        📖 Sections
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
          >
            {section.icon} {section.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
