import * as API from '../api/api'

export const REGISTER_USER = 'REGISTER_USER'

export const registerUser = form => {

    debugger
    return ({
        type: REGISTER_USER,
        payload: API.registerUser(form),
    })
}
