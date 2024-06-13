"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
};

export const UiLayout = ({ children }: Props) => {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1340,
        xl: 1536,
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#20A6A2",
        light: "#e2f5f5",
        dark: "#DE3F43",
        contrastText: "#fff",
      },
      secondary: {
        main: "#db922a",
        light: "#8A92A6",
        dark: "#000",
        contrastText: "#fff",
      },
      info: {
        main: "#db922a",
        light: "#8A92A6",
        dark: "#000",
        contrastText: "#fff",
      },
      error: {
        main: "#ed1c24",
        light: "rgba(225, 37, 27, 0.2)",
        dark: "",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "inherit",
      h1: {
        fontSize: "3rem",
        fontWeight: "700",
      },
      h2: {
        fontSize:
          "min(max(2.2rem, calc(1rem + ((1vw - 7.68px) * 0.6944))), 2.5rem)",
        fontWeight: "700",
      },
      h3: {
        fontSize:
          "min(max(2rem, calc(1rem + ((1vw - 7.68px) * 0.6944))), 2.3rem)",
        fontWeight: "700",
      },
      h4: {
        fontSize:
          "min(max(.9rem, calc(1rem + ((1vw - 7.68px) * 0.6944))), 1.2rem)",
        fontWeight: "700",
      },
      h5: {
        fontSize:
          "min(max(.8rem, calc(0.9rem + ((1vw - 7.68px) * 0.6944))), 1rem)",
        fontWeight: "700",
      },
      h6: {
        fontSize:
          "min(max(.7rem, calc(0.9rem + ((1vw - 7.68px) * 0.6944))), 1rem)",
        fontWeight: "500",
      },
      body1: {
        fontSize: "0.98rem",
      },
      body2: {
        fontSize: "0.8rem",
      },
      subtitle1: {
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: "16px",
        lineHeight: "28px",
        fontWeight: 400,
      },
      caption: {
        fontSize: "15px",
        lineHeight: "33px",
        fontWeight: 500,
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            width: "100%",
            margin: "auto",
            padding: "0 .8rem",
            maxWidth: "1340px",
            ".MuiContainer-root": {
              padding: "0",
            },
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)",
            borderRadius: "10px",
          },
        },
      },
    },
  });

  return (
    <div>
      <CssBaseline />
      <ToastContainer position="top-right" />
      <ToastContainer />

      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};
