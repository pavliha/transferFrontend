import {
    ADD_AGE_GROUPS, ADD_CHILDREN, ADD_COUNTRIES, ADD_LEAD_MEMBER, ADD_PARTNER, CREATE_TRAVEL_GROUP, LOG_IN_ERROR,
    LOG_IN_SUCCESS, SET_ACTIVITIES, SET_BUDGET, SET_COUNTRIES, SIGN_UP_ERROR, SIGN_UP_SUCCESS
} from "../actions/members.action";

const initialState = {
    leadMember: {},
    partner: {},
    ageGroups: {},
    travelGroup: {},
    countries: [],
    signUpData: {
        firstName: ''
    }
};

const membersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LEAD_MEMBER: {
            return Object.assign({}, state, {leadMember: {id: action.payload}});
        }
        case ADD_PARTNER: {
            return Object.assign({}, state, {partner: {id: action.payload}});
        }
        case ADD_AGE_GROUPS: {
            return Object.assign({}, state, {ageGroups: action.payload});
        }
        case SET_ACTIVITIES: {
            const newState = {};
            if (action.payload.memberType === 'lead') {
                newState.leadMember = Object.assign({}, state.leadMember);
                newState.leadMember.preferredActivities = action.payload.activities;
            } else if (action.payload.memberType === 'partner') {
                newState.partner = Object.assign({}, state.partner);
                newState.partner.preferredActivities = action.payload.activities;
            } else {
                newState.children = Object.assign({}, state.children);
                newState.children[action.payload.memberType] = {preferredActivities: action.payload.activities};
            }
            return Object.assign({}, state, newState);
        }
        case CREATE_TRAVEL_GROUP: {
            return Object.assign({}, state, {travelGroup: {id: action.payload}});
        }
        case SET_COUNTRIES: {
            const travelGroup = Object.assign({}, state.travelGroup);
            travelGroup.preferredCountries = action.payload;
            return Object.assign({}, state, {travelGroup});
        }
        case ADD_CHILDREN: {
            return Object.assign({}, state, {children: action.payload});
        }
        case ADD_COUNTRIES: {
            return Object.assign({}, state, {countries: action.payload});
        }
        case SET_BUDGET: {
            const travelGroup = Object.assign({}, state.travelGroup);
            travelGroup.budget = action.payload;
            return Object.assign({}, state, {travelGroup});
        }
        case SIGN_UP_SUCCESS: {
            return Object.assign({}, state, {signUpData: action.payload, signUpError: ''});
        }
        case SIGN_UP_ERROR: {
            return Object.assign({}, state, {signUpError: action.payload});
        }
        case LOG_IN_SUCCESS: {
            const newState = Object.assign({}, state, {isLogged: true, logInError: '', userData: action.payload});
            return newState;
        }
        case LOG_IN_ERROR: {
            return Object.assign({}, state, {logInError: action.payload});
        }
        default: {
            return state;
        }
    }
};

export default membersReducer;
