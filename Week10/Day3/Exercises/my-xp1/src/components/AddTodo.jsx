import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice'; // Import the addTodo action

const AddTodo = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (taskName.trim()) {
            dispatch(addTodo(taskName)); // Dispatch the addTodo action
            setTaskName('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add Task</button>
        </div>
    );
};

export default AddTodo;