import  { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ACCOUNT_DELETED } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,// True after login/register success
    loading: true, // True until auth check finishes
    user: null, // api/auth // Filled with user data from API
};

// State is immutable; always return a new one
export default function(state = initialState, action){

    const { type, payload } = action;
    // Payload has token and user details
    switch(type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token' , payload.token);
            
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading : false
            }

        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case ACCOUNT_DELETED:
            localStorage.removeItem('token')// Remove token on failure from localStorage, {state still has a token}
            return {
                ...state,
                token: null,// Clear token in state
                isAuthenticated: false,
                loading : false
            }

        case USER_LOADED:

            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }

        default:
            return state;
    }
}