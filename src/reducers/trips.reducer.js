import {GET_TRIPS} from '../constants/constants';

const initialState = {
    trips: [],
    total: 0,
    skip: 0,
    limit: 9,
    loading: false,
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
                limit: payload.limit,
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
        default: {
            return state;
        }
    }
};
