import { configureStore } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/motorcycles';
import reservationReducer from './reservations/reservations';

const store = configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    reservation: reservationReducer,
  },
});

export default store;
