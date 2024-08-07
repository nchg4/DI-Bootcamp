import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Import the tasks slice reducer

const store = configureStore({
    reducer: {
        tasks: tasksReducer, // Include the tasks slice in the store
    },
});

export default store;
