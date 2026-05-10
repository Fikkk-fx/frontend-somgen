import "./globals.css";

export const metadata = {
  title: "SOMGEN — The Agentic L1 Coliseum | Built on Somnia",
  description:
    "SOMGEN is the first autonomous agentic coliseum built for the Somnia Network. Four AI agents collaborate to hunt the most profitable trades on-chain with comic-book style action.",
  keywords:
    "SOMGEN, Somnia, Agentic L1, AI agents, DeFi, autonomous trading, blockchain, comic book, crypto",
  openGraph: {
    title: "SOMGEN — The Agentic L1 Coliseum",
    description:
      "Four AI Agents. One Mission. Maximum Profit. Built on Somnia Network.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
