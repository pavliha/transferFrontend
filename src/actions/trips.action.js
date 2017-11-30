import {GET_TRIPS} from '../constants/constants';
import * as API from '../api/api';

export const getTrips = ()=>{
    return {
        type: GET_TRIPS,
        payload: API.getTrips()
    }
}