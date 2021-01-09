import { createMuiTheme } from "@material-ui/core/styles";
import { blue, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export default theme;
