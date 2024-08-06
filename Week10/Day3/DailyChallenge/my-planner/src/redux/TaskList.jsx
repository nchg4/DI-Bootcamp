import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = ({ selectedDay }) => {
  const tasks = useSelector((state) => state.tasks[selectedDay] || []);

  return (
    <div className="task-list">
      <h2>Tasks for {selectedDay}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;