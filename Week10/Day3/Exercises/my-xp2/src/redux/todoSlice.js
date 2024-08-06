import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [], // Initial state with an array of todos
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: Date.now(), name: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed; // Toggle completion status
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload); // Remove todo
        },
    },
});

// Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions; // Ensure 'removeTodo' is exported

// Export reducer
export default todoSlice.reducer;