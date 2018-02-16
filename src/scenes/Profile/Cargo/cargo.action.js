import * as API from '../../../services/api/index'

export const GET_CARGOS = 'GET_CARGOS'
export const CREATE_CARGO = 'CREATE_CARGO'
export const GET_CARGO = 'GET_CARGO'

export const createCargo = form => ({
  type: CREATE_CARGO,
  payload: API.cargo.create(form)
})


export const getUserCargos = () => ({
  type: GET_CARGOS,
  payload: API.cargo.all()
})

export const getUserCargo = (id) => ({
  type: GET_CARGO,
  payload: API.cargo.find(id)
})
