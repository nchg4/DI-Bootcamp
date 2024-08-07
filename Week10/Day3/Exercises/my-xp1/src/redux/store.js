import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Import the todo slice reducer

const store = configureStore({
    reducer: {
        todos: todoReducer, // Include the todo slice in the store
    },
});

export default store;