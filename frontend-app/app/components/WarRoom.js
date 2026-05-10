import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WarRoom.module.css";

const agentsMap = {
  "news-scout": { name: "News Scout", color: "#00f2ff", rgb: "0, 242, 255", img: "/agents/news-scout.png" },
  "trend-master": { name: "Trend Master", color: "#ff0055", rgb: "255, 0, 85", img: "/agents/trend-master.png" },
  "zen-monk": { name: "Zen Monk", color: "#10b981", rgb: "16, 185, 129", img: "/agents/zen-monk.png" },
  "the-general": { name: "The General", color: "#f59e0b", rgb: "245, 158, 11", img: "/agents/the-general.png" }
};

export default function WarRoom({ messages, isTyping, activeAgentId }) {
  const containerRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className={styles.warroom} ref={containerRef}>
      {messages.length === 0 && !isTyping ? (
        <div className={styles.emptyState}>
          Awaiting your command, Commander.
        </div>
      ) : (
        <div className={styles.feed}>
          {messages.map((msg) => {
            const agent = agentsMap[msg.agentId];
            if (!agent) return null;

            return (
              <div 
                key={msg.id} 
                className={styles.messageRow}
                style={{ "--msg-color": agent.color, "--msg-color-rgb": agent.rgb }}
              >
                <div className={styles.avatarWrap}>
                  <Image src={agent.img} alt={agent.name} width={56} height={56} className={styles.avatar} />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.meta}>
                    <span className={styles.name}>{agent.name}</span>
                    <span className={styles.time}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>
                  <div className={styles.bubble}>
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && activeAgentId && agentsMap[activeAgentId] && (
            <div 
              className={styles.messageRow}
              style={{ "--msg-color": agentsMap[activeAgentId].color, "--msg-color-rgb": agentsMap[activeAgentId].rgb }}
            >
              <div className={styles.avatarWrap}>
                <Image src={agentsMap[activeAgentId].img} alt={agentsMap[activeAgentId].name} width={56} height={56} className={styles.avatar} />
              </div>
              <div className={styles.messageContent}>
                <div className={styles.meta}>
                  <span className={styles.name}>{agentsMap[activeAgentId].name}</span>
                </div>
                <div className={styles.bubble}>
                  <div className={styles.typingIndicator}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
