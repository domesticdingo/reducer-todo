import React from 'react'

const Todo = props => {
    return (
        <div>
            <h2 className={props.item.completed ? 'complete' : ''}
                onClick={(e) => {
                e.preventDefault();
                props.handleComplete(props.item.id);
            }} >{props.item.item}</h2>
        </div>
    )
}

export default Todo;