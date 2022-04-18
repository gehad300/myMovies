import { GET_MOVIES, SEARCH_MOVIES } from "./types";
import { AxisInstance } from "./../../network/axiosconfig";
import axios from "axios";

export const getAllMoviesAction = (page) => (dispatch) => {
  return AxisInstance.get(
    `/popular?api_key=dcddf50ec1de061c1bff797edfc8c904&page=${page}`
  )
    .then((res) => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};

export const getMoviesBySearch = (key, page) => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=dcddf50ec1de061c1bff797edfc8c904&query=${key}&page=${page}`
    )
    .then((res) => {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};
