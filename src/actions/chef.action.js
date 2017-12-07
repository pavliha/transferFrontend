import {UPDATE_TITLE} from './constants';


export const updateTitle = (name) => {
    return {
        type: UPDATE_TITLE,
        payload: name
    }
}