import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Jane", email: "jane@gmail.com" },
    { id: 3, name: "Jill", email: "jill@gmail.com" },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    addUserPrepare: {
      reducer(state, action) {
        state.users.push(action.payload);
      },
      prepare(name, email) {
        return {
          payload: { id: nanoid(), name, email },
        };
      },
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { adduser, addUserPrepare, setUsers } = usersSlice.actions;

export default usersSlice.reducer;

/** 
[
  { id: 1, name: "Jhon", email: "jjj@gmail.com" },
  { id: 2, name: "Anne", email: "aaa@gmail.com" },
  { id: 3, name: "Dan", email: "ddd@gmail.com" },
];

1. Display the users
2. Add a user 
3. Add user with prepare
*/