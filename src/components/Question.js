import React, { useContext } from "react";
import Answer from "./Answer";
import { questions } from "./Data";
import { ContextProvider } from "./QuizProvider";

export default function Question() {
  const [quizState, dispatch] = useContext(ContextProvider);

  const question = quizState.questions;
  const answerCount = quizState.answerCount;
  const answers = quizState.answers;

  return (
    <div className="question">
      <h3>{question[answerCount].question}</h3>
      <div className="answers">
        {answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            index={index}
            correctAnswer={questions[answerCount].correct_answer}
            currentAnswer={quizState.currentAnswer}
            onSelectAnswer={(answer) =>
              dispatch({ type: "SELECT_ANSWER", payload: answer })
            }
          />
        ))}
      </div>
    </div>
  );
}
