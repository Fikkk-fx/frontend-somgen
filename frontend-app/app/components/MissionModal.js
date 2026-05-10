import styles from "./MissionModal.module.css";

export default function MissionModal({ result, onReset }) {
  if (!result) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.subtitle}>MISSION ACCOMPLISHED!</div>
        <h2 className={styles.title}>{result}</h2>
        <button className={styles.btn} onClick={onReset}>
          NEXT MISSION!
        </button>
      </div>
    </div>
  );
}
