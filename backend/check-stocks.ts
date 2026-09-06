import "dotenv/config";
import prisma from "./src/lib/prisma";

const WATCHLIST_SYMBOLS = [
  "BHARTIARTL",
  "HDFCBANK",
  "HINDUNILVR",
  "ICICIBANK",
  "INFY",
  "ITC",
  "LT",
  "RELIANCE",
  "SBIN",
  "TCS",
];

async function main() {
  const allStocks = await prisma.stock.findMany({
    orderBy: { symbol: "asc" },
  });

  console.log(`\n=== All stocks in DB (${allStocks.length} total) ===`);
  allStocks.forEach((s) => console.log(`  ${s.symbol} | ${s.exchange} | ${s.name} | id: ${s.id}`));

  console.log(`\n=== Watchlist symbol check ===`);
  for (const sym of WATCHLIST_SYMBOLS) {
    const found = allStocks.find((s) => s.symbol === sym && s.exchange === "NSE");
    if (found) {
      console.log(`  ✅ ${sym} — in DB (id: ${found.id})`);
    } else {
      console.log(`  ❌ ${sym} — MISSING from DB`);
    }
  }

  await prisma.$disconnect();
}

main().catch(console.error);
