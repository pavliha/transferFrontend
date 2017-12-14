import db from '../../services/database'
import moment from "moment/moment";

export const ADD_EXPENSE = 'ADD_EXPENSE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const LOAD_EXPENSES = 'LOAD_EXPENSES'

export function loadExpenses() {
    return {
        type: LOAD_EXPENSES,
        payload: db.table('expenses').toArray()
    }
}

export function addExpense(form) {

    const expense = {
        name: form.name.value,
        amount: parseFloat(form.amount.value),
        date: moment().toISOString()
    }
    db.table('expenses').add(expense)

    return {
        type: ADD_EXPENSE,
        payload: expense
    }
}

export function deleteExpense(expense) {


    db.table('expenses').where('id').equals(expense.id).delete()

    return {
        type: DELETE_EXPENSE,
        payload: expense
    }
}