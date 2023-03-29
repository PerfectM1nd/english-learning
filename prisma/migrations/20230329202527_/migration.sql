/*
  Warnings:

  - You are about to drop the column `sequenceNumber` on the `Lesson` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Lesson_sequenceNumber_key";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "sequenceNumber";
