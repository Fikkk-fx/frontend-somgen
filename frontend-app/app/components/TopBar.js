import styles from "./TopBar.module.css";

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
    <path d="M13 19l6-6"/>
    <path d="M16 16l3.5 3.5"/>
    <path d="M19.5 19.5l1 1"/>
    <path d="M9.5 6.5L21 18v3h-3L6.5 9.5"/>
    <path d="M11 5l-6 6"/>
    <path d="M8 8L4.5 4.5"/>
    <path d="M4.5 4.5l-1-1"/>
  </svg>
);

export default function TopBar({ missionCount = 0 }) {
  return (
    <header className={styles.topbar}>
      <a href="#" className={styles.logo}>
        <span className={styles.logoIcon}><LogoIcon /></span>
        <span className={styles.logoText}>SOMGEN WAR ROOM</span>
      </a>
      <div className={styles.right}>
        <div className={styles.network}>
          <div className={styles.pulse}></div>
          Somnia L1 • Connected
        </div>
        <div className={styles.missionCount}>
          MISSIONS: {missionCount}
        </div>
      </div>
    </header>
  );
}
