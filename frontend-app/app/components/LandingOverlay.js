"use client";

import { useState } from "react";
import styles from "./LandingOverlay.module.css";

const modes = [
  {
    id: "AGGRESSIVE",
    label: "AGGRESSIVE",
    desc: "Maximum leverage, high risk, high reward. Full offensive.",
    color: "#ff0055",
    gradient: "linear-gradient(135deg, #ff0055, #f43f5e)",
    icon: "⚡"
  },
  {
    id: "NORMAL",
    label: "NORMAL",
    desc: "Balanced approach. Smart entries with moderate risk.",
    color: "#00f2ff",
    gradient: "linear-gradient(135deg, #00f2ff, #0ea5e9)",
    icon: "🎯"
  },
  {
    id: "SAFETY",
    label: "SAFETY",
    desc: "Capital preservation first. DeFi yield focus.",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
    icon: "🛡️"
  }
];

const agents = [
  { name: "AGEN1", alias: "Technical Sniper", color: "#00f2ff" },
  { name: "AGEN2", alias: "Whale Hunter", color: "#ff0055" },
  { name: "AGEN3", alias: "Social Radar", color: "#ffea00" },
  { name: "AGEN4", alias: "The Judge", color: "#8b5cf6" },
];

export default function LandingOverlay({ show, onModeSelect }) {
  const [hoveredMode, setHoveredMode] = useState(null);

  if (!show) return null;

  return (
    <div className={`landing-overlay ${!show ? "hidden" : ""}`}>
      {/* Gradient Orbs */}
      <div className={styles.orbCyan}></div>
      <div className={styles.orbViolet}></div>
      <div className={styles.orbRed}></div>

      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Powered by Somnia L1
        </div>

        {/* Title */}
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>SOMGEN</span>
          <span className={styles.titleLine2}>
            <span className={styles.highlight}>PREDATOR</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Four autonomous AI agents debate, strategize, and execute trades
          in real-time on the Somnia Network. Choose your mission mode.
        </p>

        {/* Agent Showcase */}
        <div className={styles.agentShowcase}>
          {agents.map((a) => (
            <div key={a.name} className={styles.agentChip} style={{ "--chip-color": a.color }}>
              <span className={styles.chipDot}></span>
              <span className={styles.chipName}>{a.name}</span>
              <span className={styles.chipAlias}>{a.alias}</span>
            </div>
          ))}
        </div>

        {/* Mode Selection */}
        <div className={styles.modeGrid}>
          {modes.map((mode) => (
            <button
              key={mode.id}
              className={styles.modeCard}
              style={{ "--mode-color": mode.color, "--mode-gradient": mode.gradient }}
              onMouseEnter={() => setHoveredMode(mode.id)}
              onMouseLeave={() => setHoveredMode(null)}
              onClick={() => onModeSelect(mode.id)}
            >
              <div className={styles.modeGlow}></div>
              <span className={styles.modeIcon}>{mode.icon}</span>
              <span className={styles.modeName}>{mode.label}</span>
              <span className={styles.modeDesc}>{mode.desc}</span>
              <div className={styles.modeArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom tag */}
        <p className={styles.bottomTag}>SOMGEN CORE V3.0 — ENCRYPTED • AUTONOMOUS</p>
      </div>
    </div>
  );
}
