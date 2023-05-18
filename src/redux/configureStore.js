import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/users';
import motorcycleReducer from './motorcycles/motorcycles';
import motorcycleDetailsReducer from './motorcycles/details';
import reservationReducer from './reservations/reservations';
import fetchUsersReducer from './users/fetch';

const store = configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    motorcycleDetails: motorcycleDetailsReducer,
    reservation: reservationReducer,
    user: userReducer,
    allUsers: fetchUsersReducer,
  },
});

export default store;
