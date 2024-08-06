import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CalendarComponent from './Calendar';
import TaskList from './redux/TaskList';
import AddTask from './redux/AddTask'; 
import './App.css';

const App = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]);
  const [showAllTasks, setShowAllTasks] = useState(false); // State to manage showing all tasks

  const handleSelectDay = (date) => {
    setSelectedDay(date.toISOString().split('T')[0]); // Update selected day
    setShowAllTasks(false); // Reset to show tasks for the selected day
  };

  const handleShowAllTasks = () => {
    setShowAllTasks(true); // Set state to show all tasks
  };

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Daily Planner</h1>
        <div className="calendar">
          <CalendarComponent selectedDay={selectedDay} onSelectDay={handleSelectDay} />
        </div>
        <div className="task-list">
          <TaskList selectedDay={selectedDay} showAllTasks={showAllTasks} /> {/* Pass showAllTasks prop */}
        </div>
        <div className="add-task">
          <AddTask selectedDay={selectedDay} /> 
        </div>
        <button onClick={handleShowAllTasks} className="show-all-tasks-button">Show All Tasks</button> {/* Button to show all tasks */}
      </div>
    </Provider>
  );
};

export default App;