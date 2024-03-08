"use client";
import { makeStore } from "@/lib/redux/store/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});
export default function ReduxProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={makeStore}>{children}</Provider>
    </ThemeProvider>
  );
}
