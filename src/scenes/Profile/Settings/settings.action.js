import {user} from "../../../services/api/api"

export const UPDATE_PASSPORT = 'UPDATE_PASSPORT'
export const UPDATE_USER = 'UPDATE_USER'

export const updateUser = form => ({
  type: UPDATE_USER,
  payload: user.update(form),
})
export const updatePassport = form => ({
  type: UPDATE_PASSPORT,
  payload: user.updatePassport(form),
})