import * as actions from './constants';

const nextQuestion = () => {
  return { type: actions.NEXT_QUESTION };
};

const goToQuestion = (number) => {
  return { type: actions.GO_TO_QUESTION, payload: number };
};

const prevQuestion = () => {
  return { type: actions.PREV_QUESTION };
};

export default {
  nextQuestion,
  goToQuestion,
  prevQuestion,
};
