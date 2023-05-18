import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/all',
  async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/users/index`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const fetchSlice = createSlice({
  name: 'fetchUsers',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.push(payload);
      });
  },
});

const { reducer } = fetchSlice;
export default reducer;
