import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface DataState {
  users: User[];
}

const initialState: DataState = {
  users: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = dataSlice.actions;
export default dataSlice.reducer;
