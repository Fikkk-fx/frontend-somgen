import Image from "next/image";
import styles from "./WarRoom.module.css";

const agentsConfig = [
  {
    id: "agen1",
    name: "AGEN1: TECHNICAL SNIPER",
    color: "#00f2ff",
    rgb: "0, 242, 255",
    textColor: "#000",
    avatar: "/agents/trend-master.png",
    media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZrcG45bm80ZmE0cGVvN3RjcmI0cGlrOXhsczBrZXRwdjAxbWlsMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vAtC76U3uS7877rXz/giphy.gif",
    tag: "LIVE CHART FEED",
    defaultBubble: "SCANNING TECHNICALS..."
  },
  {
    id: "agen2",
    name: "AGEN2: WHALE HUNTER",
    color: "#ff0055",
    rgb: "255, 0, 85",
    textColor: "#fff",
    avatar: "/agents/zen-monk.png",
    media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWp5NWc4eHpjZ25ycXltNW5rZHpjZTh3eTBmaHk2bmQ3NG1ndnRhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uS071hlk6FcrGEF36p/giphy.gif",
    tag: "SOMNIA MEMPOOL",
    defaultBubble: "TRACKING WHALES..."
  },
  {
    id: "agen3",
    name: "AGEN3: SOCIAL RADAR",
    color: "#ffea00",
    rgb: "255, 234, 0",
    textColor: "#000",
    avatar: "/agents/news-scout.png",
    media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGhjdXU5YmJnY25ycXltNW5rZHpjZTh3eTBmaHk2bmQ3NG1ndnRhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lopx9eUi34rbq/giphy.gif",
    tag: "SOCIAL SCOUT FEED",
    defaultBubble: "SCRAPING SENTIMENT..."
  },
  {
    id: "agen4",
    name: "AGEN4: THE JUDGE",
    color: "#8b5cf6",
    rgb: "139, 92, 246",
    textColor: "#fff",
    avatar: "/agents/the-general.png",
    media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZrcG45bm80ZmE0cGVvN3RjcmI0cGlrOXhsczBrZXRwdjAxbWlsMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a3fV9o23qWcI8/giphy.gif",
    tag: "VAULT COMMAND",
    defaultBubble: "AWAITING CONSENSUS..."
  }
];

export default function WarRoom({ messages, isTyping, activeAgentId }) {
  const latestMessages = agentsConfig.reduce((acc, agent) => {
    const msg = [...messages].reverse().find(m => m.agentId === agent.id);
    acc[agent.id] = msg;
    return acc;
  }, {});

  // Determine which agents are revealed (active or have already spoken)
  const revealedIds = new Set();
  agentsConfig.forEach(agent => {
    if (activeAgentId === agent.id || latestMessages[agent.id]) {
      revealedIds.add(agent.id);
    }
  });

  // Count how many are revealed to determine the grid layout
  const revealedCount = revealedIds.size;
  const allDone = messages.length > 0 && !activeAgentId;

  return (
    <div
      className={`${styles.comicGrid} ${allDone ? styles.gridAllDone : ""}`}
      style={{ "--revealed-count": revealedCount }}
    >
      {agentsConfig.map((agent) => {
        const isActive = activeAgentId === agent.id;
        const latestMsg = latestMessages[agent.id];
        const hasSpoken = !!latestMsg;
        const isRevealed = revealedIds.has(agent.id);
        const bubbleText = isActive && isTyping ? "...DEEP REASONING..." : latestMsg?.text;
        const showBubble = isActive || hasSpoken;
        const confidence = latestMsg?.confidence;

        // Not revealed yet — don't render at all
        if (!isRevealed) return null;

        return (
          <div
            key={agent.id}
            className={`${styles.panel} ${styles.panelRevealed} ${isActive ? styles.speaking : ""} ${hasSpoken && !isActive ? styles.done : ""}`}
            style={{
              "--panel-color": agent.color,
              "--panel-color-rgb": agent.rgb
            }}
          >
            {/* Media */}
            <div className={styles.panelMedia}>
              <img src={agent.media} alt={agent.name} />
              <div className={styles.liveTag}>{agent.tag}</div>
              {confidence && (
                <div className={styles.confidenceBadge} style={{ "--conf-color": confidence > 85 ? "#10b981" : "#f59e0b" }}>
                  CONFIDENCE: {confidence}%
                </div>
              )}
            </div>

            {/* Speech Bubble */}
            <div className={`${styles.speechBubble} ${showBubble ? styles.showBubble : ""}`}>
              {isActive && isTyping && (
                <div className={styles.thinkingLabel}>DEEP REASONING...</div>
              )}
              {bubbleText || agent.defaultBubble}
            </div>

            {/* Footer */}
            <div
              className={styles.panelFooter}
              style={{ background: agent.color, color: agent.textColor }}
            >
              <div className={styles.footerAvatar}>
                <Image src={agent.avatar} alt="Avatar" width={28} height={28} />
              </div>
              <span className={styles.footerName}>{agent.name}</span>
            </div>
          </div>
        );
      })}

      {/* Empty state placeholder */}
      {revealedCount === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>⚔️</div>
          <div className={styles.emptyText}>AWAITING ORDERS, COMMANDER</div>
          <div className={styles.emptySub}>Select a mode to deploy agents</div>
        </div>
      )}
    </div>
  );
}
