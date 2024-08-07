import { fetchUserSuccess, fetchUserError } from './userSlice';

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserError('Failed to fetch user data'));
  }
};
