import { combineReducers } from 'redux';
import questionsReducer from './questions.reducer';
import membersReducer from './members.reducer';

export default combineReducers({
  questionsReducer,
  membersReducer,
});
