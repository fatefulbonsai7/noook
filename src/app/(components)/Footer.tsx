import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#f8bbd0", color: "var(--foreground)", minHeight: 400, padding: "64px 120px 32px 120px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
      {/* Column 1: Logo + Mission */}
      <div>
        <Image src="/logo.png" alt="Noook Logo" width={120} height={120} style={{ objectFit: "contain", marginBottom: 16 }} />
        <p style={{ fontWeight: 500, fontSize: 18, color: "var(--foreground)" }}>
          Empowering families, one creation at a time.
        </p>
      </div>
      {/* Column 2: Quick Links */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12, color: "var(--accent-dark)" }}>Quick Links</h4>
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
        <div style={{ margin: '0 auto', maxWidth: 540 }} dangerouslySetInnerHTML={{ __html: `<iframe width="540" height="305" src="https://sibforms.com/serve/MUIFALUJ_F6nQuoPMDXi2f2H_-nihde4rYlZAklbsivf2zNjBUvK71i9bV_5O0HXUYuq5gmQbMj6bjjJ-RqBWvOpvm3ifcRkxSdxB8pGWaBGLSu6Whg6RgYaCJiXHFT1Dj-VVyMq21pGW3jZccYdL7zSz8XbJjDewpcAPcz5D3ZiSvvsya8zn0zSAs2JCQtrTELZdJE41MpR9gE1" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>` }} />
      </div>
      {/* Column 4: Socials + Contact */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: 20, marginBottom: 12 }}>Connect</h4>
        <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
          {/* <a href="#"><Image src="/icon-fb.svg" alt="Facebook" width={24} height={24} /></a> */}
          <a href="https://www.instagram.com/ehzzo/" target="_blank" rel="noopener noreferrer"><Image src="/icon-ig.svg" alt="Instagram" width={24} height={24} /></a>
          {/* <a href="#"><Image src="/icon-x.svg" alt="X" width={24} height={24} /></a> */}
        </div>
        <div style={{ fontSize: 16 }}>
          <p>Email: <a href="mailto:NOOOK.secretary@gmail.com">NOOOK.secretary@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
