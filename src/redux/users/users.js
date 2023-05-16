import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'users/login',
  async (name) => {
    await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/login`,
      {
        name,
      },
    );
    return name;
  },
);

export const registerUser = createAsyncThunk(
  'users/register',
  async (name) => {
    await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/register`,
      {
        user: {
          name,
        },
      },
    );
    return name;
  },
);

const localUser = JSON.parse(localStorage.getItem('state'));

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : [],
    status: 'idle',
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.push(localUser || payload);
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user.push(payload);
      });
  },
});

const { reducer } = usersSlice;
export default reducer;
