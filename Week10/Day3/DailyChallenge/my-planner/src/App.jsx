import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CalendarComponent from './Calendar';
import TaskList from './redux/TaskList';
import AddTask from './redux/AddTask'; 

const App = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().toISOString().split('T')[0]); // Default to today

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Daily Planner</h1>
        <CalendarComponent selectedDay={selectedDay} onSelectDay={setSelectedDay} />
        <TaskList selectedDay={selectedDay} />
        <AddTask selectedDay={selectedDay} /> 
      </div>
    </Provider>
  );
};

export default App;