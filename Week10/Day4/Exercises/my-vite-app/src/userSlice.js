import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { data: [], error: null },
  reducers: {
    fetchUserSuccess(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    fetchUserError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { fetchUserSuccess, fetchUserError } = userSlice.actions;
export default userSlice.reducer;
