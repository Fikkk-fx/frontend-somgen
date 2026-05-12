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
import LandingOverlay from "./components/LandingOverlay";
import styles from "./page.module.css";
import { fetchLiveSomniaData } from "./lib/somniaProvider";
import { CollaborativeForum } from "./lib/consensus";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [terminalLogs, setTerminalLogs] = useState([
    { time: "SYSTEM", agent: "CORE", text: "SOMGEN Predator Engine Initialized. Awaiting command..." }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeAgentId, setActiveAgentId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [actionWords, setActionWords] = useState([]);
  const [missionResult, setMissionResult] = useState(null);
  const [missionCount, setMissionCount] = useState(0);
  const [showLanding, setShowLanding] = useState(true);
  const [currentMode, setCurrentMode] = useState(null);
  const [marketData, setMarketData] = useState(null);

  const addLog = (agent, text) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setTerminalLogs((prev) => [...prev, { time, agent, text }]);
  };

  const addActionWord = (text, x, y) => {
    const id = Date.now() + Math.random();
    setActionWords((prev) => [...prev, { id, text, x, y }]);
  };

  const handleActionWordComplete = (id) => {
    setActionWords((prev) => prev.filter((word) => word.id !== id));
  };

  const handleModeSelect = async (mode) => {
    setShowLanding(false);
    setCurrentMode(mode);
    setIsProcessing(true);
    setMessages([]);
    setTerminalLogs([{ time: "SYSTEM", agent: "CORE", text: `Mission started in ${mode} mode.` }]);

    addLog("NETWORK", "Synchronizing with DIA Oracle & Somnia Mainnet...");

    const currentCoin = "SOMI";
    const data = await fetchLiveSomniaData(currentCoin);
    setMarketData(data);

    addLog("ORACLE", `Price: $${data.price.toFixed(4)} | RSI: ${data.rsi} | Sentiment: ${data.sentiment}`);

    const forum = new CollaborativeForum();

    // AGEN0 Commander
    addLog("AGEN0", "Commander routing capital & setting briefing...");
    await forum.participate("AGEN0", data, currentCoin, "");
    const commanderMsg = forum.getLatestOpinion();
    addLog("AGEN0", commanderMsg);
    await sleep(1000);

    // AGEN1 Technical
    setActiveAgentId("agen1");
    setIsTyping(true);
    addLog("AGEN1", "Deep Reasoning — analyzing technical structure...");
    await sleep(2000);
    setIsTyping(false);
    const msg1 = await forum.participate("AGEN1", data, currentCoin, commanderMsg);
    setMessages((prev) => [...prev, {
      id: Date.now().toString(), agentId: "agen1", text: msg1, timestamp: Date.now(),
      confidence: Math.floor(Math.random() * 20 + 75)
    }]);
    addLog("AGEN1", msg1);
    addActionWord("SCANNING!", "15%", "25%");
    await sleep(1200);

    // AGEN2 On-Chain
    setActiveAgentId("agen2");
    setIsTyping(true);
    addLog("AGEN2", "Deep Reasoning — tracking whale movements...");
    await sleep(2000);
    setIsTyping(false);
    const msg2 = await forum.participate("AGEN2", data, currentCoin, commanderMsg);
    setMessages((prev) => [...prev, {
      id: Date.now().toString(), agentId: "agen2", text: msg2, timestamp: Date.now(),
      confidence: Math.floor(Math.random() * 20 + 70)
    }]);
    addLog("AGEN2", msg2);
    addActionWord("TRACKING!", "55%", "35%");
    await sleep(1200);

    // AGEN3 Social
    setActiveAgentId("agen3");
    setIsTyping(true);
    addLog("AGEN3", "Deep Reasoning — scraping sentiment data...");
    await sleep(2000);
    setIsTyping(false);
    const msg3 = await forum.participate("AGEN3", data, currentCoin, commanderMsg);
    setMessages((prev) => [...prev, {
      id: Date.now().toString(), agentId: "agen3", text: msg3, timestamp: Date.now(),
      confidence: Math.floor(Math.random() * 20 + 65)
    }]);
    addLog("AGEN3", msg3);
    addActionWord("ANALYZING!", "25%", "55%");
    await sleep(1200);

    // AGEN4 Executor
    setActiveAgentId("agen4");
    setIsTyping(true);
    addLog("AGEN4", "Resolving consensus — calculating conviction score...");
    await sleep(2500);
    setIsTyping(false);

    const consensus = forum.resolveConsensus(mode);

    setMessages((prev) => [...prev, {
      id: Date.now().toString(), agentId: "agen4",
      text: `[EXECUTOR-X] CONSENSUS REACHED! Score: ${consensus.score} | Decision: ${consensus.decision} | Mode: ${consensus.mode}`,
      timestamp: Date.now(),
      confidence: 98
    }]);
    addLog("AGEN4", `CONSENSUS: ${consensus.decision} (Score: ${consensus.score})`);
    addActionWord(consensus.decision !== "REJECT" ? "EXECUTE!" : "ABORT!", "65%", "65%");
    await sleep(1500);

    // Result
    setActiveAgentId(null);
    let executionText = consensus.decision;
    if (consensus.decision === "LONG" || consensus.decision === "SHORT") {
      executionText = `${mode === "AGGRESSIVE" ? "50X" : "10X"} ${consensus.decision} ACTIVATED!`;
    } else if (consensus.decision === "EXECUTE_DEFI") {
      executionText = "DEFI YIELD DEPLOYED!";
    } else {
      executionText = "MISSION ABORTED — HIGH RISK";
    }
    addLog("SYSTEM", `Final execution: ${executionText}`);
    setMissionResult(executionText);
  };

  const handleCommandSubmit = async (command) => {
    const val = command.toUpperCase();
    if (!val.includes("AGGRESSIVE") && !val.includes("NORMAL") && !val.includes("SAFETY")) {
      addLog("SYSTEM", "COMMAND REJECTED. Valid modes: AGGRESSIVE / NORMAL / SAFETY");
      return;
    }
    let mode = "NORMAL";
    if (val.includes("AGGRESSIVE")) mode = "AGGRESSIVE";
    if (val.includes("SAFETY")) mode = "SAFETY";
    handleModeSelect(mode);
  };

  const handleReset = () => {
    setMissionResult(null);
    setMessages([]);
    setIsProcessing(false);
    setActiveAgentId(null);
    setMissionCount((prev) => prev + 1);
  };

  return (
    <>
      <ParticleCanvas />

      {/* Landing Overlay */}
      <LandingOverlay show={showLanding} onModeSelect={handleModeSelect} />

      {/* App Grid */}
      <div className="app-layout">
        {/* Top Bar */}
        <div style={{ gridColumn: "1 / -1" }}>
          <TopBar missionCount={missionCount} currentMode={currentMode} />
        </div>

        {/* Sidebar */}
        <AgentSidebar activeAgentId={activeAgentId} messages={messages} />

        {/* Main Area */}
        <main className={styles.mainArea}>
          <WarRoom
            messages={messages}
            isTyping={isTyping}
            activeAgentId={activeAgentId}
          />
          <CommandTerminal
            onCommandSubmit={handleCommandSubmit}
            isProcessing={isProcessing}
            terminalLogs={terminalLogs}
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

        {/* Status Bar */}
        <div style={{ gridColumn: "1 / -1" }}>
          <StatusBar marketData={marketData} currentMode={currentMode} />
        </div>

        {/* Modal overlay */}
        <MissionModal result={missionResult} onReset={handleReset} />
      </div>
    </>
  );
}
