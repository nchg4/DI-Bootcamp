/** 
 [
[id: 1, name: 'John Doe', email: 'john@doe.com'],
[id: 2, name: 'Jane Doe', email: 'jane@doe.com'],
[id: 3, name: 'Jill Doe', email: 'jill@doe.com'],
]
1) Display the users 
2) Add a user 
3) Add user with prepare 
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        { id: 1, name: 'John Doe', email: 'john@doe.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@doe.com' },
        { id: 3, name: 'Jill Doe', email: 'jill@doe.com' },
    ],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        displayUsers: (state) => {
            return state.users; 
        },
        addUser: (state, action) => {
            state.users.push(action.payload); 
        },
        addUserWithPrepare: {
            reducer: (state, action) => {
                state.users.push(action.payload);
            },
            prepare: (name, email) => {
                return { payload: { id: Date.now(), name, email } }; 
            },
        },
    },
});

export const { displayUsers, addUser, addUserWithPrepare } = userSlice.actions;
export default userSlice.reducer;