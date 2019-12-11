import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { reducer, initialState } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (param) => {
    const newTodo = {
      item: param,
      completed: false,
      id: Math.random()
    }
    dispatch({ type: "ADD_NEW", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"TOGGLE", payload: id})
  }

  const purgeCompleted = () => {
    dispatch({type:"PURGE_COMPLETED"})
  }

  return (
    <div>
      <h1>To-Do Application</h1>
      <TodoForm addTodo={addTodo} />
      <button onClick={(e)=> {
        e.preventDefault();
        purgeCompleted();
      }}>Clear Completed</button>
      <TodoList state={state} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
