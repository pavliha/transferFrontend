import {combineReducers} from 'redux';
import questionsReducer from './questions.reducer';
import membersReducer from './members.reducer';
import tripsReducer from './trips.reducer';
import chefReducer from './chef.reducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    router: routerReducer,
    questionsReducer,
    membersReducer,
    tripsReducer,
    chefReducer,
});
