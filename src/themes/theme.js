import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    orange: {
      default: '#fd6a02', //'#f05e23'  //'#ff6600' '#fd7e14'
      hover: '#fd9449'
    }
  },
});

export default theme;
