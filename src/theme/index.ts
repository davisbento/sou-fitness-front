import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';

export const colors = {
  error: red.A400,
  primaryLight: '#fff',
  buttonDefault: '#5850ec'
};

export const propsOverride = {
  MuiInput: {
    disableUnderline: true
  },
  MuiFilledInput: {
    disableUnderline: true
  },
  MuiInputLabel: {
    shrink: true
  }
};

export const themeOverride: Overrides = {
  MuiGrid: {
    container: {
      height: '100%'
    }
  },
  MuiTypography: {
    h1: {
      fontSize: 62
    },
    body1: {
      fontSize: 21
    }
  },
  MuiButton: {
    containedPrimary: {
      'backgroundColor': colors.buttonDefault,
      'color': colors.primaryLight,
      '&:hover': {
        backgroundColor: '#007db3'
      }
    },
    root: {
      padding: 16
    }
  },
  MuiFormControl: {
    root: {}
  },
  MuiFormLabel: {
    root: {
      color: '#fff',
      fontWeight: 500,
      fontSize: 19
    }
  },
  MuiSelect: {
    select: {
      '&:focus': {
        backgroundColor: colors.primaryLight
      }
    }
  },
  MuiInput: {
    root: {
      '&$error': {
        borderColor: colors.error
      }
    },
    input: {
      'borderRadius': 4,
      'backgroundColor': '#fff',
      'border': '1px solid #ced4da',
      'fontSize': 16,
      'padding': 12,
      'width': 'calc(100% - 24px)',
      'transition': 'border-color, box-shadow, 0.3s',
      '&:focus': {
        borderColor: colors.buttonDefault
      }
    },
    inputMultiline: {
      padding: 16,
      boxSizing: 'border-box',
      width: '100%',
      minHeight: 80
    },
    multiline: {
      padding: 0,
      minHeight: 80
    }
  }
};

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primaryLight
    },
    secondary: {
      main: '#ccc'
    },
    error: {
      main: colors.error
    },
    background: {
      default: '#000'
    }
  },
  spacing: 16,
  props: propsOverride,
  overrides: themeOverride
});

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#ccc'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  spacing: 16,
  props: propsOverride,
  overrides: themeOverride
});
