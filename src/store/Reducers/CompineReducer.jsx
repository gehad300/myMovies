import { combineReducers } from "redux";
import { FavoriteReducer } from "./FavReducer";
import { getAllMoviesReducer } from "./GetMoviesReducer";
import { ChangeLangReducer } from "./Langreducer";

export default combineReducers({
  Favorite: FavoriteReducer,
  allMovies: getAllMoviesReducer,
  currentLang: ChangeLangReducer,
});
