import {CREATE_DRIVE, LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "./user.action";

const initialState = {
  loading: false,
  errors: [],
  user: undefined
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTER_USER + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case REGISTER_USER + "_FULFILLED":
      return {
        ...state,
        user: payload,
        loading: false
      }

    case REGISTER_USER + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }

    case LOGIN_USER + "_FULFILLED":
      return {
        ...state,
        user: payload,
        loading: false
      }

    case LOGIN_USER + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      }

    case CREATE_DRIVE + "_FULFILLED":
      return {
        ...state,
        token: payload,
        user: payload,
        loading: false
      }

    case CREATE_DRIVE + "_REJECTED":
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