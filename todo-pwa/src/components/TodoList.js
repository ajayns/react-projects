import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Todo from './Todo';
import Filter from './Filter';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../constants/filters';

// Filter todos based on selected filter
const filteredTodos = (todos, filter) => {
    switch(filter) {
        case FILTER_ALL:
            return todos;
        case FILTER_COMPLETED:
            return todos.filter(todo => todo.completed);
        case FILTER_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

// Get todos from state
const mapStateToProps = (state) => {
    return {
        todos: filteredTodos(state.todos, state.filter),
        filter: state.filter
    }
}



const List = styled.ul`
    padding-left: 0
`;

// Component to display todolist, also wraps Filter component
const TodoList = ({todos, filter}) => {
    
    // Display message if no todos
    let message;
    if(todos.length === 0) {
        let text;
        switch(filter) {
            case FILTER_COMPLETED: text = 'Nothing completed yet.'; break;
            case FILTER_ACTIVE: text = 'Nothing to be completed.'; break;
            default: text = 'Chill scenes.'; break;
        }
        message = (<div className="row flex-center margin-top-large">{text}</div>);
    }       

    return (
        <div>
            {message}
            <List className="child-borders">
                {todos.map(todo =>
                    <Todo
                        className="row"
                        key={todo.id}
                        {...todo}
                    />
                )}
            </List>
            <Filter todosLength={todos.length} filter={filter}/>
        </div>        
    );
}

export default connect(mapStateToProps)(TodoList);