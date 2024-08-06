import React, { useState } from 'react';
import { connect } from 'react-redux';
import TaskDisplay from './TaskDisplay.jsx';
import TaskForm from './TaskForm.jsx';
import { addTask, deleteTask } from '../store.js'; // Import action creators

const Planner = ({ tasks, addTask, deleteTask }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleAdd = (newTask) => {
    if (selectedDate) {
      addTask(selectedDate, newTask); // Dispatch addTask action
    } else {
      alert("Please select a date for the task.");
    }
  };

  const handleDelete = (index) => {
    deleteTask(selectedDate, index); // Dispatch deleteTask action
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <TaskForm onAdd={handleAdd} />
      <TaskDisplay tasks={tasks[selectedDate] || []} onDelete={handleDelete} />
    </div>
  );
};

// Map state to props
const mapStateToProps = (state) => ({
  tasks: state,
});

// Map dispatch to props
const mapDispatchToProps = {
  addTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Planner);