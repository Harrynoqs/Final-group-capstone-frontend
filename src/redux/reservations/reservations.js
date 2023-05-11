import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservation) => {
    const {
      date, city, duration, user, motorcycleId,
    } = reservation;
    await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/reservations/user/${reservation.user}`,
      {
        date_of_reservation: date,
        city,
        duration_of_test_drive: duration,
        user_id: user,
        twowheeler_id: motorcycleId,
      },
    );
    return reservation;
  },
);

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async (user) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/users/${user}/reservations}`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(addReservation.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(getReservations.fulfilled, (state, { payload }) => {
        const reservation = {
          date: payload.date_of_reservation,
          city: payload.city,
          duration: payload.duration_of_test_drive,
          user: payload.user_id,
          motorcycleId: payload.twowheeler_id,
        };
        state.push(reservation);
      });
  },
});

const { reducer } = reservationSlice;
export default reducer;
