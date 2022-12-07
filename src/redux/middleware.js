import { COMMENT_CREATE, COMMENT_UPDATE } from "./types";
import { errorOn } from "./actions/commentsLoadAction";

const badWords = ["козел", "осел", "дурак"];

export const spamFilter = ({ dispatch }) => {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE || action.type === COMMENT_UPDATE) {
        const hasBadWords = badWords.some((res) =>
          action.payload.text.includes(res)
        );
        if (hasBadWords) {
          return dispatch(errorOn("Уважайте людей!"));
        }
      }
      return next(action);
    };
  };
};
