import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/tasksSlice'; 

const TaskList = ({ selectedDate }) => {
    const tasks = useSelector((state) => state.tasks.tasksByDate[selectedDate] || []); // Access tasks for the selected date
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Tasks for {selectedDate}</h3>
            {tasks.map((task) => (
                <div key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.name}
                    </span>
                    <button onClick={() => dispatch(editTask({ date: selectedDate, taskId: task.id, newName: prompt('Edit task:', task.name) }))}>Edit</button>
                    <button onClick={() => dispatch(deleteTask({ date: selectedDate, taskId: task.id }))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
