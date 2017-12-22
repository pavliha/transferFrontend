import {ADD_EXPENSE, DELETE_EXPENSE, LOAD_CATEGORIES, LOAD_EXPENSES} from "../actions/expenses.action";

const initialState = {
    expenses: [],
    categories: [],
};

        export default (state = initialState, {type, payload}) => {
            switch (type) {
                case LOAD_EXPENSES + "_FULFILLED":
                    return {
                        ...state,
                        expenses: payload
                    }
                case LOAD_CATEGORIES + "_FULFILLED":
                    return {
                        ...state,
                        categories: payload
                    }
                case ADD_EXPENSE:
                    state.expenses.push(payload)

                    debugger
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