import getData from '../services/getData';

import sendData from '../services/sendData';
import param from 'jquery-param'
import {CARD_LOAD_LIMIT} from "../modules/Trips/TripListContainer";

export const createCustomer = (ageGroupId, travelGroupId) => {
    const data = {
        ageGroup: ageGroupId,
    };
    if (travelGroupId) data.travelGroup = travelGroupId;

    return sendData('/customers', 'POST', data);
};

export const getAgeGroups = () => {
    return getData('/age-groups?$select=text&$select=activities&$populate=activities');
};

export const setActivities = (id, activities, extraParams) => {
    let url = id ? `/customers?_id=${id}` : '/customers?';

    if (extraParams) {
        Object.keys(extraParams).forEach((param) => {
            url += `&${param}=${extraParams[param]}`;
        });
    }
    return sendData(url, 'PATCH', {
        preferredActivities: activities,
    });
};

export const setCountries = (travelGroupId, countries) => {
    return sendData(`/travel-groups/?_id=${travelGroupId}`, 'PATCH', {
        preferredCountries: countries,
    });
};

export const setBudget = (travelGroupId, budget) => {
    return sendData(`/travel-groups?_id=${travelGroupId}`, 'PATCH', budget);
};

export const logIn = (data) => {
    return sendData('/auth', 'POST', data);
};

export const signUp = (data) => {
    return sendData('/users', 'POST', data);
};

export const createTravelGroup = (leadMemberId) => {
    const data = {
        leadMember: leadMemberId,
    };
    return sendData('/travel-groups', 'POST', data);
};

export const addMember = (travelGroupId, memberId) => {
    const newMember = {
        $addToSet: {
            members: memberId,
        },
    };
    return sendData(`/travel-groups?_id=${travelGroupId}`, 'PATCH', newMember);
};

export const getCountries = () => {
    return getData('/countries?isServed=true&$limit=50');
};
export const getTrips = ({skip}) => {
    const params = param({$skip: skip, $populate: 'designer', $limit: CARD_LOAD_LIMIT})

    return getData('/trips?' + params)
}