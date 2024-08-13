
const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        // ... other cases
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        // ... other cases
        default:
            return state;
    }
};

export default tasksReducer;