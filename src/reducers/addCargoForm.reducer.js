import { ADD_FORM_ITEM, REMOVE_FORM_ITEM } from '../actions/addCargoForm.action'

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
    default: {
      return state
    }
  }
}

export default addCargo
