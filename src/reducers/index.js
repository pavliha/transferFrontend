import { combineReducers } from 'redux'
import popularRouteReducer from './popularRoute.reducer'
import filtersReducer from './filters.reducer'

export default combineReducers({
  popularRoute: popularRouteReducer,
  filtersReducer,
})
