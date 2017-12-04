import {GET_TRIPS} from './constants';
import * as API from '../api/api';

export const getTrips = (obj)=>{
    return {
        type: GET_TRIPS,
        payload: API.getTrips(obj)
    }
}