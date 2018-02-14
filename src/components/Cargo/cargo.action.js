import * as API from '../../services/api/api'

export const GET_USER_CARGO = 'GET_USER_CARGO'
export const CREATE_CARGO = 'CREATE_CARGO'


export const createCargo = form => ({
  type: CREATE_CARGO,
  payload: API.createCargo(form)
})


export const getUserCargo = () => ({
  type: GET_USER_CARGO,
  payload: API.getUserCargo()
})
