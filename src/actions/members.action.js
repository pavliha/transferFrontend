import * as actions from '../constants/constants';
import * as API from '../api/api';

const addLeadMember = () => {
  return (dispatch, getState) => {
    const adultGroupId = getState().membersReducer.ageGroups.Adult.id;
    API.createCustomer(adultGroupId).then((response) => {
      dispatch({ type: actions.ADD_LEAD_MEMBER, payload: response._id });
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
      dispatch({ type: actions.ADD_AGE_GROUPS, payload: ageGroups });
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
        dispatch({ type: actions.ADD_PARTNER, payload: partnerId });
      });
  };
};

const createTravelGroup = () => {
  return (dispatch, getState) => {
    const leadMemberId = getState().membersReducer.leadMember.id;
    API.createTravelGroup(leadMemberId).then((response) => {
      dispatch({ type: actions.CREATE_TRAVEL_GROUP, payload: response._id });
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
      dispatch({ type: actions.SET_ACTIVITIES, payload: { memberType, activities } });
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
        dispatch({ type: actions.ADD_CHILDREN, payload: childrenCount });
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
      dispatch({ type: actions.ADD_COUNTRIES, payload: countries });
    });
  };
};

const setCountries = (countries) => {
  return (dispatch, getState) => {
    const travelGroupId = getState().membersReducer.travelGroup.id;
    API.setCountries(travelGroupId, countries).then(() => {
      dispatch({ type: actions.SET_COUNTRIES, payload: countries });
    });
  };
};

const setBudget = (budget) => {
  return (dispatch, getState) => {
    const travelGroupId = getState().membersReducer.travelGroup.id;
    API.setBudget(travelGroupId, budget).then(() => {
      dispatch({ type: actions.SET_BUDGET, payload: budget });
    });
  };
};

const signUp = (data) => {
  return (dispatch) => {
    API.signUp(data).then(
      () => {
        dispatch({ type: actions.SIGN_UP_SUCCESS, payload: data });
      },
      (error) => {
        dispatch({ type: actions.SIGN_UP_ERROR, payload: error });
      },
    );
  };
};

const logIn = (data) => {
  return (dispatch) => {
    API.logIn(data).then(
      (response) => {
        dispatch({ type: actions.LOG_IN_SUCCESS, payload: response });
      },
      (error) => {
        dispatch({ type: actions.LOG_IN_ERROR, payload: error });
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
