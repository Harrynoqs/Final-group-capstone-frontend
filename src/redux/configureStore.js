import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/users';
import motorcycleReducer from './motorcycles/motorcycles';
import motorcycleDetailsReducer from './motorcycles/details';
import reservationReducer from './reservations/reservations';


const store = configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    motorcycleDetails: motorcycleDetailsReducer,
    reservation: reservationReducer,
    user: userReducer,
  },
});

const handleChange = () => {
  const nextState = store.getState().user.user;
  if (nextState.length > 0) {
    const serializedState = JSON.stringify(nextState);
    localStorage.setItem('state', serializedState);
  }
};

export const unsubscribe = store.subscribe(() => {
  handleChange();
});

handleChange();

export default store;
