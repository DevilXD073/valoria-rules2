import { RuleSection as RuleSectionType } from "@/types/rule";
import RuleCard from "./RuleCard";

interface RuleSectionProps {
  section: RuleSectionType;
}

export default function RuleSection({ section }: RuleSectionProps) {
  return (
    <section
      id={section.id}
      style={{
        marginBottom: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "28px",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
          }}
        >
          {section.icon}
        </span>

        <h2
          className="gradient-text"
          style={{
            fontSize: "2rem",
            fontWeight: 800,
          }}
        >
          {section.title}
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
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
