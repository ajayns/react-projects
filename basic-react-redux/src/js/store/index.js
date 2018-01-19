import { createStore } from "redux";
import rootReducer from "../reducers/index";

// Configure store with reducers and create
const store = createStore(rootReducer);

export default store;
