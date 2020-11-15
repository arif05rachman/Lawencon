import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import contactReducer from "./reducers/contactReducer";

const reducers = combineReducers({
  contactReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
