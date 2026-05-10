import styles from "./StatusBar.module.css";

export default function StatusBar() {
  return (
    <footer className={styles.statusbar}>
      <div className={styles.left}>
        <div className={styles.statusItem}>
          <span className={styles.statusIcon}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </span>
          TPS: 1,024,891
        </div>
        <div className={styles.statusItem}>
          <span className={styles.statusIcon}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </span>
          Fees: $0.0001
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.tagline}>Built for the dreamers. Built for <span className={styles.highlight}>Somnia</span>.</span>
      </div>
    </footer>
  );
}
