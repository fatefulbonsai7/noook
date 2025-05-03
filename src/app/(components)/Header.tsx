"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/membership", label: "Membership" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/grants", label: "Grants" },
  { href: "/store", label: "Store" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ height: 80, boxShadow: "0 2px 8px 0 #f8bbd0", background: "#fff0f6", position: "sticky", top: 0, zIndex: 10 }}>
      <nav className="header-nav">
        <div style={{ flex: "0 0 120px" }}>
          <Link href="/">
            <Image src="/logo.png" alt="Noook Logo" width={60} height={60} style={{ objectFit: "contain" }} />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <style jsx>{`
        .header-nav {
          display: flex;
          align-items: center;
          height: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
        }
        .nav-links {
          flex: 1;
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .nav-link {
          font-size: 20px;
          font-weight: 500;
          text-decoration: none;
          color: #ad1457;
          transition: color 0.2s;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 12px;
          z-index: 20;
        }
        .hamburger-bar {
          width: 28px;
          height: 4px;
          background: #ad1457;
          margin: 3px 0;
          border-radius: 2px;
          transition: all 0.2s;
        }
        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: #fff0f6;
          box-shadow: 0 2px 8px 0 #f8bbd0;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 19;
          padding: 16px 0;
        }
        .mobile-nav-link {
          font-size: 22px;
          font-weight: 600;
          color: #ad1457;
          text-decoration: none;
          padding: 12px 0;
          width: 100%;
          text-align: center;
        }
        @media (max-width: 800px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
        @media (min-width: 801px) {
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
