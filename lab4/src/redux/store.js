import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers";

const store = createStore(combineReducers, composeWithDevTools());

export default store;
