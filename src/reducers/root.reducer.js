import { combineReducers } from 'redux';
import stepsReducer from './steps.reducer';
import membersReducer from './members.reducer';
export default combineReducers({
  stepsReducer,
  membersReducer,
});
