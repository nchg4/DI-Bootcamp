import { useState, useReducer, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

export const initialState = {
  tasks: [],
  filter: 'all',
};

export const ADD_TASK = 'add_task';
export const DELETE_TASK = 'delete_task';
export const EDIT_TASK = 'edit_task';
export const TOGGLE_TASK = 'toggle_task';
export const SET_FILTER = 'set_filter';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks];
      newTasks.push({
        id: uuidv4(),
        name: action.payload,
        completed: false,
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
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, name: action.payload.name } : task
        )
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef();
  const editInputRef = useRef();

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

  const startEditing = (id) => {
    setEditingId(id);
  }

  const finishEditing = () => {
    if (editingId) {
      const newName = editInputRef.current.value;
      dispatch({
        type: EDIT_TASK,
        payload: { id: editingId, name: newName },
      });
      setEditingId(null);
    }
  }

  const toggleTask = (id) => {
    dispatch({
      type: TOGGLE_TASK,
      payload: id,
    });
  }

  const setFilter = (filter) => {
    dispatch({
      type: SET_FILTER,
      payload: filter,
    });
  }

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          placeholder='Add a task'
          ref={inputRef}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <div className="filter-container">
        {['all', 'active', 'completed'].map((filter) => (
          <button
            key={filter}
            className={`filter-button ${state.filter === filter ? 'active' : ''}`}
            onClick={() => setFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      {filteredTasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            className="task-checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {editingId === task.id ? (
            <input
              className="edit-input"
              ref={editInputRef}
              defaultValue={task.name}
              onBlur={finishEditing}
              onKeyPress={(e) => e.key === 'Enter' && finishEditing()}
            />
          ) : (
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.name}
            </span>
          )}
          <button className="action-button" onClick={() => startEditing(task.id)}>Edit</button>
          <button className="action-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App