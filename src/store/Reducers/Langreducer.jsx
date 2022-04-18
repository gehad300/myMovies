import { CHANGE_LANG } from "./../Actions/types";

const INITIAL_STATE = {
  lang: "er",
};

export function ChangeLangReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
