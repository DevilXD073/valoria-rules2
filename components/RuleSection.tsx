"use client";

import RuleCard from "@/components/RuleCard";
import { RuleSection as RuleSectionType } from "@/types/rule";

interface RuleSectionProps {
  section: RuleSectionType;
}

export default function RuleSection({
  section,
}: RuleSectionProps) {
  return (
    <section
      id={section.id}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      <div
        className="glass"
        style={{
          padding: "24px",
          marginBottom: "20px",
        }}
      >
        <h2
          className="gradient-text"
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "10px",
          }}
        >
          <span>{section.icon}</span>
          {section.title}
        </h2>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.7,
          }}
        >
          {section.rules.length} Rule
          {section.rules.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "22px",
        }}
      >
        {section.rules.map((rule, index) => (
          <RuleCard
            key={`${section.id}-${index}`}
            rule={rule}
          />
        ))}
      </div>
    </section>
  );
}
