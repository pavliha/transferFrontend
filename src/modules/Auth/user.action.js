import * as API from '../../api/api'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_CARGO = 'CREATE_CARGO'

export const registerUser = form => ({
    type: REGISTER_USER,
    payload: API.registerUser(form),
})

export const loginUser = data => !data ?
    ({
        type: LOGIN_USER + "_FULFILLED",
        payload: API.getSavedUser()
    }) : ({
        type: LOGIN_USER,
        payload: API.loginForm(data)
    })

export const logoutUser = () => {
    localStorage.clear()

    return {
        type: LOGOUT_USER,
    }
}


export const createCargo = form => ({
    type: CREATE_CARGO,
    payload: API.createCargo(form)
})