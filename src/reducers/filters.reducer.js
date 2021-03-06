import { ADD_FILTER, REMOVE_FILTER } from '../actions/filters.action'

const initialState = {
  badges: [
    { title: 'название' },
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
  page: 1,
  required: [],
  selected: ['title'],
}

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILTER: {
      const selected = [...state.selected]
      selected.push(payload)
      return {
        ...state,
        selected,
      }
    }

    case REMOVE_FILTER: {
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

export default filters
