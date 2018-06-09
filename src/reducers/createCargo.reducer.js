import { CREATE_CARGO } from '../actions/createCargo.action'

const initialState = {
  value: [],
}

const createCargo = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_CARGO: {
      console.log(payload)
      return {
        ...state,
        value: payload,
      }
    }
    default: {
      return state
    }
  }
}
export default createCargo
