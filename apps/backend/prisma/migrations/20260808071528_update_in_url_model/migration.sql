/*
  Warnings:

  - You are about to drop the column `password` on the `Url` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Url" DROP COLUMN "password",
ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE INDEX "Url_userId_idx" ON "Url"("userId");
