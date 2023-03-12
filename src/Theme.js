import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f7f5ff',
    },
    secondary: {
      main: '#441256',
    },
    tertiary: {
      main: '#cb9dd9',
    },
    background: {
      default: '#f7f5ff',
    },
    error: {
      main: '#f10909',
    },
    bottomBackground:{
    main:"#cec2e3",
    }
  },
});

export default theme;