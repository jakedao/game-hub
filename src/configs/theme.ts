"use client";

import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // Customize other theme properties like palette, components, etc.
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          border: "1px solid #FEF5D5",
          color: "#FEF5D5",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#CCA251",
          color: "#E7DAA3",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "1px solid #FEF5D5",
          color: "#FEF5D5",
          "& .MuiInputBase-input": {
            color: "#FEF5D5",
          },
          "& .MuiInputLabel-root": {
            color: "#FEF5D5",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FEF5D5",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FEF5D5",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FEF5D5",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#FEF5D5",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#312014",
          border: "#FEF5D5",
          color: "#FEF5D5",

          "& .MuiTablePagination-root": {
            color: "#FEF5D5",

            "& .MuiTablePaginationActions-root": {
              color: "#FEF5D5",
            },
          },
        },
        columnHeader: {
          borderBottom: "1px solid #FEF5D5",
          backgroundColor: "#312014",
        },
        row: {
          "&:hover": {
            backgroundColor: "#3e220f",
          },
        },
        cell: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "0.5rem",
        },
      },
    },
  },
});

export default theme;
