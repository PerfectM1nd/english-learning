/*
  Warnings:

  - You are about to drop the `_SentenceToWord` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `wordId` to the `Sentence` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_SentenceToWord" DROP CONSTRAINT "_SentenceToWord_A_fkey";

-- DropForeignKey
ALTER TABLE "_SentenceToWord" DROP CONSTRAINT "_SentenceToWord_B_fkey";

-- AlterTable
ALTER TABLE "Sentence" ADD COLUMN     "wordId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_SentenceToWord";

-- AddForeignKey
ALTER TABLE "Sentence" ADD CONSTRAINT "Sentence_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
