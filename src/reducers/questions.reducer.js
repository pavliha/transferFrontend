import * as actions from '../constants/constants';

const initialState = {
  questionNumber: 0,
};

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.NEXT_QUESTION: {
      return Object.assign({}, state, { questionNumber: ++state.questionNumber });
    }
    case actions.PREV_QUESTION: {
      return Object.assign({}, state, { questionNumber: --state.questionNumber });
    }
    case actions.GO_TO_QUESTION: {
      return Object.assign({}, state, { questionNumber: action.payload });
    }
    default: {
      return state;
    }
  }
}

export default questionsReducer;
