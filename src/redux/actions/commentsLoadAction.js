import {
  COMMENTS_LOAD,
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from "../types";

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

export const errorOn = (text) => {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });

    setTimeout(() => {
      dispatch(errorOff());
    }, 3000);
  };
};
export const errorOff = () => {
  return {
    type: ERROR_DISPLAY_OFF,
  };
};

export const commentsLoad = () => {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=6"
      );
      const jsonData = await response.json();

      setTimeout(() => {
        dispatch({
          type: COMMENTS_LOAD,
          data: jsonData,
        });
        dispatch(loaderOff());
      }, 1000);
    } catch (err) {
      dispatch(errorOn("Ошибка API"));
      dispatch(loaderOff());
    }
  };
};
