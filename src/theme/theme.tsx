"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EE10B0",
      light: "#F24FC3",
      dark: "#B70C86",
      contrastText: "#FFFFFF",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          justifyContent: "flex-start",
        },
        contained: {
          color: "#fff",
          backgroundColor: "#EE10B0",
        },
        text: {
          color: "#fff",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "40px",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
