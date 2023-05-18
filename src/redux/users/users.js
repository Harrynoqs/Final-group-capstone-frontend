import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { login } from '../../config';

export const loginUser = createAsyncThunk(
  'users/login',
  async (name, {rejectWithValue}) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/login`,
        {
          name,
        },
      );
      login(name);
      window.location.href = '/';
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'users/register',
  async (name) => {
    await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/register`,
        {
          name,
        },
    );
    login(name);
    window.location.href = '/';
    return name;
  },
);

const localUser = JSON.parse(localStorage.getItem('state'));

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    user: JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : [],
    status: '',
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.push(localUser || payload);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        // localStorage.removeItem('state');
        localStorage.clear();
        state.status = payload;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user.push(payload);
      })
  },
});

const { reducer } = usersSlice;
export default reducer;
