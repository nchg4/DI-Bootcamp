import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './tasksSlice';

const TaskList = ({ selectedDay }) => {
  const tasks = useSelector((state) => state.tasks[selectedDay] || []);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskIndex) => {
    dispatch(deleteTask({ day: selectedDay, taskIndex }));
  };

  return (
    <div className="task-list">
      <h2>Tasks for {selectedDay}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
