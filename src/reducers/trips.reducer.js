import {GET_TRIPS} from '../constants/constants';

const initialState = {
    trips: [],
    total: null,
    loading: false,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TRIPS + '_PENDING':
            return {
                ...state,
                loading: true,
            };
        case GET_TRIPS + '_FULFILLED':
            return {
                ...state,
                loading: false,
                total: payload.total,
                trips: payload.data
            };

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
