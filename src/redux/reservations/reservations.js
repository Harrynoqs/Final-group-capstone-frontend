import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservation) => {
    const {
      date, city, duration, motorcycleId, userId,
    } = reservation;
    await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/reservations/user/${reservation.userId}`,
      {
        date_of_reservation: date,
        city,
        duration_of_test_drive: duration,
        twowheeler_id: motorcycleId,
        user_id: userId,
      },
    );
    return reservation;
  },
);

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/reservations/index`);
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
        state.push(payload);
      });
  },
});

const { reducer } = reservationSlice;
export default reducer;
