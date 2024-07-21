import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { PrismaClient, QuestionAndAnswer } from "@prisma/client";

const prisma = new PrismaClient();

interface QAndA {
  question: string;
  answer: string;
}

const QuestionCard = ({ question, answer }: QAndA) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription className="text-center">{question}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardContent>{answer}</CardContent>
      </CardContent>
    </Card>
  );
};

const Questions = async () => {
  const qAndAs = await prisma.questionAndAnswer.findMany();

  return (
    <>
      {qAndAs.map(({ id, question, answer }) => (
        <QuestionCard key={id} question={question} answer={answer} />
      ))}
    </>
  );
};

export default Questions;
