import db from '../../services/database'
import moment from "moment/moment";

export const ADD_EXPENSE = 'ADD_EXPENSE'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const LOAD_EXPENSES = 'LOAD_EXPENSES'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function loadExpenses() {


    db.expenses
        .with({category: 'category_id'}) // makes referred items included
        .then(bands => {
            // Let's print the result:
            bands.forEach (band => {
                debugger
                console.log (`Band Name: ${band.name}`)
                console.log (`Genre: ${band.genre.name}`)
                console.log (`Albums: ${JSON.stringify(band.albums, null, 4)}`)
            });
        })


    return {
        type: LOAD_EXPENSES,
        payload: {}
    }
}

export function addExpense(form) {

    const expense = {
        name: form.name.value,
        category: form.category_id.value,
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