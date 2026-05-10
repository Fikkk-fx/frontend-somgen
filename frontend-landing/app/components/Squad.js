"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Squad.module.css";

const agents = [
  {
    id: "news-scout",
    name: "News Scout",
    alias: "THE RADAR",
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f2ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    role: "Data Intel",
    specialty: "Real-time sentiment & scraping",
    personality: "Hyper-active, fast, data-driven",
    color: "#00f2ff",
    gradient: "linear-gradient(135deg, #00f2ff, #0ea5e9)",
    image: "/agents/news-scout.png",
    stats: { speed: 95, risk: 40, accuracy: 85 },
    quote: "BOSS! KABAR PANAS! VOLUME MELEDAK DI SOMNIA!",
  },
  {
    id: "trend-master",
    name: "Trend Master",
    alias: "THE BULL",
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff0055" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14 0-5.5 3.5-7.5-2.5 5 .5 4 1.5 8 .86 3.43-1.22 5.5-4 6.5"/><path d="M16 18a7 7 0 1 1-12-5"/></svg>,
    role: "Strategy A",
    specialty: "Bull/Bear momentum runs",
    personality: "Aggressive, powerful, high-risk",
    color: "#ff0055",
    gradient: "linear-gradient(135deg, #ff0055, #f43f5e)",
    image: "/agents/trend-master.png",
    stats: { speed: 80, risk: 95, accuracy: 70 },
    quote: "INI MOMEN KITA! BULLISH RUSH! HAJAR 20X LONG!",
  },
  {
    id: "zen-monk",
    name: "Zen Monk",
    alias: "THE PATIENT",
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    role: "Strategy B",
    specialty: "Wick Rejection & Patience",
    personality: "Calm, calculated, low-drawdown",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    image: "/agents/zen-monk.png",
    stats: { speed: 45, risk: 20, accuracy: 92 },
    quote: "TENANG... TUNGGU WICK NYA MUNCUL. SABAR ADALAH CUAN.",
  },
  {
    id: "the-general",
    name: "The General",
    alias: "THE DECIDER",
    emoji: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M3 20h18"/></svg>,
    role: "Decision",
    specialty: "Consensus & Final Execution",
    personality: "Authoritative, wise, the commander",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    image: "/agents/the-general.png",
    stats: { speed: 70, risk: 50, accuracy: 98 },
    quote: "KONSENSUS DICAPAI! EKSEKUSI SEKARANG!",
  },
];

function StatBar({ label, value, color, animate }) {
  return (
    <div className={styles.statRow}>
      <div className={styles.statInfo}>
        <span className={styles.statLabel}>{label}</span>
        <span className={styles.statValue} style={{ color }}>{value}%</span>
      </div>
      <div className="stat-bar-container">
        <div
          className={`stat-bar-fill ${animate ? "animated" : ""}`}
          style={{
            width: animate ? `${value}%` : "0%",
            background: color,
            boxShadow: animate ? `0 0 10px ${color}40` : "none",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Squad() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            // Animate cards sequentially
            cardsRef.current.forEach((card, i) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add(styles.visible);
                }, i * 200);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.squad}`} id="squad" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> The Squad</span>
          <h2 className="section-title">
            Meet Your <span className="gradient-text">Agents</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Four specialized AI entities, each with unique skills and
            personalities. Together, they form the ultimate trading squad.
          </p>
        </div>

        <div className={styles.grid}>
          {agents.map((agent, i) => (
            <div
              key={agent.id}
              className={styles.card}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ "--agent-color": agent.color }}
            >
              {/* Top Glow Line */}
              <div
                className={styles.cardGlow}
                style={{ background: agent.gradient }}
              ></div>

              {/* Avatar */}
              <div className={styles.avatarWrap}>
                <div
                  className={styles.avatarRing}
                  style={{ borderColor: agent.color }}
                >
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    width={120}
                    height={120}
                    className={styles.avatar}
                  />
                </div>
                <span className={styles.emoji}>{agent.emoji}</span>
              </div>

              {/* Info */}
              <div className={styles.info}>
                <h3 className={styles.agentName}>{agent.name}</h3>
                <span
                  className={styles.alias}
                  style={{ color: agent.color }}
                >
                  {agent.alias}
                </span>
                <div className={styles.tags}>
                  <span className={styles.roleTag}>{agent.role}</span>
                  <span className={styles.specialtyTag}>
                    {agent.specialty}
                  </span>
                </div>
                <p className={styles.personality}>{agent.personality}</p>
              </div>

              {/* Stats */}
              <div className={styles.statsBlock}>
                <StatBar
                  label="Speed"
                  value={agent.stats.speed}
                  color={agent.color}
                  animate={true}
                />
                <StatBar
                  label="Risk"
                  value={agent.stats.risk}
                  color={agent.color}
                  animate={true}
                />
                <StatBar
                  label="Accuracy"
                  value={agent.stats.accuracy}
                  color={agent.color}
                  animate={true}
                />
              </div>

              {/* Speech Bubble */}
              <div className={styles.speechBubble}>
                <p>{agent.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
