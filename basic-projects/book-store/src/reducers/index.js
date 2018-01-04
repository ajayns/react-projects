// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import books from "./bookReducers";

 export default combineReducers({
     books
 });