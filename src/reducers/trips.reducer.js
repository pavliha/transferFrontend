import {ANIMATE_CARDS, GET_TRIPS, UPDATE_TITLE} from '../actions/constants';

const initialState = {
    trips: [],
    total: 0,
    skip: 0,
    loading: false,
    animated: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TRIPS + '_PENDING':
            return {
                ...state,

            };
        case GET_TRIPS + '_FULFILLED':
            let newState = {
                ...state,
                loading: false,
                skip: payload.skip,
                total: payload.total,
            }
            newState.trips = newState.trips.concat(payload.data)

            return newState;

        case GET_TRIPS + '_REJECTED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case ANIMATE_CARDS:
            return {
                ...state,
                animated: true
            }

        case UPDATE_TITLE:
            return {
                ...state,
                title: payload
            }
        default: {
            return state;
        }
    }
};
