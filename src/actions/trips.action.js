import {ANIMATE_CARDS, GET_TRIPS, UPDATE_TITLE} from './constants';
import * as API from '../api/api';

export const getTrips = (obj) => {
    return {
        type: GET_TRIPS,
        payload: API.getTrips(obj)
    }
}
export const animateCards = () => {
    return {
        type: ANIMATE_CARDS,
    }
}
export const updateTitle = (name) => {
    document.title = name
    return {
        type: UPDATE_TITLE,
        payload: name
    }
}