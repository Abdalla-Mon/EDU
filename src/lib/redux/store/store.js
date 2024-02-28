import { configureStore } from "@reduxjs/toolkit";
import  authSlice from "../slices/authSlice";

export const makeStore = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

// export const wrapper = createWrapper(makeStore);
