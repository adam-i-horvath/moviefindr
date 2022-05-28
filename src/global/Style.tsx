import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

export const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#ddd',
          boxShadow: 'none',
          color: '#000',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#b2b2b2',
    },
    primary: {
      main: teal[500],
    },
  },
});
