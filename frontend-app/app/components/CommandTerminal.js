"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./CommandTerminal.module.css";

export default function CommandTerminal({ onCommandSubmit, isProcessing, terminalLogs = [] }) {
  const [inputValue, setInputValue] = useState("");
  const [minimized, setMinimized] = useState(false);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isProcessing) return;
    onCommandSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className={`${styles.terminal} ${minimized ? styles.minimized : ""}`}>
      {/* Toggle Button */}
      <button
        className={styles.toggleBtn}
        onClick={() => setMinimized(!minimized)}
        title={minimized ? "Expand log" : "Minimize log"}
      >
        <svg
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={minimized ? styles.chevronUp : styles.chevronDown}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className={styles.toggleLabel}>
          {minimized ? "SHOW LOG" : "HIDE LOG"}
        </span>
      </button>

      {/* Terminal Log */}
      {!minimized && (
        <div className={styles.logArea} ref={logRef}>
          {terminalLogs.map((log, i) => (
            <div key={i} className={styles.logLine}>
              <span className={styles.logTime}>[{log.time}]</span>
              <span className={styles.logAgent}>{log.agent}:</span>
              <span className={styles.logText}>{log.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      <div className={styles.inputRow}>
        <div className={styles.glowLine}></div>
        <span className={styles.prompt}>❯</span>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="KETIK MODE: AGGRESSIVE / NORMAL / SAFETY"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isProcessing}
            autoComplete="off"
          />
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!inputValue.trim() || isProcessing}
          >
            EXECUTE
          </button>
        </form>
      </div>
    </div>
  );
}
