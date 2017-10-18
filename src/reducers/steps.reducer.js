const initialState = {
  stepNumber: 0,
};

function stepsReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEXT_STEP': {
      return Object.assign({}, state, { stepNumber: ++state.stepNumber });
    }
    case 'PREV_STEP': {
      return Object.assign({}, state, { stepNumber: --state.stepNumber });
    }
    case 'GO_TO_STEP': {
      return Object.assign({}, state, { stepNumber: action.payload });
    }
    default: {
      return state;
    }
  }
}

export default stepsReducer;
