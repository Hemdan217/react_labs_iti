const loaderReducer = (state = { loader: false }, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
};
const favoriteReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case "adding":
      // newState = state.filter((movie) => movie.id !== action.payload.id);

      return [...state, action.payload];
    case "remove":
      newState = state.filter((movie) => movie.id !== action.payload.id);
      return newState;
    case "removeAll":
      return [];
    default:
      return state;
  }
};

import { combineReducers } from "redux";

export default combineReducers({
  favorite: favoriteReducer,
  loader: loaderReducer,
});
