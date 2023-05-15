import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/users';
import motorcycleReducer from './motorcycles/motorcycles';
import reservationReducer from './reservations/reservations';

const store = configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    reservation: reservationReducer,
    user: userReducer
  },
});

const handleChange = () => {
  let nextState = store.getState().user.user;
  console.log(nextState);
  if (nextState.length > 0) {
    const serializedState = JSON.stringify(nextState);
    localStorage.setItem('state', serializedState);
  }
}

export const unsubscribe = store.subscribe(() => {
  handleChange();
});

handleChange();

export default store;
