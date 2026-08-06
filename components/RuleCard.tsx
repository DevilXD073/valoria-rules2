import { Rule } from "@/types/rule";

interface RuleCardProps {
  rule: Rule;
}

const badgeColors: Record<string, string> = {
  Warn: "#facc15",
  "Temp Ban": "#fb923c",
  "Permanent Ban": "#ef4444",
};

export default function RuleCard({ rule }: RuleCardProps) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          {rule.title}
        </h3>

        {rule.punishment && (
          <span
            style={{
              background: badgeColors[rule.punishment],
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: ".75rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {rule.punishment}
          </span>
        )}
      </div>

      {rule.description && (
        <p
          style={{
            color: "#94a3b8",
            lineHeight: 1.7,
          }}
        >
          {rule.description}
        </p>
      )}
    </div>
  );
}
