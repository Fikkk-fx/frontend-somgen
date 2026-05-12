"use client";

import { useState, useEffect } from "react";
import styles from "./MissionModal.module.css";

export default function MissionModal({ result, onReset }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!result) return;
    setCountdown(5);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [result]);

  if (!result) return null;

  const isRejected = result.includes("ABORTED");

  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${isRejected ? styles.rejected : styles.success}`}>
        <div className={styles.badge}>
          {isRejected ? "⚠️" : "🎯"} AGEN4 HAS SPOKEN
        </div>
        <div className={styles.subtitle}>
          {isRejected ? "MISSION ABORTED" : "MISSION ACCOMPLISHED"}
        </div>
        <h2 className={styles.title}>{result}</h2>
        <p className={styles.countdown}>
          RE-ENGAGING IN <span className={styles.countdownNum}>{countdown}</span>S...
        </p>
        <button className={styles.btn} onClick={onReset}>
          NEXT MISSION
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
