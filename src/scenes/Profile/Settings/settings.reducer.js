import {UPDATE_USER} from "./settings.action";

const initialState = {
  loading: false,
  errors: [],
  user: undefined
};

export default (state = initialState, {type, payload}) => {
  switch (type) {

    case UPDATE_USER + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case UPDATE_USER + "_FULFILLED":
      return {
        ...state,
        user: payload,
        loading: false
      }

    case UPDATE_USER + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }

    default: {
      return state;
    }
  }
};