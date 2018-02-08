import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Todo from './Todo';
import Filter from './Filter';
import { FILTER_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../constants/filters';

const filteredTodos = (todos, filter) => {
    switch(filter) {
        case FILTER_ALL:
            return todos;
        case FILTER_COMPLETED:
            return todos.map(todo => todo.completed);
        case FILTER_ACTIVE:
            return todos.map(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filteredTodos(state.todos, state.filter)
    }
}



const List = styled.ul`
    padding-left: 0
`;

const TodoList = ({todos}) => {
    if(todos.length === 0) 
        return <div className="row flex-center margin-top-large">Chill scenes.</div>

    return (
        <div>
            <List className="child-borders">
                {todos.map(todo =>
                    <Todo
                        className="row"
                        key={todo.id}
                        {...todo}
                    />
                )}
            </List>
            <Filter/>
        </div>        
    );
}

export default connect(mapStateToProps)(TodoList);