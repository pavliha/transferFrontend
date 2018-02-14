import * as API from '../../services/api/api'

export const GET_USER_CARGOS = 'GET_USER_CARGOS'
export const CREATE_CARGO = 'CREATE_CARGO'
export const GET_USER_CARGO = 'GET_USER_CARGO'

export const createCargo = form => ({
  type: CREATE_CARGO,
  payload: API.createCargo(form)
})


export const getUserCargos = () => ({
  type: GET_USER_CARGOS,
  payload: API.getUserCargos()
})

export const getUserCargo = (id) => ({
  type: GET_USER_CARGO,
  payload: API.getUserCargo(id)
})
