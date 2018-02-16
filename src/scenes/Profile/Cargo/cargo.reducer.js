import {GET_CARGOS} from "./cargo.action"
import {CREATE_CARGO,GET_CARGO} from "./cargo.action";

const initialState = {
  loading: false,
  errors: [],
  cargos: [],
  cargo: null,

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


    case GET_CARGOS + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_CARGOS + "_FULFILLED":
      return {
        ...state,
        cargos: payload.data,
        page: payload.page,
        lastPage: payload.lastPage,
        total: payload.total,
        perPage: payload.perPage,
        loading: false
      }

    case GET_CARGOS + "_REJECTED":
      return {
        ...state,
        errors: payload,
        loading: false
      }

    case GET_CARGO + "_PENDING":
      return {
        ...state,
        loading: true,
      }

    case GET_CARGO + "_FULFILLED":
      return {
        ...state,
        cargo: payload,
        loading: false
      }

    case GET_CARGO + "_REJECTED":
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