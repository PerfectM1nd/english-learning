/*
  Warnings:

  - You are about to drop the column `sentence` on the `Sentence` table. All the data in the column will be lost.
  - You are about to drop the column `word` on the `Word` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[text]` on the table `Word` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Word_word_key";

-- AlterTable
ALTER TABLE "Sentence" DROP COLUMN "sentence",
ADD COLUMN     "text" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "word",
ADD COLUMN     "text" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Word_text_key" ON "Word"("text");
