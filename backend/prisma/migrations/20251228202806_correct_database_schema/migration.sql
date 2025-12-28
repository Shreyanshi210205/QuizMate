/*
  Warnings:

  - You are about to drop the column `department` on the `Quiz` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Quiz_year_semester_department_idx";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "department";

-- CreateIndex
CREATE INDEX "Quiz_year_semester_idx" ON "Quiz"("year", "semester");
