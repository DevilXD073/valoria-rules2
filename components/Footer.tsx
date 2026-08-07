import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "100px",
        borderTop: "1px solid rgba(255,255,255,.08)",
        background: "rgba(255,255,255,.03)",
      }}
    >
      <div
        className="container"
        style={{
          padding: "50px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <h2
            className="gradient-text"
            style={{
              fontSize: "1.8rem",
              fontWeight: 900,
            }}
          >
            ⚔️ ValoriaSMP
          </h2>

          <p
            style={{
              marginTop: "10px",
              color: "#94a3b8",
              maxWidth: "420px",
              lineHeight: 1.7,
            }}
          >
            Official ValoriaSMP Rulebook.
            Read the rules before joining and help us
            maintain a fair, competitive and enjoyable
            Minecraft experience.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/">Home</Link>

          <Link href="/rules">Rulebook</Link>

          <a href="#top">Back to Top</a>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid rgba(255,255,255,.08)",
          color: "#94a3b8",
        }}
      >
        © {new Date().getFullYear()} ValoriaSMP. All Rights Reserved.
      </div>
    </footer>
  );
}
