import {UPDATE_TITLE} from '../actions/constants';

const initialState = {
    original: document.title,
    title: document.title
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: payload,
            }
        default: {
            return state;
        }
    }
};
