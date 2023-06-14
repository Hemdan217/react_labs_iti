export const changeLoading = (data) => {
  return {
    type: "loading",
    payload: data,
  };
};
export const addToFavorite = (data) => {
  return {
    type: "adding",
    payload: data,
  };
};
export const removeFromFavorite = (data) => {
  return {
    type: "remove",
    payload: data,
  };
};
