import * as API from '../../services/api/api'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_DRIVE = 'CREATE_DRIVE'
export const UPDATE_USER = 'UPDATE_USER'

export const registerUser = form => ({
    type: REGISTER_USER,
    payload: API.registerUser(form),
})

export const updateUser = form => ({
    type: UPDATE_USER,
    payload: API.updateUser(form),
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


export const createDriveForm = form => ({
    type: CREATE_DRIVE,
    payload: API.createDriveForm(form)
})