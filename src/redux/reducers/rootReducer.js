import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputTitleReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
});
