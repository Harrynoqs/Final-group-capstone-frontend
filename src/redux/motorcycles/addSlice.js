import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMotorCycles = createAsyncThunk(
  'motorcycles/getMotorCycles',
  async (motorcycle) => {
    // values from Motorcycle model
    const { id, name } = motorcycle;
    try {
      await axios.post(
        '',
        {
          id,
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
    builder.addCase(addMotorCycles.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
  },
});

const { reducer } = motorcycleSlice;
export default reducer;
