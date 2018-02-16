import {GET_DRIVES} from "./drive.action"

const initialState = {
  loading: false,
  errors: [],
  drives: []
};
export default (state = initialState, {type, payload}) => {
  switch (type) {

    case GET_DRIVES + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_DRIVES + "_FULFILLED":
      return {
        ...state,
        drives: payload,
        loading: false
      }

    case GET_DRIVES + "_REJECTED":
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