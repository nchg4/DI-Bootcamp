import { configureStore, combineReducers } from "@reduxjs/toolkit";


import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/userSlice";

const appReducer = combineReducers({
  counter: counterReducer,
  usersReducer,
});


const store = configureStore({
  reducer: appReducer,
});
export default store;

// console.log(store.getState());

// store.dispatch({ type: "counter/increment" });

// console.log(store.getState());
