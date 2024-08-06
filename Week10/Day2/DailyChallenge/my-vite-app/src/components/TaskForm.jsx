import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onAdd(task); // Call the onAdd function passed from Planner
      setTask(''); // Clear the input field
    } else {
      alert("Please enter a task."); // Alert if no task is entered
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;