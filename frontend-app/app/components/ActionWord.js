"use client";

import { useEffect, useState } from "react";
import styles from "./ActionWord.module.css";

export default function ActionWord({ text, x, y, onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={styles.actionWord}
      style={{ left: x, top: y }}
    >
      {text}
    </div>
  );
}
