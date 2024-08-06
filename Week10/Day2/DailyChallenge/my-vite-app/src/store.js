import { createStore } from 'redux';

const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Action creators
export const addTask = (date, task) => ({
  type: ADD_TASK,
  payload: { date, task }
});

export const editTask = (date, taskId, newTask) => ({
  type: EDIT_TASK,
  payload: { date, taskId, newTask }
});

export const deleteTask = (date, taskId) => ({
  type: DELETE_TASK,
  payload: { date, taskId }
});

const initialState = {};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { date, task } = action.payload;
      return {
        ...state,
        [date]: [...(state[date] || []), task]
      };
    }
    case EDIT_TASK: {
      const { date, taskId, newTask } = action.payload;
      return {
        ...state,
        [date]: state[date].map((task, index) =>
          index === taskId ? newTask : task
        )
      };
    }
    case DELETE_TASK: {
      const { date, taskId } = action.payload;
      return {
        ...state,
        [date]: state[date].filter((_, index) => index !== taskId)
      };
    }
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

export default store;