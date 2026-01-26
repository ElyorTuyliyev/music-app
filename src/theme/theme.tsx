"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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
        contained: {
          color: "#fff",
          backgroundColor: "#EE10B0",
          textTransform: "initial",
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
