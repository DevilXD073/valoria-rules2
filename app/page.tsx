import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <section className="container text-center">
        <div className="glass p-10 md:p-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold mb-6">
            ⚔️ Season 3
          </span>

          <h1
            className="gradient-text"
            style={{
              fontSize: "clamp(3rem,8vw,6rem)",
              fontWeight: 900,
              lineHeight: 1.05,
            }}
          >
            ValoriaSMP
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.2rem,4vw,2rem)",
              marginTop: "14px",
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            Official Rulebook
          </h2>

          <p
            style={{
              maxWidth: 760,
              margin: "30px auto",
              color: "#94a3b8",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Welcome to the official ValoriaSMP Rulebook.
            Please read all rules carefully before playing.
            Following the rules ensures a fair and enjoyable experience
            for every player.
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
                padding: "15px 34px",
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
                padding: "15px 34px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,.15)",
                background: "rgba(255,255,255,.05)",
                color: "white",
                fontWeight: 700,
              }}
            >
              ✨ Features
            </a>
          </div>

          <div
            id="features"
            style={{
              marginTop: "70px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            <div className="card">
              <h3>⚔️ Fair PvP</h3>
              <p style={{ marginTop: 12, color: "#94a3b8" }}>
                Balanced gameplay with clear combat rules.
              </p>
            </div>

            <div className="card">
              <h3>🛡️ Active Staff</h3>
              <p style={{ marginTop: 12, color: "#94a3b8" }}>
                Friendly moderators ensuring a fair experience.
              </p>
            </div>

            <div className="card">
              <h3>📖 Detailed Rules</h3>
              <p style={{ marginTop: 12, color: "#94a3b8" }}>
                Easy-to-read rulebook with categorized sections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
