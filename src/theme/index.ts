import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { Overrides } from '@material-ui/core/styles/overrides';

export const colors = {
  error: red.A400,
  primaryLight: '#fff'
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
  MuiTypography: {
    h1: {
      fontSize: '4rem'
    }
  },
  MuiButton: {
    contained: {
      boxShadow: 'none'
    }
  },
  MuiInput: {
    root: {
      'padding': 0,
      ['label + &' as any]: {
        marginTop: '0.5rem'
      },
      ['& div + input' as any]: {
        borderRadius: 4
      },
      '&$error': {
        borderColor: colors.error
      }
    },
    formControl: {
      padding: 0,
      ['label + &' as any]: {
        marginTop: '0.5rem'
      }
    },
    input: {
      'borderRadius': 4,
      'backgroundColor': 'white',
      'border': '1px solid #ced4da',
      'fontSize': 16,
      'padding': '9px 16px 8px 8px',
      'width': 'calc(100% - 24px)',
      'transition': 'border-color, box-shadow, 0.3s',
      '&:focus': {
        borderColor: colors.primaryLight,
        zIndex: 10
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
  },
  MuiFilledInput: {
    root: {
      'backgroundColor': '#f3f3f3',
      'padding': 0,
      ['label + &' as any]: {
        marginTop: '0.5rem'
      },
      ['& div + input' as any]: {
        borderRadius: '0 4px 4px 0'
      },
      '&$error': {
        borderColor: colors.error
      }
    },
    formControl: {
      padding: 0,
      ['label + &' as any]: {
        marginTop: '0.5rem'
      }
    },
    input: {
      'borderRadius': 4,
      'backgroundColor': '#f3f3f3',
      'border': '1px solid #ced4da',
      'fontSize': 16,
      'padding': '9px 16px 8px 8px',
      'width': 'calc(100% - 24px)',
      'transition': 'border-color, box-shadow, 0.3s',
      '&:focus': {
        borderColor: colors.primaryLight,
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        zIndex: 10
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
  }
});
