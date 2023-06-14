import { axiosConfig } from "./../components/axiosConfig/axiosConfig.js";

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

export const getMovies = (page, lang) => {
  return (dispatch) => {
    axiosConfig
      .get("/movie/popular", {
        params: {
          page,
          language: lang,
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_DATA",
          payload: res.data.results,
          total_pages: res.data.total_pages,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
export const searchForMovies = (query, lang) => {
  return (dispatch) => {
    axiosConfig
      .get("/search/movie", {
        params: {
          query,
          language: lang,
        },
      })
      .then((res) => {
        dispatch({
          type: "SEARCH",
          payload: res.data.results,
          total_pages: res.data.total_pages,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
