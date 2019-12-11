import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.state.map((item) => {
                return <Todo key={item.id} item={item} handleComplete={props.handleComplete} />
            })}
        </div>
    )
}

export default TodoList;