import { INCREMENT, DECREMENT } from "../types";

export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementLikes = () => {
  return {
    type: DECREMENT,
  };
};
