-- CreateEnum
CREATE TYPE "EnglishLevel" AS ENUM ('A0', 'A1', 'A2', 'B1', 'B2', 'C1');

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "level" "EnglishLevel" NOT NULL,
    "sequenceNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonSentence" (
    "id" SERIAL NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "englishText" TEXT NOT NULL,
    "russianText" TEXT NOT NULL,

    CONSTRAINT "LessonSentence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_sequenceNumber_key" ON "Lesson"("sequenceNumber");

-- AddForeignKey
ALTER TABLE "LessonSentence" ADD CONSTRAINT "LessonSentence_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
