import {ADD_EXPENSE, LOAD_EXPENSES, TOGGLE_EXPENSE_CARD} from "../actions/index.action";

const initialState = {
    expenses: [],
    showAddExpenseCard: false
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_EXPENSES + "_FULFILLED":
            return {
                ...state,
                expenses: payload.items
            }
        case ADD_EXPENSE:
            state.expenses.push(payload)
            return state

        default: {
            return state;
        }
        case TOGGLE_EXPENSE_CARD:
            return {
                ...state,
                showAddExpenseCard: !state.showAddExpenseCard,
            }
    }
};