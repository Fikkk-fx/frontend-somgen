import Image from "next/image";
import styles from "./AgentSidebar.module.css";

const agents = [
  {
    id: "agen1",
    name: "AGEN1",
    alias: "TECHNICAL SNIPER",
    role: "DIA Oracle • Chart Analysis",
    color: "#00f2ff",
    rgb: "0, 242, 255",
    gradient: "linear-gradient(135deg, #00f2ff, #0ea5e9)",
    image: "/agents/trend-master.png",
    stats: { speed: 95, risk: 40, accuracy: 85 },
  },
  {
    id: "agen2",
    name: "AGEN2",
    alias: "WHALE HUNTER",
    role: "On-Chain Intel • Smart Money",
    color: "#ff0055",
    rgb: "255, 0, 85",
    gradient: "linear-gradient(135deg, #ff0055, #f43f5e)",
    image: "/agents/zen-monk.png",
    stats: { speed: 80, risk: 95, accuracy: 70 },
  },
  {
    id: "agen3",
    name: "AGEN3",
    alias: "SOCIAL RADAR",
    role: "Sentiment • Community Audit",
    color: "#ffea00",
    rgb: "255, 234, 0",
    gradient: "linear-gradient(135deg, #ffea00, #f59e0b)",
    image: "/agents/news-scout.png",
    stats: { speed: 90, risk: 30, accuracy: 88 },
  },
  {
    id: "agen4",
    name: "AGEN4",
    alias: "THE JUDGE",
    role: "Consensus • Final Execution",
    color: "#8b5cf6",
    rgb: "139, 92, 246",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    image: "/agents/the-general.png",
    stats: { speed: 70, risk: 50, accuracy: 98 },
  },
];

function StatBar({ label, value, color, active }) {
  return (
    <div className={styles.statRow}>
      <div className={styles.statInfo}>
        <span className={styles.statLabel}>{label}</span>
        <span className={styles.statValue} style={{ color }}>{value}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: active ? `${value}%` : "0%",
            background: color,
            boxShadow: active ? `0 0 8px ${color}40` : "none",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function AgentSidebar({ activeAgentId, messages = [] }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>SQUAD</h2>
      </div>
      {agents.map((agent) => {
        const isActive = activeAgentId === agent.id;
        const hasSpoken = messages.some((m) => m.agentId === agent.id);
        const latestMsg = [...messages].reverse().find((m) => m.agentId === agent.id);
        const confidence = latestMsg?.confidence;

        return (
          <div
            key={agent.id}
            className={`${styles.agentCard} ${isActive ? styles.active : ""} ${hasSpoken ? styles.spoken : ""}`}
            style={{
              "--agent-color": agent.color,
              "--agent-color-rgb": agent.rgb,
            }}
          >
            {/* Top Glow */}
            <div className={styles.cardGlow} style={{ background: agent.gradient }}></div>

            <div className={styles.cardTop}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatarRing}>
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    width={36}
                    height={36}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.statusDot}></div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{agent.name}</h3>
                <span className={styles.alias}>{agent.alias}</span>
                <span className={styles.role}>{agent.role}</span>
              </div>
            </div>

            {/* Stats */}
            <div className={styles.statsBlock}>
              <StatBar label="SPD" value={agent.stats.speed} color={agent.color} active={isActive || hasSpoken} />
              <StatBar label="RSK" value={agent.stats.risk} color={agent.color} active={isActive || hasSpoken} />
              <StatBar label="ACC" value={agent.stats.accuracy} color={agent.color} active={isActive || hasSpoken} />
            </div>

            {/* Status */}
            <div className={styles.statusRow}>
              {isActive ? (
                <span className={styles.statusActive}>
                  <span className={styles.statusPulse}></span>
                  PROCESSING...
                </span>
              ) : confidence ? (
                <span className={styles.statusConfidence}>
                  CONFIDENCE: <strong style={{ color: agent.color }}>{confidence}%</strong>
                </span>
              ) : (
                <span className={styles.statusIdle}>STANDBY</span>
              )}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
