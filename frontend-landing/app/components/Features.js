"use client";

import styles from "./Features.module.css";

const features = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
    title: "Comic Book Aesthetic",
    description:
      "A premium 2D comic-style UI that makes trading feel like an action movie. Bold visuals, dynamic panels, and explosive action words.",
    gradient: "linear-gradient(135deg, #ff0055, #f43f5e)",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/></svg>,
    title: "Autonomous Debate",
    description:
      'Watch your agents argue in the "War Room" before committing your assets. Real-time consensus with personality-driven strategies.',
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    title: "Sub-Second Execution",
    description:
      "Powered by Somnia's IceDB and MultiStream consensus for instant trade finality. 1M TPS with sub-cent transaction fees.",
    gradient: "linear-gradient(135deg, #00f2ff, #0ea5e9)",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>,
    title: "Gamified DeFi",
    description:
      "Trade to evolve your agents, unlock gear, and dominate the Somnia Metaverse. DeFi meets gaming in the most entertaining way.",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
  },
];

export default function Features() {
  return (
    <section className={`section ${styles.features}`} id="features">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Key Features</span>
          <h2 className="section-title">
            Why <span className="gradient-text">SOMGEN</span>?
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Not just another trading bot. SOMGEN is a living, breathing agentic
            ecosystem with a soul.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`glass-card ${styles.card} reveal reveal-delay-${i + 1}`}
            >
              <div
                className={styles.iconWrap}
                style={{ background: feature.gradient }}
              >
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <div
                className={styles.cardLine}
                style={{ background: feature.gradient }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
