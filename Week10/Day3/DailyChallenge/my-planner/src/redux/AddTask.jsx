import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

const AddTask = ({ selectedDay }) => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      const newTask = { id: Date.now(), name: taskName };
      dispatch(addTask({ day: selectedDay, task: newTask }));
      setTaskName('');
    }
  };

  return (
    <div className="add-task">
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;