/*
  Warnings:

  - You are about to drop the column `mistaken` on the `LessonSentence` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "LessonSentenceStatus" AS ENUM ('fluent', 'uncertain', 'mistaken', 'error');

-- AlterTable
ALTER TABLE "LessonSentence" DROP COLUMN "mistaken",
ADD COLUMN     "commentary" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "status" "LessonSentenceStatus" NOT NULL DEFAULT 'fluent';
