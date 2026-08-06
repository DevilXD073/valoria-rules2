import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section
        id="features"
        className="container section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        <div className="card">
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "12px",
            }}
          >
            ⚔️ Fair Gameplay
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            ValoriaSMP focuses on balanced PvP, fair competition,
            and an enjoyable experience for every player.
          </p>
        </div>

        <div className="card">
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "12px",
            }}
          >
            📖 Complete Rulebook
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            Read all server rules before joining. Every player is
            expected to understand and follow them.
          </p>
        </div>

        <div className="card">
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "12px",
            }}
          >
            🛡️ Active Staff
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            Our staff team actively monitors the server to ensure a
            friendly and fair environment.
          </p>
        </div>
      </section>

      <section
        className="container section"
        style={{
          textAlign: "center",
        }}
      >
        <h2
          className="gradient-text"
          style={{
            fontSize: "clamp(2rem,5vw,3rem)",
            fontWeight: 800,
          }}
        >
          Ready to Play?
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "18px",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: 1.8,
          }}
        >
          Make sure you've read the complete rulebook before joining
          the server. Following the rules helps keep ValoriaSMP fair,
          competitive, and enjoyable for everyone.
        </p>

        <a
          href="/rules"
          style={{
            display: "inline-block",
            marginTop: "32px",
            padding: "16px 36px",
            borderRadius: "14px",
            background:
              "linear-gradient(90deg,#3b82f6,#8b5cf6)",
            color: "white",
            fontWeight: 700,
          }}
        >
          📖 View Rulebook
        </a>
      </section>
    </main>
  );
}
