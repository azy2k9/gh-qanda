-- CreateTable
CREATE TABLE "QuestionAndAnswer" (
    "id" TEXT NOT NULL,
    "number" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "QuestionAndAnswer_pkey" PRIMARY KEY ("id")
);
