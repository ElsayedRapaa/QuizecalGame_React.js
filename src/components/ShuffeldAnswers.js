export const shuffeldAnswers = (question) => {
  const unShuffeldAnswer = [
    question.correct_answer,
    ...question.incorrect_answers,
  ];

  return unShuffeldAnswer
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((value) => value.value);
};
