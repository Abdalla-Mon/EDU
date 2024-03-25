import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  role: "",
  data: {},
  emailConfirmed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.role = action.payload.role;
      state.data = action.payload.data;
      state.emailConfirmed = action.payload.emailConfirmed;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice;
