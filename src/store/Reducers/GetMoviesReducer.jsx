import { GET_MOVIES, SEARCH_MOVIES } from "./../Actions/types";

const INITIAL_STATE = {
  list: [],
};

export function getAllMoviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        list: action.payload,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
