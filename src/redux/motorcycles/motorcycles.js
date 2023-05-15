import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMotorcycle = createAsyncThunk(
  'motorcycles/addMotorCycles',
  async (motorcycle) => {
    // values from Motorcycle model
    const {
      name, description, imageUrl, price, modelYear, engineType, fuelType,
    } = motorcycle;
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
          fuel_type: fuelType,
        },
      );
      return motorcycle;
    } catch (err) {
      return err.message;
    }
  },
);

export const getMotorcycles = createAsyncThunk(
  'motorcycles/getMotorCycles',
  async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/twowheelers`);
      return res.data;
    } catch (err) {
      return err.message;
    }
  },
)


export const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState: [],
  extraReducers(builder) {
    builder.
    addCase(addMotorcycle.fulfilled, (state, { payload }) => {
      state.push(payload);
    })
    .addCase(getMotorcycles.fulfilled, (state, action) => {
      const ids = Object.keys(action.payload);
      ids.forEach((id) => {
        const motorcycle = {
          name: action.payload[id].name,
          description: action.payload[id].description,
          imageUrl: action.payload[id].image_url,
          price: action.payload[id].price,
          modelYear: action.payload[id].model_year,
          engineType: action.payload[id].engine_type,
          fuelType: action.payload[id].fuel_type,
        }
        state.push(motorcycle);
      })
    })
  },
});

const { reducer } = motorcycleSlice;
export default reducer;
