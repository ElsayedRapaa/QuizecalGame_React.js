import React from "react";

export default function Answer({
  answer,
  index,
  onSelectAnswer,
  correctAnswer,
  currentAnswer,
}) {
  const letterAnswer = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answer === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answer && currentAnswer !== correctAnswer;

  const isCorrect = isCorrectAnswer ? "correct-answer" : "";
  const isWrong = isWrongAnswer ? "wrong-answer" : "";
  const isDesabled = currentAnswer ? "desabled" : "";

  return (
    <div
      className={`${isCorrect} ${isWrong} ${isDesabled}`}
      onClick={() => onSelectAnswer(answer)}
    >
      <div className="index">{letterAnswer[index]}</div>
      <div className="answer-text">{answer}</div>
    </div>
  );
}
