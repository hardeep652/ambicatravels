/*
  Warnings:

  - You are about to drop the column `thumbnailUrl` on the `Package` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "thumbnailUrl",
ADD COLUMN     "images" TEXT[];
