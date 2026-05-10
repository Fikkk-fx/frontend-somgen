"use client";

import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container`}>
        <div className={styles.header}>
          <span className="section-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M2 12h20"/><path d="M12 2v20"/><circle cx="7" cy="7" r="1" fill="currentColor"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg> The Problem & Solution</span>
          <h2 className={`section-title ${styles.title}`}>
            DeFi is <span className="gradient-text-warm">Boring</span>.
            <br />
            We{"'"}re Fixing That.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Problem Card */}
          <div className={`comic-card ${styles.card} reveal`}>
            <div className={styles.cardIcon}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="9" y1="9" x2="9.01" y2="9"/><path d="M8 13a4 4 0 0 0 8 0"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
            <h3 className={styles.cardTitle}>The Problem</h3>
            <p className={styles.cardText}>
              Current decentralized finance is filled with complex charts, dry
              numbers, and steep learning curves. It lacks the entertainment and
              <strong> life </strong>
              that a high-performance network like Somnia can support.
            </p>
            <ul className={styles.painPoints}>
              <li>
                <span className={styles.painDot}></span>
                Complex, intimidating interfaces
              </li>
              <li>
                <span className={styles.painDot}></span>
                Dry numbers with no personality
              </li>
              <li>
                <span className={styles.painDot}></span>
                Zero entertainment value
              </li>
              <li>
                <span className={styles.painDot}></span>
                Steep learning curve for beginners
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className={`comic-card ${styles.card} ${styles.solutionCard} reveal reveal-delay-2`}>
            <div className={styles.cardIcon}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
            <h3 className={styles.cardTitle}>The Solution</h3>
            <p className={styles.cardText}>
              <strong>SOMGEN</strong> leverages Somnia{"'"}s{" "}
              <strong>1 Million TPS</strong> and{" "}
              <strong>Agentic L1 infrastructure</strong> to create a squad of
              autonomous entities that don{"'"}t just trade — they{" "}
              <em>live, argue, and execute</em> strategies in real-time.
            </p>
            <ul className={styles.solutionPoints}>
              <li>
                <span className={styles.solutionDot}></span>
                Comic-book style interactive UI
              </li>
              <li>
                <span className={styles.solutionDot}></span>
                AI agents with unique personalities
              </li>
              <li>
                <span className={styles.solutionDot}></span>
                Real-time autonomous debate & execution
              </li>
              <li>
                <span className={styles.solutionDot}></span>
                Gamified trading experience
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stats */}
        <div className={styles.techRow}>
          {[
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, value: "1M TPS", label: "Transaction Speed" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, value: "IceDB", label: "Storage Engine" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, value: "MultiStream", label: "Consensus" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="16" r="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>, value: "On-Chain AI", label: "Agent Runtime" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`${styles.techItem} reveal reveal-delay-${i + 1}`}
            >
              <span className={styles.techIcon}>{item.icon}</span>
              <span className={styles.techValue}>{item.value}</span>
              <span className={styles.techLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
