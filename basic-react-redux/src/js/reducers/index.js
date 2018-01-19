import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

// Combine all reducers as root reducer
export default combineReducers({articles: articleReducer});