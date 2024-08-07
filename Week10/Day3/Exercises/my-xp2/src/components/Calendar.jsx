import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice'; // Import the addTask action

const Calendar = ({ selectedDate, setSelectedDate }) => {
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        if (taskName.trim()) {
            dispatch(addTask({ date: selectedDate, task: taskName })); // Dispatch the addTask action
            setTaskName('');
        }
    };

    return (
        <div>
            <h2>{selectedDate}</h2>
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

export default Calendar;
