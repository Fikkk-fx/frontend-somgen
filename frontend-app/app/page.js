"use client";

import { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import AgentSidebar from "./components/AgentSidebar";
import WarRoom from "./components/WarRoom";
import CommandTerminal from "./components/CommandTerminal";
import StatusBar from "./components/StatusBar";
import MissionModal from "./components/MissionModal";
import ActionWord from "./components/ActionWord";
import ParticleCanvas from "./components/ParticleCanvas";
import styles from "./page.module.css";

// Helper for delays
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeAgentId, setActiveAgentId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [actionWords, setActionWords] = useState([]);
  const [missionResult, setMissionResult] = useState(null);
  const [missionCount, setMissionCount] = useState(0);

  const addActionWord = (text, x, y) => {
    const id = Date.now() + Math.random();
    setActionWords((prev) => [...prev, { id, text, x, y }]);
  };

  const handleActionWordComplete = (id) => {
    setActionWords((prev) => prev.filter((word) => word.id !== id));
  };

  const handleCommandSubmit = async (command) => {
    if (!command.toLowerCase().includes("uang")) {
      // Small easter egg for wrong command
      const id = Date.now().toString();
      setMessages((prev) => [
        ...prev,
        {
          id,
          agentId: "the-general",
          text: "COMMAND REJECTED. Type 'carikan saya uang' to deploy squad.",
          timestamp: Date.now(),
        },
      ]);
      return;
    }

    setIsProcessing(true);
    setMessages([]); // Clear previous mission feed
    
    // Panel 1: News Scout
    setActiveAgentId("news-scout");
    setIsTyping(true);
    await sleep(1500);
    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        agentId: "news-scout",
        text: "BOSS! KABAR PANAS! VOLUME MELEDAK DI SOMNIA!",
        timestamp: Date.now(),
      },
    ]);
    addActionWord("NEWS!", "20%", "30%");
    await sleep(1000);

    // Panel 2: Trend Master
    setActiveAgentId("trend-master");
    setIsTyping(true);
    await sleep(1500);
    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        agentId: "trend-master",
        text: "INI MOMEN KITA! BULLISH RUSH! HAJAR 20X LONG!",
        timestamp: Date.now(),
      },
    ]);
    addActionWord("BOOM!", "60%", "40%");
    await sleep(1000);

    // Panel 3: Zen Monk
    setActiveAgentId("zen-monk");
    setIsTyping(true);
    await sleep(1500);
    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        agentId: "zen-monk",
        text: "TENANG... TUNGGU WICK NYA MUNCUL. SABAR ADALAH CUAN.",
        timestamp: Date.now(),
      },
    ]);
    addActionWord("WAIT...", "30%", "60%");
    await sleep(1000);

    // Panel 4: The General
    setActiveAgentId("the-general");
    setIsTyping(true);
    await sleep(1500);
    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        agentId: "the-general",
        text: "KONSENSUS DICAPAI! EKSEKUSI LONG SEKARANG!",
        timestamp: Date.now(),
      },
    ]);
    addActionWord("PROFIT!", "70%", "70%");
    await sleep(1500);

    // Mission Complete Modal
    setActiveAgentId(null);
    setMissionResult("LONG EXECUTED!");
  };

  const handleReset = () => {
    setMissionResult(null);
    setMessages([]);
    setIsProcessing(false);
    setMissionCount((prev) => prev + 1);
  };

  return (
    <div className="app-layout">
      <ParticleCanvas />
      
      {/* Top Bar (spans full width) */}
      <div style={{ gridColumn: "1 / -1" }}>
        <TopBar missionCount={missionCount} />
      </div>

      {/* Sidebar */}
      <AgentSidebar activeAgentId={activeAgentId} />

      {/* Main Area (War Room + Terminal) */}
      <main className={styles.mainArea}>
        <WarRoom 
          messages={messages} 
          isTyping={isTyping} 
          activeAgentId={activeAgentId} 
        />
        <CommandTerminal 
          onCommandSubmit={handleCommandSubmit} 
          isProcessing={isProcessing} 
        />

        {/* Action Words Overlay */}
        <div className={styles.actionWordContainer}>
          {actionWords.map((word) => (
            <ActionWord
              key={word.id}
              text={word.text}
              x={word.x}
              y={word.y}
              onComplete={() => handleActionWordComplete(word.id)}
            />
          ))}
        </div>
      </main>

      {/* Status Bar (spans full width) */}
      <div style={{ gridColumn: "1 / -1" }}>
        <StatusBar />
      </div>

      {/* Modal overlay */}
      <MissionModal result={missionResult} onReset={handleReset} />
    </div>
  );
}
