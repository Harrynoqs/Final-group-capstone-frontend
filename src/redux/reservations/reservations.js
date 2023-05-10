import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addReservation = createAsyncThunk(
  '',
  async (reservation) => {
    const { date, city, motorcycleId } = reservation;
    await axios.post(
      '',
      {
        date,
        city,
        motorcycle_id: motorcycleId,
      },
    );
    return reservation;
  },
);

export const getReservations = createAsyncThunk(
  '',
  async () => {
    try {
      const res = await axios.get('');
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const reservationSlice = createSlice({
  name: '',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(addReservation.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(getReservations.fulfilled, (state, { payload }) => {
        const reservation = {
          motorcycleId: payload.motorcycle_id,
          date: payload.date,
          city: payload.city,
        };
        state.push(reservation);
      });
  },
});

const { reducer } = reservationSlice;
export default reducer;
