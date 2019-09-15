import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6a1b9a'
    },
    secondary: {
      main: '#f06292'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fcfbf2'
    }
  }
});

export default theme;
