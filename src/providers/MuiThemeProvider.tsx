import theme from "@/configs/theme";
import { ThemeProvider } from "@mui/material";

type TOwnProps = {
  children?: React.ReactNode;
};
const MuiThemeProvider = (props: TOwnProps) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
