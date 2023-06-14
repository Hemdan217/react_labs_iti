const loaderReducer = (state = { loader: false }, action) => {
  switch (action.type) {
    case "loading":
      return {
        loader: true,
      };
    case "done":
      return {
        loader: false,
      };
    default:
      return state;
  }
};
const favoriteReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case "adding":
      newState = state.filter((movie) => movie.id !== action.payload.id);

      return [...new Set(newState), action.payload];
    case "remove":
      newState = state.filter((movie) => movie.id !== action.payload.id);
      return newState;
    case "removeAll":
      return [];
    default:
      return state;
  }
};
const moviesReducer = (state = { movies: [], total_pages: 1 }, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        movies: action.payload,
        total_pages: action.total_pages,
      };
    case "SEARCH":
      return {
        ...state,
        movies: action.payload,
        total_pages: action.total_pages,
      };

    default:
      return state;
  }
};

import { combineReducers } from "redux";

export default combineReducers({
  favorite: favoriteReducer,
  loader: loaderReducer,
  movies: moviesReducer,
});
