import {LOGIN_USER, REGISTER_USER, CREATE_CARGO_FORM} from "./user.action";
import JWT from 'jwt-decode'

const initialState = {
    token: null,
    loading: false,
    errors: [],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case REGISTER_USER + "_PENDING":
            return {
                ...state,
                loading: true,
            }

        case REGISTER_USER + "_FULFILLED":
            return {
                ...state,
                token: payload,
                user: JWT(payload).data,
                loading: false
            }

        case REGISTER_USER + "_REJECTED":
            return {
                ...state,
                errors: payload,
                loading: false
            }

        case LOGIN_USER + "_FULFILLED":
            return {
                ...state,
                token: payload,
                user: JWT(payload).data,
                loading: false
            }

        case LOGIN_USER + "_REJECTED":
            return {
                ...state,
                errors: payload,
                loading: false
            }

        case CREATE_CARGO_FORM + "_FULFILLED":
            return {
                ...state,
                token: payload,
                user: JWT(payload).data,
                loading: false
            }

        case CREATE_CARGO_FORM + "_REJECTED":
            return {
                ...state,
                errors: payload,
                loading: false
            }

        default: {
            return state;
        }
    }
};