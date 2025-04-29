export default function SponsorsPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 40, background: "var(--background)", color: "var(--foreground)", minHeight: "100vh" }}>
      <section style={{ textAlign: "center", marginBottom: 36 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: "var(--accent-dark)", marginBottom: 10 }}>
          Become a NOOOK Sponsor
        </h1>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "var(--accent)", marginBottom: 22 }}>
          Empower Families, Inspire Futures
        </h2>
      </section>
      <section style={{ marginBottom: 30 }}>
        <p style={{ fontSize: 20, marginBottom: 16 }}>
          At NOOOK Foundation, we believe that every stitch tells a story — a story of <b>resilience, love, and hope</b>. Powered by the creativity and compassion of young hands, our youth-crafted crochet creations directly support families and communities in need.
        </p>
        <p style={{ fontSize: 20, marginBottom: 16 }}>
          <span style={{ fontWeight: 700, color: "#ad1457" }}>Your sponsorship plays a vital role in shaping brighter futures.</span> With a generous lump sum donation — such as <span style={{ fontWeight: 700, color: "#f06292" }}>$1,000 or more</span> — you will help us continue empowering families, one creation at a time. Each contribution fuels our mission to inspire youth leadership, protect homes, and offer new hope through the simple, powerful act of giving.
        </p>
        <p style={{ fontSize: 20, marginBottom: 16 }}>
          When you sponsor NOOOK, you are not just donating — <b>you are investing in dreams, uplifting families, and building stronger, more connected communities.</b> Together, we can ensure that every stitch, every effort, and every heart behind it sparks lasting change.
        </p>
        <p style={{ fontSize: 20, marginBottom: 16 }}>
          Join us in weaving a future filled with kindness, empowerment, and love.
        </p>
      </section>
      <section style={{ marginTop: 32, padding: 24, background: "#f8bbd0", borderRadius: 12, textAlign: "center", color: "#ad1457", boxShadow: "0 2px 8px 0 #f8bbd0" }}>
        <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Together, we crochet a future of hope.</h3>
      </section>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <a
          href="mailto:NOOOK.secretary@gmail.com"
          style={{
            background: "#f06292",
            color: "#fff",
            fontWeight: 700,
            fontSize: 22,
            padding: "16px 36px",
            borderRadius: 12,
            boxShadow: "0 2px 8px 0 #f8bbd0",
            textDecoration: "none",
            transition: "background 0.2s, box-shadow 0.2s",
            letterSpacing: 1,
            display: "inline-block"
          }}
        >
          Email Us
        </a>
      </div>
    </main>
  );
}

