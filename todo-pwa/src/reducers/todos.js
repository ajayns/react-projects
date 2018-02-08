// Reducer functions take state from Redux and action objects and returns a new state
// Each action is defined as a case

import { ADD_TODO, TOGGLE_TODO } from '../constants/action-types';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                }
                return todo;
                }
            );

        default:
            return state;
    }
}

export default todos;