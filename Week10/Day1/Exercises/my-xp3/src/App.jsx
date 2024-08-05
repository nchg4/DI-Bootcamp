import { useState, useReducer, useRef, act } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

export const initialState = {
  tasks: [],
};

/**action */
export const ADD_TASK = 'add_task';
export const DELETE_TASK = 'delete_task';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks];
      newTasks.push({
        id: uuidv4(),
        name: action.payload,
        active: true,
      });
      return {
        ...state,
        tasks: newTasks,
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef()

  const addTask =()=>{
    const value = inputRef.current.value;
    dispatch({
      type: ADD_TASK,
      payload: value,
    })
    inputRef.current.value = '';
  }

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  }

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#333',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  return (
    <>
      <div>
        <h2>Todo List</h2>
        <input placeholder='Add a task' ref={inputRef}/>
        <button style={buttonStyle} onClick={addTask}>Add</button>
      </div>
      <h2>List of tasks</h2>
      {
        state.tasks.map((task) => (
          <div key={task.id}>
            {task.name}
            <button style={buttonStyle} onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))
      }
    </>
  )
}

export default App