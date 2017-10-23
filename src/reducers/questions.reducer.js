const initialState = {
  questionNumber: 0,
};

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEXT_QUESTION': {
      return Object.assign({}, state, { questionNumber: ++state.questionNumber });
    }
    case 'PREV_QUESTION': {
      return Object.assign({}, state, { questionNumber: --state.questionNumber });
    }
    case 'GO_TO_QUESTION': {
      return Object.assign({}, state, { questionNumber: action.payload });
    }
    default: {
      return state;
    }
  }
}

export default questionsReducer;
