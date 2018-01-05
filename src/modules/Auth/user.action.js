import * as API from '../../api/api'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'

export const registerUser = form => {

    return ({
        type: REGISTER_USER,
        payload: API.registerUser(form),
    })
}
export const loginUser = form => {

    return ({
        type: LOGIN_USER,
        payload: API.loginUser(form),
    })
}
