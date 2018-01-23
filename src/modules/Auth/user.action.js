import * as API from '../../api/api'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'

export const registerUser = form => ({
    type: REGISTER_USER,
    payload: API.registerUser(form),
})

export const loginUser = data => !data ?
    ({
        type: LOGIN_USER + "_SUCCESS",
        payload: API.getSavedUser()
    }) : ({
        type: LOGIN_USER,
        payload: API.loginForm(data)
    })
