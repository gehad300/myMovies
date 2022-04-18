import { ADD_FAV, REMOVE_FAV } from "./types";

export const AddFavorite = (payload) => {
  return {
    type: ADD_FAV,
    payload,
  };
};

export const RemoveFavorite = (payload) => {
  return {
    type: REMOVE_FAV,
    payload,
  };
};
