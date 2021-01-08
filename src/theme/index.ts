import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const themeDark = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#ccc'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#000'
    }
  }
});
