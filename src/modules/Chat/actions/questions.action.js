export const NEXT_QUESTION = 'NEXT_QUESTION';
export const GO_TO_QUESTION = 'GO_TO_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';

const nextQuestion = () => {
  return { type: NEXT_QUESTION };
};

const goToQuestion = (number) => {
  return { type: GO_TO_QUESTION, payload: number };
};

const prevQuestion = () => {
  return { type: PREV_QUESTION };
};

export default {
  nextQuestion,
  goToQuestion,
  prevQuestion,
};
