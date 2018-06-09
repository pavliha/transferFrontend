import cargos from '../mock/cargo'

const initialState = {
  cargos,
}

const cargoReducer = (state = initialState, { type }) => {
  switch (type) {
    default: {
      return state
    }
  }
}

export default cargoReducer
