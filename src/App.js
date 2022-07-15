import React, { useContext } from "react";
import Question from "./components/Question";
import { ContextProvider } from "./components/QuizProvider";

export default function App() {
  const [quizState, dispatch] = useContext(ContextProvider);

  const questions = quizState.questions;
  const answerCount = quizState.answerCount;
  const showResult = quizState.showResult;
  const correctAnswerCount = quizState.correctAnswerCount;

  return (
    <div className="container">
      {!showResult && (
        <div>
          <div className="info">
            <h4>
              Questions Number:{" "}
              <span>
                {answerCount + 1} / {questions.length}
              </span>
            </h4>
            <h4>
              Question Category: <span>{questions[answerCount].category}</span>
            </h4>
          </div>
          <Question />
          <button
            className="next-question"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </button>
        </div>
      )}
      {showResult && (
        <div>
          <div className="question">
            <h3>Congratulations</h3>
          </div>
          <div className="show-result">
            <div className="complete">You Completed the Quiz</div>
            <div className="result">
              You've Got {correctAnswerCount} of {questions.length}
            </div>
            <button
              className="next-question"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart
            </button>
          </div>
        </div>
      )}
      <div className="ball-top"></div>
      <div className="ball-bottom"></div>
    </div>
  );
}
