import { createStore, applyMiddleware } from "redux";// creates central store to hold state, Helps to add middleware into Redux
import { composeWithDevTools } from "@redux-devtools/extension";// lets you use Chorme devtools to inspect actions/state
import { thunk } from "redux-thunk";// middleware that lets you write async actions
import rootReducer from "./reducers/index";// all reducers combined

const initialState = {};// app's starting state

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))// adds thunk into Redux + allows using Redux DevTools
);

export default store;