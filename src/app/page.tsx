import Image from "next/image";


import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  // Read latest blog post
  let latestPost = null;
  const postsDir = path.join(process.cwd(), "src/content/blog");
  if (fs.existsSync(postsDir)) {
    const filenames = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        date: data.date || "",
        excerpt: data.excerpt || "",
      };
    });
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    latestPost = posts[0] || null;
  }

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 40,
        fontFamily: 'inherit',
        background: "var(--background)",
        color: "var(--foreground)",
        minHeight: "100vh"
      }}
    >
      {/* Headline Blog Update */}
      {latestPost && (
        <section style={{ background: "#f8bbd0", borderRadius: 14, padding: 24, marginBottom: 36, boxShadow: "0 2px 8px 0 #f8bbd0" }}>
          <div style={{ fontWeight: 900, color: "#ad1457", fontSize: 16, letterSpacing: 1, marginBottom: 6 }}>
            (Latest Blog Update)
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#ad1457", marginBottom: 3 }}>
            {latestPost.date ? new Date(latestPost.date).toLocaleDateString() : ""}: <a href="/blog" style={{ color: "#ad1457", textDecoration: "underline", fontWeight: 800 }}>{latestPost.title}</a>
          </div>
          <div style={{ fontSize: 17, color: "#ad1457" }}>
            {latestPost.excerpt}
          </div>
        </section>
      )}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <Image
          src="/Noook-home-image.png"
          alt="NOOOK Foundation logo and mission"
          width={400}
          height={400}
          style={{ maxWidth: "100%", height: "auto", borderRadius: 24, boxShadow: "0 4px 24px 0 #f8bbd0" }}
          priority
        />
      </div>
      <section style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: 54, fontWeight: 900, marginBottom: 12, color: "var(--accent-dark)" }}>
          Empowering Families, One Crochet at a Time
        </h1>
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 24, color: "var(--accent)" }}>
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
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
          marginBottom: 48,
        }}
      >
        <div
          style={{
            flex: "1 1 280px",
            background: "#ffe4ec",
            borderRadius: 12,
            padding: 28,
            minWidth: 260,
            color: "#ad1457",
            boxShadow: "0 2px 8px 0 #f8bbd0"
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Join</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Subscribe to Club NOOOK through monthly, annual or lifetime membership.</p>
          <a
            href="/membership"
            style={{ color: "#fff", background: "#f06292", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}
          >
            Become a Member
          </a>
        </div>
        <div
          style={{
            flex: "1 1 280px",
            background: "#f8bbd0",
            borderRadius: 12,
            padding: 28,
            minWidth: 260,
            color: "#ad1457",
            boxShadow: "0 2px 8px 0 #f8bbd0"
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Volunteer</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Send us a handmade crochet item for sale. Proceeds go directly to our beneficiaries.</p>
          <a
            href="mailto:NOOOK.secretary@gmail.com"
            style={{ color: "#fff", background: "#f06292", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}
          >
            Contact Us
          </a>
        </div>
        <div
          style={{
            flex: "1 1 280px",
            background: "#fce4ec",
            borderRadius: 12,
            padding: 28,
            minWidth: 260,
            color: "#ad1457",
            boxShadow: "0 2px 8px 0 #f8bbd0"
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Donate</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Purchase our youth-made crochet items at our shop. We ship nationwide!</p>
          <a
            href="/store"
            style={{ color: "#fff", background: "#f06292", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}
          >
            Shop Now
          </a>
        </div>
        <div
          style={{
            flex: "1 1 280px",
            background: "#f3e5f5",
            borderRadius: 12,
            padding: 28,
            minWidth: 260,
            color: "#ad1457",
            boxShadow: "0 2px 8px 0 #f8bbd0"
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Sponsor</h3>
          <p style={{ fontSize: 18, marginBottom: 8 }}>Support our cause by sponsoring NOOOK.</p>
          <a
            href="/sponsors"
            style={{ color: "#fff", background: "#f06292", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}
          >
            Become a Sponsor
          </a>
        </div>
      </section>
      <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
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
          Email Us to Get Involved
        </a>
      </div>
      <section style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20, color: "var(--accent-dark)" }}>
          Share the Love • Protect a Home • Offer New Hope
        </h2>
        <p style={{ fontSize: 22, marginBottom: 0, color: "var(--accent)" }}>
          Together, we spark change.
        </p>
      </section>
    </main>
  );
}


