import Cache from '../services/Cache'
import {
  LOGIN_USER_FULFILLED,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  REGISTER_USER_PENDING,
  REGISTER_USER_FULFILLED,
  REGISTER_USER_REJECTED,
} from '../actions/auth.action'

const initialState = {
  user: {},
  errors: [],
  error: false,
  loading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOGIN_USER_FULFILLED: {
      return {
        ...state,
        user: Cache.get('user'),
        loading: false,
      }
    }
    case LOGIN_USER_REJECTED: {
      return {
        ...state,
        error: true,
        errors: payload,
        loading: false,

      }
    }

    case REGISTER_USER_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case REGISTER_USER_FULFILLED: {
      return {
        ...state,
        user: Cache.get('user'),
        loading: false,
      }
    }
    case REGISTER_USER_REJECTED: {
      return {
        ...state,
        error: payload,
        errors: payload,
        loading: false,

      }
    }
    default: {
      return state
    }
  }
}

export default authReducer
