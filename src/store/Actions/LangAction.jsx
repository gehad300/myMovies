import { CHANGE_LANG } from "./types";

export const ChangeLangAction = (payload) => {
  return {
    type: CHANGE_LANG,
    payload,
  };
};
