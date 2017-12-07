import * as API from '../../../api/api';


// Members Actions

export const GET_AGE_GROUPS = 'GET_AGE_GROUPS';
export const ADD_AGE_GROUPS = 'ADD_AGE_GROUPS';
export const ADD_LEAD_MEMBER = 'ADD_LEAD_MEMBER';
export const ADD_PARTNER = 'ADD_PARTNER';
export const CREATE_TRAVEL_GROUP = 'CREATE_TRAVEL_GROUP';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';
export const ADD_CHILDREN = 'ADD_CHILDREN';
export const ADD_COUNTRIES = 'ADD_COUNTRIES';
export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_BUDGET = 'SET_BUDGET';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';


const addLeadMember = () => {
  return (dispatch, getState) => {
    const adultGroupId = getState().membersReducer.ageGroups.Adult.id;
    API.createCustomer(adultGroupId).then((response) => {
      dispatch({ type: ADD_LEAD_MEMBER, payload: response._id });
    });
  };
};

const getAgeGroups = () => {
  return (dispatch) => {
    API.getAgeGroups().then((response) => {
      const ageGroups = {};
      response.data.forEach((group) => {
        ageGroups[group.text] = {
          id: group._id,
          activities: group.activities,
        };
      });
      dispatch({ type: ADD_AGE_GROUPS, payload: ageGroups });
    });
  };
};

const addPartner = () => {
  return (dispatch, getState) => {
    const adultGroupId = getState().membersReducer.ageGroups.Adult.id;
    const travelGroupId = getState().membersReducer.travelGroup.id;
    let partnerId;
    API.createCustomer(adultGroupId)
      .then((response) => {
        partnerId = response._id;
        return API.addMember(travelGroupId, response._id);
      })
      .then(() => {
        dispatch({ type: ADD_PARTNER, payload: partnerId });
      });
  };
};

const createTravelGroup = () => {
  return (dispatch, getState) => {
    const leadMemberId = getState().membersReducer.leadMember.id;
    API.createTravelGroup(leadMemberId).then((response) => {
      dispatch({ type: CREATE_TRAVEL_GROUP, payload: response._id });
    });
  };
};

const setActivities = (id, activities, memberType) => {
  return (dispatch, getState) => {
    const args = [id, activities];
    if (memberType !== 'lead' && memberType !== 'partner') {
      const ageGroup = getState().membersReducer.ageGroups[memberType].id;
      const travelGroup = getState().membersReducer.travelGroup.id;
      args.push({
        ageGroup,
        travelGroup,
      });
    }
    API.setActivities(...args).then(() => {
      dispatch({ type: SET_ACTIVITIES, payload: { memberType, activities } });
    });
  };
};

const createChilren = (childrenCount, getState) => {
  const ageGroups = getState().membersReducer.ageGroups;
  const travelGroupId = getState().membersReducer.travelGroup.id;

  const promises = [];
  Object.keys(childrenCount).forEach((groupName) => {
    const count = childrenCount[groupName];
    for (let i = 0; i < count; i++) {
      promises.push(API.createCustomer(ageGroups[groupName].id, travelGroupId));
    }
  });
  return Promise.all(promises);
};

const addToTravelGroup = (children, getState) => {
  const travelGroupId = getState().membersReducer.travelGroup.id;
  const promises = [];
  children.forEach((child) => {
    promises.push(API.addMember(travelGroupId, child._id));
  });
  return Promise.all(promises);
};

const addChildren = (childrenCount) => {
  return (dispatch, getState) => {
    createChilren(childrenCount, getState)
      .then((response) => {
        return addToTravelGroup(response, getState);
      })
      .then(() => {
        dispatch({ type: ADD_CHILDREN, payload: childrenCount });
      });
  };
};

const getCountries = () => {
  return (dispatch) => {
    const countries = [];
    API.getCountries().then((response) => {
      response.data.forEach((country) => {
        countries.push({ _id: country._id, text: country.text });
      });
      dispatch({ type: ADD_COUNTRIES, payload: countries });
    });
  };
};

const setCountries = (countries) => {
  return (dispatch, getState) => {
    const travelGroupId = getState().membersReducer.travelGroup.id;
    API.setCountries(travelGroupId, countries).then(() => {
      dispatch({ type: SET_COUNTRIES, payload: countries });
    });
  };
};

const setBudget = (budget) => {
  return (dispatch, getState) => {
    const travelGroupId = getState().membersReducer.travelGroup.id;
    API.setBudget(travelGroupId, budget).then(() => {
      dispatch({ type: SET_BUDGET, payload: budget });
    });
  };
};

const signUp = (data) => {
  return (dispatch) => {
    API.signUp(data).then(
      () => {
        dispatch({ type: SIGN_UP_SUCCESS, payload: data });
      },
      (error) => {
        dispatch({ type: SIGN_UP_ERROR, payload: error });
      },
    );
  };
};

const logIn = (data) => {
  return (dispatch) => {
    API.logIn(data).then(
      (response) => {
        dispatch({ type: LOG_IN_SUCCESS, payload: response });
      },
      (error) => {
        dispatch({ type: LOG_IN_ERROR, payload: error });
      },
    );
  };
};

export default {
  addLeadMember,
  getAgeGroups,
  setActivities,
  addPartner,
  createTravelGroup,
  addChildren,
  setCountries,
  getCountries,
  setBudget,
  signUp,
  logIn,
};
