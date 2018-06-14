import { combineReducers } from 'redux'
import popularRoutesReducer from './popularRoutes.reducer'
import filtersReducer from './filters.reducer'
import cargoListReducer from './cargoList.reducer'
import addCargoFormReducer from './createCargo.reducer'
import authReducer from './auth.reducer'
import alertReducer from './alert.reducer'

export default combineReducers({
  popularRoutes: popularRoutesReducer,
  filtersReducer,
  addCargoFormReducer,
  cargoReducer: cargoListReducer,
  authReducer,
  alertReducer,
})
