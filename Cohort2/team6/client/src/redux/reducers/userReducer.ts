import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User.types";
import { loginUserAsync, registerUserAsync } from "../../api/userApi";

interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const registerUserAsyncThunk = createAsyncThunk(
  "user/registerAsync",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const registeredUser = await registerUserAsync(
        credentials.username,
        credentials.password
      );
      // return whatever we decide on returning TBD
      return registeredUser;
    } catch (error) {
      return thunkAPI.rejectWithValue("Registration failed");
    }
  }
);

export const loginUserAsyncThunk = createAsyncThunk(
  "user/loginAsync",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await loginUserAsync(
        credentials.username,
        credentials.password
      );

      const user: User = response;
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Login failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserAsyncThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUserAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUserAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAsyncThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUserAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;
