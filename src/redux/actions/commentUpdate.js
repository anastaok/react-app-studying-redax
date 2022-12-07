import { COMMENT_UPDATE } from "../types";

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    payload: { text, id },
  };
};
