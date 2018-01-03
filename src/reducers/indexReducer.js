import {LOGIN_USER, REGISTER_USER} from "../action/user";

const initialState = {
    user: null,
    loading: false,
    messages:[],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case REGISTER_USER + "_PENDING":
            return {
                ...state,
                user: payload,
                loading: true,
            }

        case REGISTER_USER + "_FULFILLED":
            return {
                ...state,
                user: payload,
                loading: false
            }

        case REGISTER_USER + "_REJECTED":
            return {
                ...state,
                messages: payload,
                loading: false
            }

        case LOGIN_USER + "_FULFILLED":
            return {
                ...state,
                user: payload,
                loading: false
            }

        default: {
            return state;
        }
    }
};