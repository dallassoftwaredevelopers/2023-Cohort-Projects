import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/User.types";
import { loginUserAsync, registerUserAsync } from "../../api/userApi";

interface UserState {
  currentUser: User | null;
  loading: boolean; // loading state to track the async action status
  error: string | null; // error state to track the async action error
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
      // Assuming registerUserAsync API function registers the user and returns the registered user data
      const registeredUser = await registerUserAsync(
        credentials.username,
        credentials.password
      );

      // Return the registered user data after successful registration or whatever
      return registeredUser;
    } catch (error) {
      // You can handle error cases here
      // For example, you can throw an error or return an alternative value
      // throw new Error("Registration failed");
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

      // Assuming the response contains the user data, including the username
      const user: User = response; // Make sure the response has the correct user data

      // Return the user data after successful login
      return user;
    } catch (error) {
      // You can handle error cases here
      // For example, you can throw an error or return an alternative value
      // throw new Error("Login failed");
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
