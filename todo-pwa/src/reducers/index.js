// Reducer functions take state from Redux and action objects and returns a new state
// Here, store has values of states of both todos and filter

import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

export default combineReducers({
    todos,
    filter
});