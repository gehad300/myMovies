import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combineReducers from "./Reducers/CompineReducer";

export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
