const addLeadMember = (id) => {
  return { type: 'ADD_LEAD_MEMBER', payload: id };
};

export default {
  addLeadMember,
};
