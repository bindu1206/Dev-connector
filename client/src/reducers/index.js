// Redux multiple reducers (authReducer, alertReducer)
import { combineReducers } from "redux";// mergers mini-reducers into one rootReducer
import alert from './alert'

export default combineReducers({
    // All reducers
    alert
})

// (state, action) => ({
//   alert: alertReducer(state.alert, action),
//   auth: authReducer(state.auth, action)
// });


// How data is stored in store

// {
//   alert: [ // alert state = []
//     { msg: "Login Failed", alertType: "danger", id: "xyz123" }
//   ]
// }