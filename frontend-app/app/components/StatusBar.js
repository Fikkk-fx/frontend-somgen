import styles from "./StatusBar.module.css";

export default function StatusBar({ marketData, currentMode }) {
  return (
    <footer className={styles.statusbar}>
      <div className={styles.left}>
        <div className={styles.statusItem}>
          <span className={styles.statusIcon}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </span>
          TPS: 1,024,891
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statusItem}>
          <span className={styles.statusIcon}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </span>
          Fees: $0.0001
        </div>
        {marketData && (
          <>
            <div className={styles.divider}></div>
            <div className={styles.statusItem}>
              <span className={styles.dataLabel}>RSI:</span>
              <span className={styles.dataValue} style={{ color: marketData.rsi > 70 ? "#ff0055" : marketData.rsi < 30 ? "#10b981" : "#00f2ff" }}>
                {marketData.rsi}
              </span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statusItem}>
              <span className={styles.dataLabel}>WHALE:</span>
              <span className={styles.dataValue} style={{ color: marketData.whaleFlow > 0 ? "#10b981" : "#ff0055" }}>
                ${(Math.abs(marketData.whaleFlow) / 1e6).toFixed(2)}M {marketData.whaleFlow > 0 ? "↑" : "↓"}
              </span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statusItem}>
              <span className={styles.dataLabel}>SENT:</span>
              <span className={styles.dataValue}>@{marketData.sentiment}</span>
            </div>
          </>
        )}
      </div>
      <div className={styles.right}>
        <span className={styles.tagline}>
          SOMGEN CORE V3.0 — <span className={styles.highlight}>ENCRYPTED</span>
        </span>
      </div>
    </footer>
  );
}
