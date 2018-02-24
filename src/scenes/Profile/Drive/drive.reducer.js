import {CREATE_DRIVES, GET_DRIVES} from "./drive.action"

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
        drives: payload.data,
        loading: false
      }

    case GET_DRIVES + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }


    case CREATE_DRIVES + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case CREATE_DRIVES + "_FULFILLED":
      return {
        ...state,
        loading: false
      }

    case CREATE_DRIVES + "_REJECTED":
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