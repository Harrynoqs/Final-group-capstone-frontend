import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMotorcycle = createAsyncThunk(
  'motorcycles/getMotorCycles',
  async (motorcycle) => {
    // values from Motorcycle model
    const { name, description, imageUrl, price, modelYear, engineType, fuelType } = motorcycle;
    try {
      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/twowheelers/new`,
        {
          name,
          description,
          image_url: imageUrl,
          price,
          model_year: modelYear,
          engine_type: engineType,
          fuel_type: fuelType
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
