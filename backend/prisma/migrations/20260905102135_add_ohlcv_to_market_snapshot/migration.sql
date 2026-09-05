-- AlterTable
ALTER TABLE "MarketSnapshot" ADD COLUMN     "dayHigh" DECIMAL(65,30),
ADD COLUMN     "dayLow" DECIMAL(65,30),
ADD COLUMN     "fiftyTwoWeekHigh" DECIMAL(65,30),
ADD COLUMN     "fiftyTwoWeekLow" DECIMAL(65,30),
ADD COLUMN     "open" DECIMAL(65,30),
ADD COLUMN     "previousClose" DECIMAL(65,30);
