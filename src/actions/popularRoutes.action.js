import popularRoute from '../popularRoute.json'

export const LOAD_POPULAR_ROUTE_PENDING = 'LOAD_POPULAR_ROUTE_PENDING'
export const LOAD_POPULAR_ROUTE_FULFILLED = 'LOAD_POPULAR_ROUTE_FULFILLED'

export const loadPopularRoute = () => dispatch => {
  dispatch({
    type: LOAD_POPULAR_ROUTE_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_POPULAR_ROUTE_FULFILLED,
    payload: popularRoute,
  }), 500)
}
