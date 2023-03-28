/*
  Warnings:

  - Added the required column `mistaken` to the `LessonSentence` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LessonSentence" ADD COLUMN     "mistaken" BOOLEAN NOT NULL;
