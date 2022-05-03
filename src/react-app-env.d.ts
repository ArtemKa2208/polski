/// <reference types="react-scripts" />
type Question = {
  id: number,
  question: string,
  options: string[],
  answer: string,
  points: number,
  // userAnswer: string,
};

type Answer = {
  id: number,
  answer: string,
};
