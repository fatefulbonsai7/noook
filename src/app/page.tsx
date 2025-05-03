import Image from "next/image";


import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  // Read latest blog post
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
      {/*latestPost && (
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
      )*/}
      {/* Hero Section - Ellie Greeting */}
      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48, background: "#fff0f6", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px 0 #f8bbd0" }}>
        <Image
          src="/ellie.png"
          alt="Ellie from NOOOK smiling with NOOK letters on her leg"
          width={340}
          height={400}
          style={{ maxWidth: "100%", height: "auto", borderRadius: 18, marginBottom: 18, boxShadow: "0 2px 12px 0 #f8bbd0" }}
          priority
        />
        <h1 style={{ fontSize: 48, fontWeight: 900, marginBottom: 10, color: "#ad1457" }}>Hi! I’m Ellie from NOOOK!</h1>
        <p style={{ fontSize: 22, maxWidth: 600, margin: "0 auto", marginBottom: 8 }}>
          NOOOK is like a safe quiet nook with a crochet hook. Me and my friends started it with our moms because we wanted to help people who don’t have homes. We crochet things (like patches and stuffies!) and raise money to give to shelters, kids, and families who really need it.
        </p>
        <p style={{ fontSize: 20, maxWidth: 600, margin: "0 auto", marginBottom: 8 }}>
          We’re trying to raise a lot this year so we can give big grants to groups that help people right away.
        </p>
        <p style={{ fontSize: 20, maxWidth: 600, margin: "0 auto", marginBottom: 8 }}>
          Thanks for reading! I hope you’ll cheer us on! <span role="img" aria-label="smile">😊</span>
        </p>
        <p style={{ fontWeight: 700, marginTop: 8, color: "#f06292" }}>Love, Ellie & Team NOOOK 💗</p>
      </section>

      {/* Our Story Section */}
      <section style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", background: "#f8bbd0", borderRadius: 18, padding: 32, marginBottom: 48, boxShadow: "0 2px 12px 0 #f8bbd0" }}>
        <Image
          src="/board of directors.png"
          alt="NOOOK founders group photo"
          width={240}
          height={320}
          style={{ borderRadius: 18, marginRight: 32, marginBottom: 16, boxShadow: "0 2px 8px 0 #f06292", objectFit: "cover" }}
        />
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, color: "#ad1457" }}>Story of NOOOK</h2>
          <blockquote style={{ fontStyle: "italic", color: "#ad1457", marginBottom: 14 }}>
            “We just wanted to show our daughters that even small acts—like a crochet—can make a big difference.”
          </blockquote>
          <p style={{ fontSize: 20, marginBottom: 8 }}>
            NOOOK began with three Girl Scout moms—Lily, Stina, and Grace—who shared a love for crochet and a heart for helping others. They encouraged their daughters to turn creativity into action, raising funds for those experiencing homelessness.
          </p>
          <p style={{ fontSize: 20, marginBottom: 0 }}>
            Today, this small idea has grown into a youth-led movement rooted in compassion, leadership, and community impact.
          </p>
        </div>
      </section>

      {/* Meet the Mascots Section */}
      <section style={{ background: "#fffde7", borderRadius: 18, padding: 32, marginBottom: 48, boxShadow: "0 2px 8px 0 #ffe082", textAlign: "center" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 18, color: "#ad1457" }}>Meet the NOOOK Mascots</h2>
        <Image
          src="/mascots.png"
          alt="NOOOK mascots: bear, frog, and bird"
          width={420} // Replace with your image's actual width
          height={280} // Replace with your image's actual height
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 12, marginBottom: 18, boxShadow: "0 2px 8px 0 #ffe082" }}
        />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28 }}>
          <div style={{ minWidth: 160, maxWidth: 220, background: "#ffe4ec", borderRadius: 10, padding: 18, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>🧸</span>
            <h3 style={{ fontWeight: 700, fontSize: 22, margin: "8px 0" }}>Brown Bear</h3>
            <p style={{ fontSize: 17, margin: 0 }}>Sincere, kind, and always ready to help others.</p>
          </div>
          <div style={{ minWidth: 160, maxWidth: 220, background: "#e3f9e5", borderRadius: 10, padding: 18, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>🐸</span>
            <h3 style={{ fontWeight: 700, fontSize: 22, margin: "8px 0" }}>Green Frog</h3>
            <p style={{ fontSize: 17, margin: 0 }}>Courteous yet playful, and full of creative ideas.</p>
          </div>
          <div style={{ minWidth: 160, maxWidth: 220, background: "#e3f2fd", borderRadius: 10, padding: 18, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>🕊️</span>
            <h3 style={{ fontWeight: 700, fontSize: 22, margin: "8px 0" }}>Blue Bird</h3>
            <p style={{ fontSize: 17, margin: 0 }}>Generous, thoughtful, and always spreading hope.</p>
          </div>
        </div>
        <p style={{ fontSize: 18, marginTop: 18, color: "#ad1457" }}>
          These mascots, inspired by the girls themselves, remind us that everyone—no matter how young—can be a soft-hearted hero for change.
        </p>
      </section>

      {/* How We Help Section */}
      <section style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", background: "#e3f9e5", borderRadius: 18, padding: 32, marginBottom: 48, boxShadow: "0 2px 8px 0 #b2dfdb" }}>
        <Image
          src="/deception pass.png"
          alt="Two girls making a heart by the water"
          width={240}
          height={320}
          style={{ borderRadius: 14, marginRight: 32, marginBottom: 16, boxShadow: "0 2px 8px 0 #b2dfdb" }}
        />
        <div style={{ flex: 1, minWidth: 250 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 10, color: "#388e3c" }}>How We Help</h2>
          <p style={{ fontSize: 19, marginBottom: 8 }}>
            Every year, we crochet and sell hundreds of patches, stuffies, and gifts to raise money for shelters, kids, and families in need.
          </p>
          <p style={{ fontSize: 19, marginBottom: 8 }}>
            Our youth-led team works together to make a real difference—one stitch, one act of kindness, and one family at a time.
          </p>
          <p style={{ fontSize: 19, marginBottom: 0 }}>
            Together, we’re not just raising funds—we’re raising hope and creating a future where everyone has a place to call home.
          </p>
        </div>
      </section>

      {/* Get Involved Section (reuse CTAs) */}
      <section style={{ textAlign: "center", marginBottom: 48 }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 18, color: "#ad1457" }}>Empowering Families, One Crochet at a Time.
          <br></br>
          Join us in making this vision a reality!
        </h2>
        <p style={{ fontSize: 22, marginBottom: 0, color: "#ad1457" }}>
          Together, we’re not just raising funds—we’re empowering youth, raising hope, and creating a future where everyone has a place to call home.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", marginBottom: 24 }}>
          <div style={{ flex: "1 1 260px", background: "#ffe4ec", borderRadius: 12, padding: 24, minWidth: 220, color: "#ad1457", boxShadow: "0 2px 8px 0 #f8bbd0" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Donate</h3>
            <p style={{ fontSize: 17, marginBottom: 8 }}>Help us give big grants to groups that help people right away.</p>
            <a href="/store" style={{ color: "#fff", background: "#f06292", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}>Browse Now</a>
          </div>
          <div style={{ flex: "1 1 260px", background: "#ffe4ec", borderRadius: 12, padding: 24, minWidth: 220, color: "#ad1457", boxShadow: "0 2px 8px 0 #f8bbd0" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Sponsor</h3>
            <p style={{ fontSize: 17, marginBottom: 8 }}>Support our mission and empower youth-led giving.</p>
            <a href="/sponsors" style={{ color: "#fff", background: "#f06292", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}>Become a Sponsor</a>
          </div>
          <div style={{ flex: "1 1 260px", background: "#f3e5f5", borderRadius: 12, padding: 24, minWidth: 220, color: "#ad1457", boxShadow: "0 2px 8px 0 #f8bbd0" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Join</h3>
            <p style={{ fontSize: 17, marginBottom: 8 }}>Subscribe to Club NOOOK through monthly, annual or lifetime membership</p>
            <a href="/membership" style={{ color: "#fff", background: "#ad1457", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}>Become a Member</a>
          </div>
          <div style={{ flex: "1 1 260px", background: "#f3e5f5", borderRadius: 12, padding: 24, minWidth: 220, color: "#ad1457", boxShadow: "0 2px 8px 0 #f8bbd0" }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Volunteer</h3>
            <p style={{ fontSize: 17, marginBottom: 8 }}>Send us a handmade crochet item for sale. Proceeds go directly to our beneficiaries.</p>
            <a href="mailto:NOOOK.secretary@gmail.com" style={{ color: "#fff", background: "#ad1457", fontWeight: 600, padding: "6px 16px", borderRadius: 8, display: "inline-block", marginTop: 8 }}>Contact Us</a>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section style={{ background: "#fff0f6", borderRadius: 18, padding: 32, marginBottom: 48, boxShadow: "0 2px 8px 0 #f8bbd0", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 10, color: "#ad1457" }}>Follow Us on Instagram!</h2>
        <p style={{ fontSize: 18, marginBottom: 12 }}>Join our community and stay inspired by the stories of hope and creativity.</p>
        <a href="https://www.instagram.com/ehzzo/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/images/instagram1.png" 
            alt="Instagram post preview" 
            width={500}
            height={200}
            style={{ maxWidth: 500, width: "100%", borderRadius: 12, margin: "16px auto", boxShadow: "0 2px 8px 0 #f8bbd0", cursor: "pointer" }}
          />
        </a>
        <div style={{ marginTop: 16 }}>
          <a href="https://www.instagram.com/ehzzo/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
            <Image 
              src="/icon-ig.svg" 
              alt="Instagram icon" 
              width={40}
              height={40}
              style={{ verticalAlign: "middle", cursor: "pointer", display: "block", margin: "0 auto" }}
            />
          </a>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section style={{ background: "#fff0f6", borderRadius: 18, padding: 32, marginBottom: 48, boxShadow: "0 2px 8px 0 #f8bbd0", textAlign: "center" }}>
        {/*<h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 10, color: "#ad1457" }}>Stay in the Loop!</h2>
        <p style={{ fontSize: 18, marginBottom: 12 }}>Sign up for our newsletter and follow our journey of hope, creativity, and compassion.</p>
        <form action="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, maxWidth: 320, margin: "0 auto" }}>
          <input type="email" placeholder="Your email address" style={{ padding: 10, borderRadius: 8, border: "1px solid #f06292", fontSize: 16, marginBottom: 4, width: "100%" }} required />
          <button type="submit" style={{ background: "#f06292", color: "#fff", fontWeight: 700, padding: "10px 24px", borderRadius: 8, border: "none", fontSize: 18, cursor: "pointer" }}>Subscribe</button>
        </form>*/}
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 10, color: "#ad1457" }}>Stay in the Loop!</h2>
          <p style={{ fontSize: 18, marginBottom: 12 }}>Sign up for our newsletter and follow our journey of hope, creativity, and compassion.</p>
          <div style={{ margin: '0 auto', maxWidth: 700 }} dangerouslySetInnerHTML={{ __html: `<iframe width="700" height="305" src="https://sibforms.com/serve/MUIFALUJ_F6nQuoPMDXi2f2H_-nihde4rYlZAklbsivf2zNjBUvK71i9bV_5O0HXUYuq5gmQbMj6bjjJ-RqBWvOpvm3ifcRkxSdxB8pGWaBGLSu6Whg6RgYaCJiXHFT1Dj-VVyMq21pGW3jZccYdL7zSz8XbJjDewpcAPcz5D3ZiSvvsya8zn0zSAs2JCQtrTELZdJE41MpR9gE1" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>` }} />
        </div>
      </section>

      {/* Email Contact Section */}
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


