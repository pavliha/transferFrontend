import {
  ADD_FORM_ITEM,
  REMOVE_FORM_ITEM,
  CREATE_CARGO_FULFILLED,
  CREATE_CARGO_PENDING,
  CREATE_CARGO_REJECTED,
} from '../actions/createCargo.action'

const initialState = {
  badges: [
    { from: 'откуда' },
    { to: 'куда' },
    { time: 'время' },
    { date_from: 'дата отправки' },
    { dimensions: 'размеры' },
    { pictures: 'фото' },
    { weight: 'вес' },
    { date_to: 'дата доставки' },
    { volume: 'обьём' },
    { description: 'описание' },
    { transport_type: 'тип транспорта' },
    { payment: 'оплата' },
  ],
  required: ['from', 'to'],
  selected: ['from', 'to'],
  loading: false,
}

const addCargo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FORM_ITEM: {
      const selected = [...state.selected]
      selected.push(payload)
      return {
        ...state,
        selected,
      }
    }

    case REMOVE_FORM_ITEM: {
      const selected = [...state.selected]
      return {
        ...state,
        selected: selected.filter((filter) => filter !== payload),
      }
    }

    case CREATE_CARGO_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }
    case CREATE_CARGO_FULFILLED: {
      return {
        ...state,
        loading: false,
        success: true,
      }
    }
    case CREATE_CARGO_REJECTED: {
      return {
        ...state,
        error: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default addCargo
