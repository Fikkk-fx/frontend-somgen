import Image from "next/image";
import styles from "./AgentSidebar.module.css";

const agents = [
  {
    id: "news-scout",
    name: "News Scout",
    alias: "THE RADAR",
    color: "#00f2ff",
    rgb: "0, 242, 255",
    image: "/agents/news-scout.png",
  },
  {
    id: "trend-master",
    name: "Trend Master",
    alias: "THE BULL",
    color: "#ff0055",
    rgb: "255, 0, 85",
    image: "/agents/trend-master.png",
  },
  {
    id: "zen-monk",
    name: "Zen Monk",
    alias: "THE PATIENT",
    color: "#10b981",
    rgb: "16, 185, 129",
    image: "/agents/zen-monk.png",
  },
  {
    id: "the-general",
    name: "The General",
    alias: "THE DECIDER",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    image: "/agents/the-general.png",
  },
];

export default function AgentSidebar({ activeAgentId }) {
  return (
    <aside className={styles.sidebar}>
      {agents.map((agent) => {
        const isActive = activeAgentId === agent.id;
        return (
          <div
            key={agent.id}
            className={`${styles.agentCard} ${isActive ? styles.active : ""}`}
            style={{ 
              "--agent-color": agent.color,
              "--agent-color-rgb": agent.rgb 
            }}
          >
            <div className={styles.avatarWrap}>
              <div className={styles.avatarRing}>
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
              </div>
              <div className={styles.statusDot}></div>
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{agent.name}</h3>
              <span className={styles.alias}>{agent.alias}</span>
              <span className={styles.statusText}>
                {isActive ? "Processing..." : "Idle"}
              </span>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
