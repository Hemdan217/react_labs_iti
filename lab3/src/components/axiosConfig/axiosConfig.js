import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3e8be4e5dd676087a662e4edba8c8500",
  },
});
