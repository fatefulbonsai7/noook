export default function Footer() {
  return (
    <footer style={{ background: "#fafbfc", minHeight: 400, padding: "64px 120px 32px 120px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
      {/* Column 1: Logo + Mission */}
      <div>
        <img src="/logo.png" alt="Noook Logo" style={{ height: 40, width: 120, objectFit: "contain", marginBottom: 16 }} />
        <p style={{ fontWeight: 500, fontSize: 18 }}>
          Empowering families, one creation at a time.
        </p>
      </div>
      {/* Column 2: Quick Links */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>Quick Links</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/membership">Membership</a></li>
          <li><a href="/sponsors">Sponsors</a></li>
          <li><a href="/grants">Grants</a></li>
          <li><a href="/store">Store</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
      {/* Column 3: Newsletter Signup */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>Newsletter</h4>
        <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input type="email" placeholder="Your email" style={{ height: 48, borderRadius: 8, border: "1px solid #ccc", padding: "0 16px" }} />
          <button type="submit" style={{ height: 48, borderRadius: 8, background: "#PX1", color: "#fff", fontWeight: 600, fontSize: 16, textTransform: "uppercase", border: "none" }}>Subscribe</button>
        </form>
      </div>
      {/* Column 4: Socials + Contact */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>Connect</h4>
        <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
          <a href="#"><img src="/icon-fb.svg" alt="Facebook" width={24} height={24} /></a>
          <a href="#"><img src="/icon-ig.svg" alt="Instagram" width={24} height={24} /></a>
          <a href="#"><img src="/icon-x.svg" alt="X" width={24} height={24} /></a>
        </div>
        <div style={{ fontSize: 16 }}>
          <p>Email: <a href="mailto:info@noook.org">info@noook.org</a></p>
        </div>
      </div>
    </footer>
  );
}
