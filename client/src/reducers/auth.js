import  { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

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
            localStorage.setItem('token' , payload.token);
            
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading : false
            }

        case REGISTER_FAIL:
            localStorage.removeItem('token')// Remove token on failure from localStorage, {state still has a token}

            return {
                ...state,
                token: null,// Clear token in state
                isAuthenticated: false,
                loading : false
            }

        default:
            return state;
    }
}