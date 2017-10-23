const membersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LEAD_MEMBER': {
      return Object.assign({}, state, { leadMember: action.payload });
    }
    case 'CREATE_TRAVEL_GROUP': {
      return Object.assign({}, state, {
        partner: action.payload.partnerId,
        travelGroupId: action.payload.travelGroupId,
      });
    }
    case 'ADD_CHILDREN_GROUPS': {
      return Object.assign({}, state, { childrenGroups: action.payload });
    }
    case 'ADD_CHOSEN_GROUPS': {
      return Object.assign({}, state, { chosenGroups: action.payload });
    }
    default: {
      return state;
    }
  }
};

export default membersReducer;
