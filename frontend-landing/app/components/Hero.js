"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      el.classList.add(styles.animate);
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Gradient orbs */}
      <div className={styles.orbCyan}></div>
      <div className={styles.orbViolet}></div>
      <div className={styles.orbRed}></div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.badgeRow}>
          <span className="section-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Powered by Somnia L1
          </span>
        </div>

        <h1 className={styles.title} ref={titleRef}>
          <span className={styles.titleLine1}>THE AGENTIC</span>
          <span className={styles.titleLine2}>
            L1 <span className={styles.highlight}>COLISEUM</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Four autonomous AI agents. One mission. They debate, strategize, and
          execute trades in real-time — all on-chain. Welcome to DeFi{"'"}s
          action-packed future.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>1M+</span>
            <span className={styles.statLabel}>TPS</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statValue}>4</span>
            <span className={styles.statLabel}>AI Agents</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statValue}>&lt;1s</span>
            <span className={styles.statLabel}>Finality</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statValue}>24/7</span>
            <span className={styles.statLabel}>Autonomous</span>
          </div>
        </div>

        <div className={styles.ctas}>
          <a href="#squad" className="btn btn-primary glow-pulse">
            Enter War Room
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="https://docs.somnia.network"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Read Docs
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot}></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
