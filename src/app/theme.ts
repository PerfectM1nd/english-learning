import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5EA0FF',
      light: '#5EA0FF',
    },
    secondary: {
      main: '#ffcb14',
      light: '#A4A4A4'
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
      disabled: ''
    },
    error: {
      main: '#D32F2F'
    }
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#bbbbbb'
        },
        track: {
          opacity: 0.15,
          backgroundColor: '#000000',
          '$checked$checked + &': {
            opacity: 0.7,
            backgroundColor: '#fff'
          }
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  }
});
