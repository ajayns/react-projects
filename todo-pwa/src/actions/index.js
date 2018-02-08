// Action creators recieve data from the DOM event, format it as formal JSON 'action' object

import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from '../constants/action-types';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});