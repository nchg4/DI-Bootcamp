import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, deleteTask } from './tasksSlice';

const TaskList = ({ selectedDay, showAllTasks }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks); // Get all tasks from the store

  // Get tasks for the selected day or all tasks if showAllTasks is true
  const tasksToDisplay = showAllTasks 
    ? Object.entries(tasks).flatMap(([day, tasks]) => tasks) // Flatten all tasks into a single array
    : tasks[selectedDay] || []; // Get tasks for the selected day

  const handleEditTask = (taskId) => {
    const taskName = prompt("Edit task name:");
    if (taskName) {
      const updatedTask = { id: taskId, name: taskName };
      dispatch(editTask({ day: selectedDay, taskId, updatedTask }));
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ day: selectedDay, taskId }));
  };

  return (
    <div>
      {tasksToDisplay.length > 0 ? (
        tasksToDisplay.map(task => (
          <div key={task.id} className="task">
            <span>{task.name}</span>
            <button onClick={() => handleEditTask(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>No tasks available.</div>
      )}
    </div>
  );
};

export default TaskList;