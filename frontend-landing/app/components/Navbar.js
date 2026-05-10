"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Squad", href: "#squad" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContent}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
              <path d="M13 19l6-6"/>
              <path d="M16 16l3.5 3.5"/>
              <path d="M19.5 19.5l1 1"/>
              <path d="M9.5 6.5L21 18v3h-3L6.5 9.5"/>
              <path d="M11 5l-6 6"/>
              <path d="M8 8L4.5 4.5"/>
              <path d="M4.5 4.5l-1-1"/>
            </svg>
          </span>
          <span className={styles.logoText}>SOMGEN</span>
        </a>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.navActions}>
          <a
            href="https://docs.somnia.network"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.docsLink}
          >
            Docs
          </a>
          <a href="#squad" className={`btn btn-primary ${styles.launchBtn}`}>
            Enter Coliseum
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
