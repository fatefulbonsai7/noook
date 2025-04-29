import Link from "next/link";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/membership", label: "Membership" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/grants", label: "Grants" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  return (
    <header style={{ height: 80, boxShadow: "0 2px 4px rgba(0,0,0,0.08)", background: "#fff", position: "sticky", top: 0, zIndex: 10 }}>
      <nav style={{ display: "flex", alignItems: "center", height: "100%", maxWidth: 1440, margin: "0 auto", padding: "0 120px" }}>
        <div style={{ flex: "0 0 240px" }}>
          <Link href="/">
            <img src="/logo.png" alt="Noook Logo" style={{ height: 40, width: 120, objectFit: "contain" }} />
          </Link>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", gap: 40 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={{ fontSize: 24, fontWeight: 500, textDecoration: "none", color: "#222" }}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
