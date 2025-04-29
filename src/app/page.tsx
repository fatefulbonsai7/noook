import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 40, fontFamily: 'inherit' }}>
      <section style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: 54, fontWeight: 900, marginBottom: 12, color: "#2e7d32" }}>
          Empowering Families, One Creation at a Time
        </h1>
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 24, color: "#555" }}>
          Our Vision
        </h2>
        <p style={{ fontSize: 22, marginBottom: 12 }}>
          To inspire our youths to lead and serve, empowering families, one creation at a time.
        </p>
        <p style={{ fontSize: 20, marginBottom: 12 }}>
          Through youth-made crochet creations, we share love, protect homes and offer new hope to families in need.
        </p>
        <p style={{ fontSize: 20, marginBottom: 12 }}>
          Every stitch carries a story - a story of kindness, resilience, and a future built together.
        </p>
      </section>
      <section style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", marginBottom: 48 }}>
        <div style={{ flex: "1 1 280px", background: "#f1f8e9", borderRadius: 12, padding: 28, minWidth: 260 }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Join</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Subscribe to Club NOOOK through monthly, annual or lifetime membership.</p>
          <a href="https://www.zeffy.com/en-US/ticketing/club-noook" target="_blank" rel="noopener noreferrer" style={{ color: "#2e7d32", fontWeight: 600 }}>Become a Member</a>
        </div>
        <div style={{ flex: "1 1 280px", background: "#e3f2fd", borderRadius: 12, padding: 28, minWidth: 260 }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Volunteer</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Send us a handmade crochet item for sale. Proceeds go directly to our beneficiaries.</p>
          <a href="mailto:NOOOK.secretary@gmail.com" style={{ color: "#1976d2", fontWeight: 600 }}>Contact Us</a>
        </div>
        <div style={{ flex: "1 1 280px", background: "#fff3e0", borderRadius: 12, padding: 28, minWidth: 260 }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Donate</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Purchase our youth-made crochet items at our shop. We ship nationwide!</p>
          <a href="https://www.zeffy.com/en-US/ticketing/noook-shop" target="_blank" rel="noopener noreferrer" style={{ color: "#f57c00", fontWeight: 600 }}>Shop Now</a>
        </div>
        <div style={{ flex: "1 1 280px", background: "#ede7f6", borderRadius: 12, padding: 28, minWidth: 260 }}>
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Sponsor</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Support our cause by sponsoring NOOOK.</p>
          <a href="mailto:NOOOK.secretary@gmail.com" style={{ color: "#7b1fa2", fontWeight: 600 }}>Become a Sponsor</a>
        </div>
      </section>
      <section style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, color: "#2e7d32" }}>Share the Love • Protect a Home • Offer New Hope</h2>
        <p style={{ fontSize: 22, marginBottom: 0, color: "#444" }}>
          Together, we spark change.
        </p>
      </section>
    </main>
  );
}

