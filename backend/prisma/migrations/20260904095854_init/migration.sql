-- CreateEnum
CREATE TYPE "WatchIntent" AS ENUM ('HOLDING', 'INTERESTED');

-- CreateEnum
CREATE TYPE "AttentionType" AS ENUM ('LARGE_PRICE_CHANGE', 'TARGET_REACHED', 'PURCHASE_PRICE_CROSSED', 'VOLUME_SPIKE');

-- CreateEnum
CREATE TYPE "AttentionSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "exchange" TEXT NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistItem" (
    "id" TEXT NOT NULL,
    "watchlistId" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,
    "intent" "WatchIntent" NOT NULL,
    "purchasePrice" DECIMAL(65,30),
    "targetPrice" DECIMAL(65,30),
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WatchlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketSnapshot" (
    "id" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "volume" DECIMAL(65,30),
    "marketTimestamp" TIMESTAMP(3) NOT NULL,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" TEXT NOT NULL,

    CONSTRAINT "MarketSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStockCheckpoint" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,
    "lastSeenPrice" DECIMAL(65,30) NOT NULL,
    "lastSeenMarketTimestamp" TIMESTAMP(3) NOT NULL,
    "lastViewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserStockCheckpoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttentionEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stockId" TEXT NOT NULL,
    "type" "AttentionType" NOT NULL,
    "severity" "AttentionSeverity" NOT NULL,
    "previousPrice" DECIMAL(65,30),
    "currentPrice" DECIMAL(65,30),
    "changePercent" DECIMAL(65,30),
    "detectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttentionEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "Watchlist_userId_idx" ON "Watchlist"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_symbol_exchange_key" ON "Stock"("symbol", "exchange");

-- CreateIndex
CREATE INDEX "WatchlistItem_stockId_idx" ON "WatchlistItem"("stockId");

-- CreateIndex
CREATE UNIQUE INDEX "WatchlistItem_watchlistId_stockId_key" ON "WatchlistItem"("watchlistId", "stockId");

-- CreateIndex
CREATE INDEX "MarketSnapshot_stockId_marketTimestamp_idx" ON "MarketSnapshot"("stockId", "marketTimestamp");

-- CreateIndex
CREATE INDEX "UserStockCheckpoint_stockId_idx" ON "UserStockCheckpoint"("stockId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStockCheckpoint_userId_stockId_key" ON "UserStockCheckpoint"("userId", "stockId");

-- CreateIndex
CREATE INDEX "AttentionEvent_userId_detectedAt_idx" ON "AttentionEvent"("userId", "detectedAt");

-- CreateIndex
CREATE INDEX "AttentionEvent_stockId_detectedAt_idx" ON "AttentionEvent"("stockId", "detectedAt");

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "Watchlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketSnapshot" ADD CONSTRAINT "MarketSnapshot_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStockCheckpoint" ADD CONSTRAINT "UserStockCheckpoint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStockCheckpoint" ADD CONSTRAINT "UserStockCheckpoint_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttentionEvent" ADD CONSTRAINT "AttentionEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttentionEvent" ADD CONSTRAINT "AttentionEvent_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;
