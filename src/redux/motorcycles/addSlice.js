import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMotorcycle = createAsyncThunk(
  'motorcycles/getMotorCycles',
  async (motorcycle) => {
    // values from Motorcycle model
    const { name } = motorcycle;
    try {
      await axios.post(
        '',
        {
          name,
        },
      );
      return motorcycle;
    } catch (err) {
      return err.message;
    }
  },
);

export const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState: [],
  extraReducers(builder) {
    builder.addCase(addMotorcycle.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
  },
});

const { reducer } = motorcycleSlice;
export default reducer;
