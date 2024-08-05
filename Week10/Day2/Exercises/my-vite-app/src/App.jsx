import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTask,deleteTask,editTask,toggleTask,setFilter,} from './redux/actions';
import './App.css';

function App() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef();
  const editInputRef = useRef();

  const handleAddTask = () => {
    const value = inputRef.current.value;
    if (value.trim()) {
      dispatch(addTask(value));
      inputRef.current.value = '';
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleStartEditing = (id) => {
    setEditingId(id);
  };

  const handleFinishEditing = () => {
    if (editingId) {
      const newName = editInputRef.current.value;
      dispatch(editTask(editingId, newName));
      setEditingId(null);
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          placeholder="Add a task"
          ref={inputRef}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <div className="filter-container">
        {['all', 'active', 'completed'].map((filter) => (
          <button
            key={filter}
            className={`filter-button ${filter === filter ? 'active' : ''}`}
            onClick={() => handleSetFilter(filter)}
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
            onChange={() => handleToggleTask(task.id)}
          />
          {editingId === task.id ? (
            <input
              className="edit-input"
              ref={editInputRef}
              defaultValue={task.name}
              onBlur={handleFinishEditing}
              onKeyPress={(e) => e.key === 'Enter' && handleFinishEditing()}
            />
          ) : (
            <span className={`task-text ${task.completed ? 'completed' : ''}`}>
              {task.name}
            </span>
          )}
          <button className="action-button" onClick={() => handleStartEditing(task.id)}>
            Edit
          </button>
          <button className="action-button" onClick={() => handleDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;