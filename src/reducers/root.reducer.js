import {combineReducers} from 'redux';
import questionsReducer from './questions.reducer';
import membersReducer from './members.reducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    router: routerReducer,
    questionsReducer,
    membersReducer,
});
