import * as actions from '../constants/constants';

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
        case actions.ADD_LEAD_MEMBER: {
            return Object.assign({}, state, {leadMember: {id: action.payload}});
        }
        case actions.ADD_PARTNER: {
            return Object.assign({}, state, {partner: {id: action.payload}});
        }
        case actions.ADD_AGE_GROUPS: {
            return Object.assign({}, state, {ageGroups: action.payload});
        }
        case actions.SET_ACTIVITIES: {
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
        case actions.CREATE_TRAVEL_GROUP: {
            return Object.assign({}, state, {travelGroup: {id: action.payload}});
        }
        case actions.SET_COUNTRIES: {
            const travelGroup = Object.assign({}, state.travelGroup);
            travelGroup.preferredCountries = action.payload;
            return Object.assign({}, state, {travelGroup});
        }
        case actions.ADD_CHILDREN: {
            return Object.assign({}, state, {children: action.payload});
        }
        case actions.ADD_COUNTRIES: {
            return Object.assign({}, state, {countries: action.payload});
        }
        case actions.SET_BUDGET: {
            const travelGroup = Object.assign({}, state.travelGroup);
            travelGroup.budget = action.payload;
            return Object.assign({}, state, {travelGroup});
        }
        case actions.SIGN_UP_SUCCESS: {
            return Object.assign({}, state, {signUpData: action.payload, signUpError: ''});
        }
        case actions.SIGN_UP_ERROR: {
            return Object.assign({}, state, {signUpError: action.payload});
        }
        case actions.LOG_IN_SUCCESS: {
            const newState = Object.assign({}, state, {isLogged: true, logInError: '', userData: action.payload});
            return newState;
        }
        case actions.LOG_IN_ERROR: {
            return Object.assign({}, state, {logInError: action.payload});
        }
        default: {
            return state;
        }
    }
};

export default membersReducer;
