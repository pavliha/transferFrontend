import cargos from '../mock/cargo'
import { SHOW_CARGO } from '../actions/cargo.action'

const initialState = {
  cargos,
  cargo: null,
}

const cargoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_CARGO: {
      return {
        ...state,
        cargo: state.cargos.find(cargo => cargo.id === payload),
      }
    }
    default: {
      return state
    }
  }
}

export default cargoReducer
