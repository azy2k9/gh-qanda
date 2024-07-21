import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

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

const questionsWithAnswers: Array<QAndA> = [
  {
    question:
      "What is the ruling when someone wants to wear deodrant with alcohol in it?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at explicabo cupiditate, ad consequatur deleniti debitis nemo molestias nisi dolorum voluptates, beatae obcaecati minus recusandae in, dicta expedita libero commodi.",
  },
  {
    question:
      "What is the ruling when someone wants to wear deodrant with alcohol in it?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id at explicabo cupiditate, ad consequatur deleniti debitis nemo molestias nisi dolorum voluptates, beatae obcaecati minus recusandae in, dicta expedita libero commodi.",
  },
];

const Questions = () => {
  return (
    <>
      {questionsWithAnswers.map((qa, index) => (
        <QuestionCard
          key={qa.question + index + qa.answer}
          question={qa.question}
          answer={qa.answer}
        />
      ))}
    </>
  );
};

export default Questions;
