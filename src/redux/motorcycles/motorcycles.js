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
        `${import.meta.env.VITE_API_ENDPOINT}/twowheelers`,
        {
          twowheeler: {
            name,
            description,
            image_url: imageUrl,
            price,
            model_year: modelYear,
            engine_type: engineType,
            fuel_type: fuelType,
          },
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
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
);

export const removeSingleMotorcycle = createAsyncThunk(
  'motorcycles/removeSingleMotorcycle',
  async (id) => {
    await axios.delete(`${import.meta.env.VITE_API_ENDPOINT}/twowheelers/${id}`);

    return { id };
  },
);

export const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState: [],
  reducers: {
    clearMotorcycles: (state) => {
      state.length = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addMotorcycle.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(getMotorcycles.fulfilled, (state, action) => {
        const ids = Object.keys(action.payload);
        ids.forEach((id) => {
          const motorcycle = {
            id: action.payload[id].id,
            name: action.payload[id].name,
            description: action.payload[id].description,
            imageUrl: action.payload[id].image_url,
            price: action.payload[id].price,
            modelYear: action.payload[id].model_year,
            engineType: action.payload[id].engine_type,
            fuelType: action.payload[id].fuel_type,
          };
          state.push(motorcycle);
        });
      })
      .addCase(removeSingleMotorcycle.fulfilled, (state, action) => {
        const filtered = state.filter(({ id }) => id !== action.payload.id);
        return filtered;
      });
  },
});

const { reducer } = motorcycleSlice;
export const { clearMotorcycles } = motorcycleSlice.actions;
export default reducer;
