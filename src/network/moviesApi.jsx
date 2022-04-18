import { AxisInstance } from "./axiosconfig";
import axios from "axios";

export const getMovies = (page, lang) => {
  return AxisInstance.get(
    `/popular?api_key=dcddf50ec1de061c1bff797edfc8c904&page=${page}&language=${lang}`
  );
};

export const getMoviesId = (id, lang) => {
  return AxisInstance.get(
    `/${id}?api_key=dcddf50ec1de061c1bff797edfc8c904&language=${lang}`
  );
};

export const searchMovies = (key, page, lang) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=dcddf50ec1de061c1bff797edfc8c904&query=${key}&page=${page}&language=${lang}`
  );
};
