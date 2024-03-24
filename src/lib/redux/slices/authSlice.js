import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.isLoggedIn = action.payload.state;
      state.userData = action.payload.data;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice;
