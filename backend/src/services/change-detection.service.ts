import prisma from "../lib/prisma";
import { checkpointRepository } from "../repositories/checkpoint.repository";
import { marketRepository } from "../repositories/market.repository";

const PRICE_MEDIUM_THRESHOLD = 2;
const PRICE_HIGH_THRESHOLD = 5;

const VOLUME_MEDIUM_MULTIPLIER = 2;
const VOLUME_HIGH_MULTIPLIER = 3;

/**
 * Minimum additional change required to fire another LARGE_PRICE_CHANGE
 * event in the same direction, preventing repetitive alerts for a slow trend.
 */
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
      /*
       * If no baseline checkpoint exists yet for this user and stock,
       * initialize it from the latest market snapshot so future checks have a reference point.
       */
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

    /*
     * Get the user's watchlist context.
     */
    const watchlistItem = await prisma.watchlistItem.findFirst({
      where: {
        stockId: stock.id,
        watchlist: { userId },
      },
    });

    /*
     * Find the most recent attention event for this user + stock.
     */
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

    /*
     * Determine whether target is currently crossed.
     */
    let targetCrossed = false;

    if (
      watchlistItem?.targetPrice !== null &&
      watchlistItem?.targetPrice !== undefined
    ) {
      const targetPrice = Number(watchlistItem.targetPrice);
      targetCrossed = currentPrice >= targetPrice;
    }

    /*
     * Determine whether purchase price is currently crossed below.
     */
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

    /*
     * 1. TARGET_REACHED
     *
     * Fire when target is crossed and the previous event
     * was NOT also TARGET_REACHED (prevents re-firing while
     * price stays above target).
     *
     * If the price later dips below and crosses again,
     * the previous event type will have changed, so it fires again.
     */
    if (targetCrossed && previousEvent?.type !== "TARGET_REACHED") {
      type = "TARGET_REACHED";
      severity = "HIGH";
    }

    /*
     * 2. PURCHASE_PRICE_CROSSED
     *
     * Fire when price drops at or below purchase price and the
     * previous event was NOT already PURCHASE_PRICE_CROSSED.
     *
     * If price recovers and drops again, previous event type
     * will differ, allowing a new event.
     */
    if (
      !type &&
      purchasePriceCrossed &&
      previousEvent?.type !== "PURCHASE_PRICE_CROSSED"
    ) {
      type = "PURCHASE_PRICE_CROSSED";
      severity = "HIGH";
    }

    /*
     * 3. LARGE_PRICE_CHANGE
     *
     * Deduplication rule: skip if the last event was also
     * LARGE_PRICE_CHANGE in the same direction AND the new
     * movement is less than REPEAT_THRESHOLD additional percent.
     * This prevents flooding for slow-moving continued trends.
     */
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

        // Same direction: only fire if the new move is at least
        // REPEAT_THRESHOLD % more than the previous event reported.
        if (prevDirection === currDirection) {
          const additionalMove =
            Math.abs(absoluteChangePercent) -
            Math.abs(prevChangePercent);

          if (additionalMove < LARGE_PRICE_CHANGE_REPEAT_THRESHOLD) {
            shouldFire = false;
          }
        }
        // Direction reversed → always fire (new signal)
      }

      if (shouldFire) {
        type = "LARGE_PRICE_CHANGE";
        severity = candidateSeverity;
      }
    }

    /*
     * 4. VOLUME_SPIKE
     *
     * Deduplication: skip if last event was already VOLUME_SPIKE
     * at the same or higher severity.
     */
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
            // Skip if same or lower severity already fired
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

    /*
     * Nothing meaningful happened — update checkpoint and exit.
     */
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

    /*
     * Prevent duplicate events for the exact same snapshot.
     * (userId + snapshotId must be unique per DB constraint)
     */
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

    /*
     * Create the attention event.
     */
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

    /*
     * Update checkpoint so future detections compare
     * from the current price.
     */
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