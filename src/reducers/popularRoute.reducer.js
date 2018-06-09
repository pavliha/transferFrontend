import { LOAD_POPULAR_ROUTE_FULFILLED, LOAD_POPULAR_ROUTE_PENDING } from '../actions/popularRoute.action'

const initialState = {
  loading: false,
  popularRoute: [],
}

const popularRoute = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_POPULAR_ROUTE_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_POPULAR_ROUTE_FULFILLED: {
      return {
        ...state,
        popularRoute: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default popularRoute
