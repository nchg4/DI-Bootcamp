import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./reducer";
// import { tasksReducer } from "./tasksReducer"; // Uncomment and define if you have a tasks reducer

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // tasks: tasksReducer // Uncomment if tasksReducer is defined
    },
});

export default store;