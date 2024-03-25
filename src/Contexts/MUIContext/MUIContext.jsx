"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1AB69D", // Your primary color
    },
    secondary: {
      main: "#EE4A62", // Your secondary color
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
export default function MUIContextProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
