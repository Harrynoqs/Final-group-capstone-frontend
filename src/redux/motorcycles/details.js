import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSingleMotorcycle = createAsyncThunk(
  'motorcycles/getMotorcycleDetails',
  async (id) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/twowheelers/${id}`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const detailsSlice = createSlice({
  name: 'motorcycle-details',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(getSingleMotorcycle.fulfilled, (state, { payload }) => {
        state.push(payload);
      });
  },
});

const { reducer } = detailsSlice;
export default reducer;
