import {UPDATE_TITLE} from '../../api/constants';


export const updateTitle = (name) => {
    return {
        type: UPDATE_TITLE,
        payload: name
    }
}