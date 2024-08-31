import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
