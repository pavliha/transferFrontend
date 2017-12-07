import {combineReducers} from "redux";
import questions from './questions.reducer';
import members from './members.reducer';

export default combineReducers({
    questions,
    members,
})
