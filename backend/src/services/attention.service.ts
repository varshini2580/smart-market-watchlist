import { attentionRepository } from "../repositories/attention.repository";

export const attentionService = {
  async getUserAttention(
    userId: string,
    limit?: number
  ) {
    const events = limit
      ? await attentionRepository.getRecentForUser(
          userId,
          limit
        )
      : await attentionRepository.getForUser(userId);

    return events.map((event) => ({
      id: event.id,

      stock: {
        symbol: event.stock.symbol,
        name: event.stock.name,
        exchange: event.stock.exchange,
      },

      type: event.type,
      severity: event.severity,

      previousPrice: event.previousPrice,
      currentPrice: event.currentPrice,
      changePercent: event.changePercent,

      marketTimestamp:
        event.snapshot.marketTimestamp,

      detectedAt: event.detectedAt,
    }));
  },
};
