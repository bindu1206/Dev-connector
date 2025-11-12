// Dispatching Acitons
import { SET_ALERT, REMOVE_ALERT } from "./types";// req Names
import { v4 as uuidv4 } from "uuid";

// Redux actions are plain objects, but since we use redux-thunk, we can return a function instead of a plain object to perform async or multi-step logic.

// Component Calls this Function, to recieve an action (Redux recieves)
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4();

  // alert reducer handles it and does changes in the store
//   //(state, action) => ({
//   alert: alertReducer(state.alert, action),
//   auth: authReducer(state.auth, action)
// }); 

  // passess type and payload to all reducers, if action.type matches -> handles , else current state
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });

  setTimeout(() =>
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    }),
    timeout
  );
};