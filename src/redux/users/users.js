import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  'users/login',
  async (name) => {
    await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/login`,
      {
        name: name,
      }
    )
    return name;
  }
)

export const signUpUser = createAsyncThunk(
  'users/register',
  async (name) => {
    await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/register`,
        {
          name: name,
        }
      )
      return name;
  }
)

const localUser = JSON.parse(localStorage.getItem('state'));

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: JSON.parse(localStorage.getItem('state')) ? JSON.parse(localStorage.getItem('state')) : [],
        status: 'idle'
    },
    extraReducers(builder) {
      builder
        .addCase(loginUser.fulfilled, (state, { payload }) => {
          const user = {
            name: localUser? localUser?.name : payload.name
          };
          state.push(user);
        })
        .addCase(register.fulfilled, (state, { payload }) => {
          state.push(payload);
        });
    },
})

const { reducer } = usersSlice;
export default reducer;