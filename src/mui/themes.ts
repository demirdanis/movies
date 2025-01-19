import { ThemeOptions, createTheme } from "@mui/material";

const baseTheme: ThemeOptions = {
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: `"Roboto", sans-serif`,

    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: 0.15,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "20.02px",
      letterSpacing: 0.17,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: 0.15,
    },

    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "21.98px",
      letterSpacing: 0.1,
    },

    overline: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
      letterSpacing: 0.1,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "19.92px",
      letterSpacing: 0.4,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "28.8px",
      letterSpacing: 0.15,
    },
    h5: {
      fontFamily: "Inter-Regular",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "30.68px",
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: 28,
      fontWeight: 400,
      lineHeight: "39.52px",
      letterSpacing: 0.25,
    },
    h3: {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: "56.02px",
      letterSpacing: 0.25,
    },
    h2: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: "72px",
      letterSpacing: -0.5,
    },
    h1: {
      fontSize: 32,
      fontWeight: 300,
      lineHeight: "112px",
      letterSpacing: -1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ":root": {
          ".MuiDataGrid-root": {
            padding: "8px",
          },

          ".MuiDataGrid-panel .MuiDataGrid-paper": {
            padding: "16px 8px 8px 8px",
            marginTop: "-8px",
            borderRadius: "8px",
          },

          ".MuiDataGrid-filterForm": {
            display: "flex",
            gap: "16px",
            alignItems: "center",
            "&ColumnInput": {
              color: "var(--primary-main)",
            },
          },

          ".MuiDataGrid-row": {
            width: "100%",
            minHeight: "64px !important",
            cursor: "pointer",
          },

          ".MuiDataGrid-virtualScrollerContent": {
            minHeight: `200px`,
          },

          ".MuiDataGrid-cell": {
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "8px 10px",
            "&:focus": {
              outline: "transparent",
            },
          },
        },
      },
    },
  },
};

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "light",
  },
  components: {
    ...baseTheme.components,
  },
});
