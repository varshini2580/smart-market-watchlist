import prisma from "../lib/prisma";
import { checkpointRepository } from "../repositories/checkpoint.repository";
import { marketRepository } from "../repositories/market.repository";

const PRICE_MEDIUM_THRESHOLD = 2;
const PRICE_HIGH_THRESHOLD = 5;

const VOLUME_MEDIUM_MULTIPLIER = 2;
const VOLUME_HIGH_MULTIPLIER = 3;

const LARGE_PRICE_CHANGE_REPEAT_THRESHOLD = 2;

export const changeDetectionService = {
  async detect(
    userId: string,
    symbol: string,
    exchange: string
  ) {
    const stock = await prisma.stock.findUnique({
      where: {
        symbol_exchange: {
          symbol: symbol.toUpperCase(),
          exchange: exchange.toUpperCase(),
        },
      },
    });

    if (!stock) {
      throw new Error("Stock not found");
    }

    const current =
      await marketRepository.getLatestSnapshot(stock.id);

    if (!current) {
      throw new Error("No market snapshot available");
    }

    let checkpoint =
      await checkpointRepository.get(userId, stock.id);

    if (!checkpoint) {

      await checkpointRepository.upsert(
        userId,
        stock.id,
        Number(current.price),
        current.marketTimestamp
      );

      return {
        meaningful: false,
        changePercent: 0,
        previousPrice: Number(current.price),
        currentPrice: Number(current.price),
      };
    }

    const previousPrice = Number(checkpoint.lastSeenPrice);
    const currentPrice = Number(current.price);

    if (previousPrice <= 0) {
      throw new Error("Invalid previous price");
    }

    const changePercent =
      ((currentPrice - previousPrice) / previousPrice) * 100;

    const absoluteChangePercent = Math.abs(changePercent);

    const watchlistItem = await prisma.watchlistItem.findFirst({
      where: {
        stockId: stock.id,
        watchlist: { userId },
      },
    });

    const previousEvent =
      await prisma.attentionEvent.findFirst({
        where: {
          userId,
          stockId: stock.id,
        },
        orderBy: {
          detectedAt: "desc",
        },
      });

    let targetCrossed = false;

    if (
      watchlistItem?.targetPrice !== null &&
      watchlistItem?.targetPrice !== undefined
    ) {
      const targetPrice = Number(watchlistItem.targetPrice);
      targetCrossed = currentPrice >= targetPrice;
    }

    let purchasePriceCrossed = false;

    if (
      watchlistItem?.purchasePrice !== null &&
      watchlistItem?.purchasePrice !== undefined
    ) {
      const purchasePrice = Number(watchlistItem.purchasePrice);
      purchasePriceCrossed = currentPrice <= purchasePrice;
    }

    let type:
      | "LARGE_PRICE_CHANGE"
      | "TARGET_REACHED"
      | "PURCHASE_PRICE_CROSSED"
      | "VOLUME_SPIKE"
      | null = null;

    let severity: "LOW" | "MEDIUM" | "HIGH" | null = null;

    if (targetCrossed && previousEvent?.type !== "TARGET_REACHED") {
      type = "TARGET_REACHED";
      severity = "HIGH";
    }

    if (
      !type &&
      purchasePriceCrossed &&
      previousEvent?.type !== "PURCHASE_PRICE_CROSSED"
    ) {
      type = "PURCHASE_PRICE_CROSSED";
      severity = "HIGH";
    }

    if (!type && absoluteChangePercent >= PRICE_MEDIUM_THRESHOLD) {
      let candidateSeverity: "MEDIUM" | "HIGH" =
        absoluteChangePercent >= PRICE_HIGH_THRESHOLD
          ? "HIGH"
          : "MEDIUM";

      let shouldFire = true;

      if (previousEvent?.type === "LARGE_PRICE_CHANGE") {
        const prevChangePercent = Number(
          previousEvent.changePercent ?? 0
        );

        const prevDirection =
          prevChangePercent >= 0 ? "up" : "down";
        const currDirection = changePercent >= 0 ? "up" : "down";

        if (prevDirection === currDirection) {
          const additionalMove =
            Math.abs(absoluteChangePercent) -
            Math.abs(prevChangePercent);

          if (additionalMove < LARGE_PRICE_CHANGE_REPEAT_THRESHOLD) {
            shouldFire = false;
          }
        }
      }

      if (shouldFire) {
        type = "LARGE_PRICE_CHANGE";
        severity = candidateSeverity;
      }
    }

    if (!type && current.volume !== null) {
      const previousSnapshot =
        await prisma.marketSnapshot.findFirst({
          where: {
            stockId: stock.id,
            id: { not: current.id },
          },
          orderBy: { marketTimestamp: "desc" },
        });

      if (
        previousSnapshot?.volume !== null &&
        previousSnapshot?.volume !== undefined
      ) {
        const previousVolume = Number(previousSnapshot.volume);
        const currentVolume = Number(current.volume);

        if (previousVolume > 0) {
          const volumeMultiplier = currentVolume / previousVolume;

          let candidateVolumeSeverity: "MEDIUM" | "HIGH" | null =
            null;

          if (volumeMultiplier >= VOLUME_HIGH_MULTIPLIER) {
            candidateVolumeSeverity = "HIGH";
          } else if (volumeMultiplier >= VOLUME_MEDIUM_MULTIPLIER) {
            candidateVolumeSeverity = "MEDIUM";
          }

          if (candidateVolumeSeverity) {
            const alreadyFired =
              previousEvent?.type === "VOLUME_SPIKE" &&
              (previousEvent.severity === candidateVolumeSeverity ||
                previousEvent.severity === "HIGH");

            if (!alreadyFired) {
              type = "VOLUME_SPIKE";
              severity = candidateVolumeSeverity;
            }
          }
        }
      }
    }

    if (!type || !severity) {
      await checkpointRepository.upsert(
        userId,
        stock.id,
        currentPrice,
        current.marketTimestamp
      );

      return {
        meaningful: false,
        changePercent,
        previousPrice,
        currentPrice,
      };
    }

    const existingEvent =
      await prisma.attentionEvent.findUnique({
        where: {
          userId_snapshotId: {
            userId,
            snapshotId: current.id,
          },
        },
      });

    if (existingEvent) {
      return {
        meaningful: true,
        duplicate: true,
        event: existingEvent,
        changePercent,
        previousPrice,
        currentPrice,
      };
    }

    const event = await prisma.attentionEvent.create({
      data: {
        userId,
        stockId: stock.id,
        snapshotId: current.id,
        type,
        severity,
        previousPrice,
        currentPrice,
        changePercent,
      },
    });

    await checkpointRepository.upsert(
      userId,
      stock.id,
      currentPrice,
      current.marketTimestamp
    );

    return {
      meaningful: true,
      event,
      changePercent,
      previousPrice,
      currentPrice,
    };
  },
};
