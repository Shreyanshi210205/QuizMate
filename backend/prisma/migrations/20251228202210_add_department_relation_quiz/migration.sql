-- CreateTable
CREATE TABLE "QuizDepartment" (
    "quizId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "QuizDepartment_pkey" PRIMARY KEY ("quizId","departmentId")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- AddForeignKey
ALTER TABLE "QuizDepartment" ADD CONSTRAINT "QuizDepartment_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuizDepartment" ADD CONSTRAINT "QuizDepartment_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
