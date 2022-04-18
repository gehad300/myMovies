import { ADD_FAV } from "./../Actions/types";
import { REMOVE_FAV } from "./../Actions/types";

const INITIAL_STATE = {
  counter: 0,
  favMovies: [],
};

export function FavoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favMovies: state.favMovies.concat(action.payload),
        counter: (state.counter += 1),
      };

    case REMOVE_FAV:
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => {
          return item.id !== action.payload;
        }),
        counter: (state.counter -= 1),
      };

    default:
      return state;
  }
}
