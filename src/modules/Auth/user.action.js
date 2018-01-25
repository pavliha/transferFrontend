import * as API from '../../api/api'

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const CREATE_CARGO_FORM = 'CREATE_CARGO_FORM'

export const registerUser = form => ({
    type: REGISTER_USER,
    payload: API.registerUser(form),
})

export const loginUser = form => ({
    type: LOGIN_USER,
    payload: API.loginUser(form)
})

export const Create_Cargo_Form = form => ({
    type: CREATE_CARGO_FORM,
    payload: API.Create_Cargo_Form(form)
})