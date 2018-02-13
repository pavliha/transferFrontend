import {GET_USER_CARGO} from "./cargo.action"
import {CREATE_CARGO} from "./cargo.action";

const initialState = {
  loading: false,
  errors: [],
  cargos: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {

    case CREATE_CARGO + "_FULFILLED":
      return {
        ...state,
        token: payload,
        user: payload,
        loading: false
      }

    case CREATE_CARGO + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }


    case GET_USER_CARGO + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_USER_CARGO + "_FULFILLED":
      return {
        ...state,
        cargos: payload.data,
        page: payload.page,
        lastPage: payload.lastPage,
        total: payload.total,
        perPage: payload.perPage,
        loading: false
      }

    case GET_USER_CARGO + "_REJECTED":
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