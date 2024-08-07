import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksByDate: {}, // Object to hold tasks for each date
    },
    reducers: {
        addTask: (state, action) => {
            const { date, task } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push({ id: Date.now(), name: task, completed: false });
        },
        editTask: (state, action) => {
            const { date, taskId, newName } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const task = tasks.find(task => task.id === taskId);
                if (task) {
                    task.name = newName; // Update task name
                }
            }
        },
        deleteTask: (state, action) => {
            const { date, taskId } = action.payload;
            state.tasksByDate[date] = state.tasksByDate[date].filter(task => task.id !== taskId); // Remove task
        },
    },
});

// Export actions
export const { addTask, editTask, deleteTask } = tasksSlice.actions;

// Export reducer
export default tasksSlice.reducer;
