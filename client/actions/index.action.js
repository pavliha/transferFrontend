import {get} from '../api/api'

export const TOGGLE_EXPENSE_CARD = 'TOGGLE_EXPENSE_CARD'
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const LOAD_EXPENSES = 'LOAD_EXPENSES'

export function loadExpenses() {
    return {
        type: LOAD_EXPENSES,
        payload: get('/expenses')
    }
}

export function addExpense(form) {
    return {
        type: ADD_EXPENSE,
        payload: {
            name: form.name.value,
            amount: parseFloat(form.amount.value)
        }
    }
}