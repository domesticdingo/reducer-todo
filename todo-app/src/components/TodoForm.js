import React, {useState} from 'react';

const TodoForm = props => {
    const [form, setForm] = useState("")

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.addTodo(form);
            setForm("");
        }} >
            <input 
                name="todo"
                placeholder="Add To-Do"
                value={form}
                onChange={(e) => {
                    setForm(e.target.value)
                }}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TodoForm;