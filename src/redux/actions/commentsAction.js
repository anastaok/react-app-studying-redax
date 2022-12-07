import { COMMENT_CREATE } from "../types";

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    payload: { text, id },
  };
};
