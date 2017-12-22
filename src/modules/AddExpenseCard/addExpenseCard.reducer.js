import { TOGGLE_EXPENSE_CARD} from "./addExepenseCard.action";

const initialState = {
    visible: false
};

export default (state = initialState, {type}) => {
    switch (type) {
        case TOGGLE_EXPENSE_CARD:
            return {
                ...state,
                visible: !state.visible,
            }

        default: {
            return state;
        }
    }
};