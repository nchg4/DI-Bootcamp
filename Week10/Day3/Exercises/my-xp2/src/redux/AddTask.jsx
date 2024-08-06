import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

const AddTask = ({ selectedDay }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ day: selectedDay, task }));
      setTask('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
