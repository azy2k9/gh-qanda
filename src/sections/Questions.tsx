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

const toSentenceCase = (sentence: string) => {
  return sentence[0].toUpperCase() + sentence.substring(1, sentence.length);
};

const QuestionCard = ({ question, answer }: QAndA) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription className="text-center">
          {toSentenceCase(question)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardContent>{toSentenceCase(answer)}</CardContent>
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
