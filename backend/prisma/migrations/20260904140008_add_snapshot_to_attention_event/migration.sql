/*
  Add snapshotId safely to existing AttentionEvent rows.

  Existing AttentionEvent rows are assigned distinct MarketSnapshot
  rows belonging to the same stock.
*/

-- 1. Add the column temporarily as nullable
ALTER TABLE "AttentionEvent"
ADD COLUMN "snapshotId" TEXT;

-- 2. Assign existing events to distinct snapshots of the same stock.
WITH ranked_events AS (
  SELECT
    id,
    "stockId",
    ROW_NUMBER() OVER (
      PARTITION BY "stockId"
      ORDER BY "detectedAt", id
    ) AS rn
  FROM "AttentionEvent"
),
ranked_snapshots AS (
  SELECT
    id,
    "stockId",
    ROW_NUMBER() OVER (
      PARTITION BY "stockId"
      ORDER BY "marketTimestamp", id
    ) AS rn
  FROM "MarketSnapshot"
)
UPDATE "AttentionEvent" e
SET "snapshotId" = s.id
FROM ranked_events re
JOIN ranked_snapshots s
  ON s."stockId" = re."stockId"
  AND s.rn = re.rn
WHERE e.id = re.id;

-- 3. Make sure every existing event received a snapshot.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM "AttentionEvent"
    WHERE "snapshotId" IS NULL
  ) THEN
    RAISE EXCEPTION
      'Could not assign snapshotId to all existing AttentionEvent rows';
  END IF;
END $$;

-- 4. Now make snapshotId required
ALTER TABLE "AttentionEvent"
ALTER COLUMN "snapshotId" SET NOT NULL;

-- 5. Add the unique constraint
CREATE UNIQUE INDEX "AttentionEvent_userId_snapshotId_key"
ON "AttentionEvent"("userId", "snapshotId");

-- 6. Add the foreign key
ALTER TABLE "AttentionEvent"
ADD CONSTRAINT "AttentionEvent_snapshotId_fkey"
FOREIGN KEY ("snapshotId")
REFERENCES "MarketSnapshot"("id")
ON DELETE CASCADE
ON UPDATE CASCADE;