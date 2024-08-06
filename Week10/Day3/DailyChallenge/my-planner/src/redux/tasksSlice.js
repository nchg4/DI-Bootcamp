import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state[day]) {
        state[day] = [];
      }
      state[day].push(task);
    },
    editTask: (state, action) => {
      const { day, taskId, updatedTask } = action.payload;
      const tasks = state[day];
      if (tasks) {
        const index = tasks.findIndex(task => task.id === taskId);
        if (index !== -1) tasks[index] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      const tasks = state[day];
      if (tasks) {
        state[day] = tasks.filter(task => task.id !== taskId);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;