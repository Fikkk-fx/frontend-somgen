/**
 * SOMNIA REAL-DATA PROVIDER (Ported to JS)
 * Generates mock data simulating Somnia network metrics.
 */

export async function fetchLiveSomniaData(symbol) {
  try {
    console.log(`[NETWORK] Querying DIA Oracle & Somnex Pools for ${symbol}...`);
    
    const basePrice = symbol === "SOMI" ? 1.25 : (symbol === "WETH" ? 3500 : 65000);
    const volatility = (Math.random() - 0.5) * 0.02;
    
    return {
        price: basePrice * (1 + volatility),
        whaleFlow: (Math.random() - 0.4) * 5000000, 
        sentiment: Math.floor(Math.random() * 40 + 40), 
        adx: Math.floor(Math.random() * 30 + 15),
        rsi: Math.floor(Math.random() * 40 + 30),
        ema20: basePrice,
        close: basePrice * (1 + volatility),
        defiTarget: {
            pair: `${symbol}/USDT`,
            protocol: "Somnex V3",
            apr: (Math.random() * 30 + 60).toFixed(1) + "%"
        }
    };
  } catch (error) {
    console.error("Error fetching Somnia data:", error);
    throw error;
  }
}
