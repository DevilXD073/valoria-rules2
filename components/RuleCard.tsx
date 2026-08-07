"use client";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(59,130,246,.08), rgba(139,92,246,.08))",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 800,
          }}
        >
          {rule.title}
        </h3>
        {rule.punishment && (
          <span
            style={{
              background: badgeColors[rule.punishment],
              padding: "6px 14px",
              borderRadius: "999px",
              color: "white",
              fontSize: ".78rem",
              fontWeight: 700,
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
            lineHeight: 1.8,
            position: "relative",
          }}
        >
          {rule.description}
        </p>
      )}
    </motion.div>
  );
}
