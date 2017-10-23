const addLeadMember = (id) => {
  return { type: 'ADD_LEAD_MEMBER', payload: id };
};

const createTravelGroup = (travelGroupId, partnerId) => {
  return { type: 'CREATE_TRAVEL_GROUP', payload: { travelGroupId, partnerId } };
};

const addChildrenGroups = (groups) => {
  return { type: 'ADD_CHILDREN_GROUPS', payload: groups };
};

const addChosenGroups = (groups) => {
  return { type: 'ADD_CHOSEN_GROUPS', payload: groups };
};

export default {
  addLeadMember,
  createTravelGroup,
  addChildrenGroups,
  addChosenGroups,
};
