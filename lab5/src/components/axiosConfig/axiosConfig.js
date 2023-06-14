import axios from "axios";
import store from "./../../redux/store.js";
export const axiosConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3e8be4e5dd676087a662e4edba8c8500",
  },
});

axiosConfig.interceptors.request.use(
  (req) => {
    store.dispatch({
      type: "loading",
    });
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosConfig.interceptors.response.use(
  (res) => {
    store.dispatch({
      type: "done",
    });

    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
