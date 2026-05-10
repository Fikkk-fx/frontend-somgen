import { useState } from "react";
import styles from "./CommandTerminal.module.css";

export default function CommandTerminal({ onCommandSubmit, isProcessing }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isProcessing) return;
    
    onCommandSubmit(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.glowLine}></div>
      <span className={styles.prompt}>&gt;</span>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder='TULIS PERINTAH DISINI (e.g. "carikan saya uang")'
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
  );
}
