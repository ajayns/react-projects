import { ADD_TODO, TOGGLE_TODO, CLEAR_TODOS } from '../constants/action-types';

// Check localStorage for saved Todos, else return null array
const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

// Each action as a switch case, to perform different actions to state
const todos = (state = storedTodos, action) => {
    switch (action.type) {
        case ADD_TODO:
            localStorage.setItem('todos', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        
        case CLEAR_TODOS:
            localStorage.removeItem('todos');
            return [];

        case TOGGLE_TODO:
            let modifiedTodos = state.map(todo => {
                        if (todo.id === action.id) 
                            return Object.assign({}, todo, { completed: !todo.completed });                    
                        return todo;
                    }
                );
            localStorage.setItem('todos', JSON.stringify(modifiedTodos));
            return modifiedTodos;

        default:
            return state;
    }
}

export default todos;