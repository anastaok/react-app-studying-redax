import { COMMENT_DELETE } from "../types";

export const commentDelete = (id) => {
  return {
    type: COMMENT_DELETE,
    id,
  };
};
