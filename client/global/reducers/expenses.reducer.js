import {ADD_EXPENSE, DELETE_EXPENSE, LOAD_EXPENSES} from "../actions/expenses.action";

const initialState = {
    expenses: [],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_EXPENSES + "_FULFILLED":
            return {
                ...state,
                expenses: payload
            }
        case ADD_EXPENSE:
            state.expenses.push(payload)
            return state
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== payload.id)
            }
        default: {
            return state;
        }
    }
};