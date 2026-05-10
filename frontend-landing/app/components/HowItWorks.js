"use client";

import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Give Command",
    description:
      'Type your intent into the SOMGEN terminal — something like "carikan saya uang". That\'s all it takes to deploy the squad.',
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00f2ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
    color: "#00f2ff",
  },
  {
    number: "02",
    title: "Agents Debate",
    description:
      "The War Room activates. News Scout gathers intel, Trend Master and Zen Monk propose strategies, and they debate in real-time.",
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3l4 4 0-4h3z"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/></svg>,
    color: "#8b5cf6",
  },
  {
    number: "03",
    title: "Profit Executed",
    description:
      "The General reaches consensus. The trade is executed on-chain via Somnia's sub-second finality. Mission accomplished.",
    icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    color: "#f59e0b",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.howItWorks}`} id="how-it-works">
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> How It Works</span>
          <h2 className="section-title">
            Three Steps to <span className="gradient-text-warm">Profit</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`${styles.step} reveal reveal-delay-${i + 1}`}
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.connectorLine}></div>
                </div>
              )}

              <div
                className={styles.stepNumber}
                style={{
                  background: `linear-gradient(135deg, ${step.color}20, ${step.color}05)`,
                  borderColor: `${step.color}40`,
                }}
              >
                <span style={{ color: step.color }}>{step.number}</span>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={`comic-card ${styles.ctaCard}`}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>Ready to Deploy Your Squad?</h3>
              <p className={styles.ctaText}>
                Experience the future of autonomous DeFi trading. Enter the
                Coliseum and let your agents hunt for profit.
              </p>
              <div className={styles.ctaButtons}>
                <a href="#hero" className="btn btn-primary glow-pulse">
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
                  Explore Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
