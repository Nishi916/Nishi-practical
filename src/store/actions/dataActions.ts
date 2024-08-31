import { AppDispatch } from '../index';
import axios from 'axios';
import { setUsers } from '../slice/dataSlice';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=1');
    dispatch(setUsers(response.data.data));
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};
