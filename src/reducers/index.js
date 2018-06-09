import { combineReducers } from 'redux'
import popularRoutesReducer from './popularRoutes.reducer'
import filtersReducer from './filters.reducer'
import cargoReducer from './cargo.reducer'

export default combineReducers({
  popularRoutes: popularRoutesReducer,
  filtersReducer,
  cargoReducer,
})
