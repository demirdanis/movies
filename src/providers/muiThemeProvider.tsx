"use client";

import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "../mui/themes";

export default function ClientThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
