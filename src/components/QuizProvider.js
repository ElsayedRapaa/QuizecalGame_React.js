import React, { createContext, useReducer } from "react";
import { questions } from "./Data";
import { shuffeldAnswers } from "./ShuffeldAnswers";

const initialState = {
  questions,
  answerCount: 0,
  showResult: false,
  correctAnswerCount: 0,
  answers: shuffeldAnswers(questions[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResult = state.answerCount === state.questions.length - 1;
      const answerCount = showResult
        ? state.answerCount
        : state.answerCount + 1;
      const answers = showResult
        ? []
        : shuffeldAnswers(state.questions[answerCount]);
      return {
        ...state,
        answerCount,
        showResult,
        answers,
        currentAnswer: "",
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload === state.questions[state.answerCount].correct_answer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const ContextProvider = createContext();

export function QuizProvider({ children }) {
  const value = useReducer(reducer, initialState);

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
