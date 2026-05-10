import "./globals.css";

export const metadata = {
  title: "SOMGEN War Room — Agentic L1 Coliseum",
  description: "Command your AI agents in the War Room. Watch them debate, strategize, and execute trades in real-time on the Somnia Network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
