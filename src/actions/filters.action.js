
export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'

// noinspection JSUnusedGlobalSymbols
export const add = filter => ({
  type: ADD_FILTER,
  payload: filter,
})

// noinspection JSUnusedGlobalSymbols
export const remove = filter => ({
  type: REMOVE_FILTER,
  payload: filter,
})

