import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/addSlice';

const store = configureStore({
  reducer: { motorcycle: motorcycleReducer },
});

export default store;
