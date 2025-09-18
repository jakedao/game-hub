"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiThemeProvider from "./MuiThemeProvider";

type TOwnProps = {
  children?: React.ReactNode;
};

const AppProvider = (props: TOwnProps) => {
  const { children } = props;
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default AppProvider;
