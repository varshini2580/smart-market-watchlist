-- AlterTable
ALTER TABLE "User" ADD COLUMN "passwordHash" TEXT,
ADD COLUMN "googleId" TEXT,
ADD COLUMN "authProvider" TEXT NOT NULL DEFAULT 'local',
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
