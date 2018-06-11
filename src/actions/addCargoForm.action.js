
export const ADD_FORM_ITEM = 'ADD_FORM_ITEM'
export const REMOVE_FORM_ITEM = 'REMOVE_FORM_ITEM'

// noinspection JSUnusedGlobalSymbols
export const add = formItem => ({
  type: ADD_FORM_ITEM,
  payload: formItem,
})

// noinspection JSUnusedGlobalSymbols
export const remove = formItem => ({
  type: REMOVE_FORM_ITEM,
  payload: formItem,
})
