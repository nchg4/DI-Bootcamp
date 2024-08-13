import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleEdit = useCallback(() => {
        dispatch({ type: 'EDIT_TASK', payload: task.id }); // Dispatch edit action
    }, [dispatch, task.id]);

    const handleComplete = useCallback(() => {
        dispatch({ type: 'COMPLETE_TASK', payload: task.id }); // Dispatch complete action
    }, [dispatch, task.id]);

    return (
        <div>
            <span>{task.name}</span>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleComplete}>Complete</button>
        </div>
    );
};

export default TaskItem;