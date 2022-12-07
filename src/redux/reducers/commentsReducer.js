import {
  COMMENTS_LOAD,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
} from "../types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case COMMENTS_LOAD:
      const commentsNew = action.payload.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });

      return {
        ...state,
        comments: commentsNew,
      };

    case COMMENT_UPDATE:
      const itemIndex = state.comments.findIndex(
        (res) => res.id === action.payload.id
      );

      const nextComments = [
        ...state.comments.slice(0, itemIndex),
        action.payload,
        ...state.comments.slice(itemIndex + 1),
      ];

      return {
        ...state,
        comments: nextComments,
      };

    case COMMENT_DELETE:
      const { comments } = state;
      const itemIndexDelete = comments.findIndex(
        (res) => res.id === action.payload.id
      );

      const nextCommentsDelete = [
        ...comments.slice(0, itemIndexDelete),
        ...comments.slice(itemIndexDelete + 1),
      ];

      return {
        ...state,
        comments: nextCommentsDelete,
      };

    default:
      return state;
  }
};
