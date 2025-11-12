import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = [];

export default function(state = initialState, action){// state = empty array initially

    const { type, payload } = action;

    // state is immutable - should return new array everytime
    switch(type){
        case SET_ALERT:
            return [...state, payload];// payload = new alert
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);// payload = id of alert
        default:
            return state;
    }
}