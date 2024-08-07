import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <Provider store={store}>
            <div className="app">
                <h1>Daily Planner</h1>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
                <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <TaskList selectedDate={selectedDate} />
            </div>
        </Provider>
    );
};

export default App;