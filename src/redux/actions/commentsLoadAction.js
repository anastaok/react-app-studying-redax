import { COMMENTS_LOAD, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "../types";

export const loaderOn = () => {
  return {
    type: LOADER_DISPLAY_ON,
  };
};

export const loaderOff = () => {
  return {
    type: LOADER_DISPLAY_OFF,
  };
};

export const commentsLoad = () => {
  return async (dispatch) => {
    dispatch(loaderOn());

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    );
    const jsonData = await response.json();

    setTimeout(() => {
      dispatch({
        type: COMMENTS_LOAD,
        payload: jsonData,
      });
      dispatch(loaderOff());
    }, 1000);
  };
};
