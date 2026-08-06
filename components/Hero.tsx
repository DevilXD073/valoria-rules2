"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass"
        style={{
          padding: "80px 50px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(59,130,246,.18)",
            color: "#93c5fd",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          ⚔️ OFFICIAL RULEBOOK
        </span>

        <h1
          className="gradient-text"
          style={{
            fontSize: "clamp(3rem,8vw,6rem)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          ValoriaSMP
        </h1>

        <p
          style={{
            marginTop: "28px",
            color: "#94a3b8",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Read the complete rulebook before joining the server.
          Following these rules helps keep ValoriaSMP fair,
          enjoyable, and competitive for everyone.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Link
            href="/rules"
            style={{
              padding: "16px 34px",
              borderRadius: "14px",
              background:
                "linear-gradient(90deg,#3b82f6,#8b5cf6)",
              color: "white",
              fontWeight: 700,
            }}
          >
            📖 Open Rulebook
          </Link>

          <a
            href="#features"
            style={{
              padding: "16px 34px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,.15)",
              color: "white",
            }}
          >
            ✨ Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}
