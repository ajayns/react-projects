import { ADD_ARTICLE } from "../constants/action-types";

// Action to add article to store
export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});