import { COMMENT_CREATE } from "../types";

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
};
