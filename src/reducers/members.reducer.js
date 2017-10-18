const membersReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_LEAD_MEMBER': {
      return Object.assign({}, state, { leadMember: { id: action.payload } });
    }
    default: {
      return state;
    }
  }
}

export default membersReducer;