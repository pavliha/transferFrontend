const nextQuestion = () => {
  return { type: 'NEXT_QUESTION' };
};

const goToQuestion = (number) => {
  return { type: 'GO_TO_QUESTION', payload: number };
};

const prevQuestion = () => {
  return { type: 'PREV_QUESTION' };
};

export default {
  nextQuestion, goToQuestion, prevQuestion,
};
