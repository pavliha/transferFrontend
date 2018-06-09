export const CREATE_CARGO = 'CREATE_CARGO'

export const createCargo = (value) => dispatch => {
  dispatch({
    type: CREATE_CARGO,
    payload: value,
  })
}
