import {combineReducers} from 'redux';
import questionsReducer from '../modules/Chat/reducers/questions.reducer';
import membersReducer from '../modules/Chat/reducers/members.reducer';
import tripsReducer from '../modules/Trips/trips.reducer';
import chefReducer from '../modules/Chef/chef.reducer'
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    router: routerReducer,
    questionsReducer,
    membersReducer,
    tripsReducer,
    chefReducer,
});
