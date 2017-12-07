export const GET_TRIPS = 'GET_TRIPS'
export const ANIMATE_CARDS = 'ANIMATE_CARDS'
export const UPDATE_TITLE = 'UPDATE_TITLE'

import * as API from '../../api/api';

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