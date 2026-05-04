export default function ComingSoonPage() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "80px auto",
        padding: "0 24px",
        fontFamily: "var(--font-body), system-ui, -apple-system, sans-serif",
        color: "#1a1a1a",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "1.5rem",
          fontFamily: "var(--font-display), Georgia, serif",
        }}
      >
        Top Shelf Private Wealth
      </h1>
      <p style={{ fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "1rem" }}>
        Top Shelf Private Wealth is being refined.
      </p>
      <p style={{ fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "1rem" }}>
        We&apos;re a financial planning practice for professional hockey players,
        currently working with our first set of clients while we finalize the
        public-facing experience. Public availability returns later in 2026.
      </p>
      <p style={{ fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        If you&apos;re a player, agent, or family member interested in working
        with us before then, reach out directly.
      </p>
      <p style={{ fontSize: "1.125rem", marginBottom: "3rem" }}>
        <a
          href="mailto:josh@topshelfprivatewealth.com"
          style={{ color: "#1a1a1a", textDecoration: "underline" }}
        >
          josh@topshelfprivatewealth.com
        </a>
      </p>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #ddd",
          margin: "2rem 0",
        }}
      />
      <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>
        Top Shelf Private Wealth is a DBA of Wealth In Yourself LLC, a
        registered investment adviser with the State of Nevada.
      </p>
    </div>
  );
}
