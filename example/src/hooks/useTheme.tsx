import { createMuiTheme } from '@material-ui/core';

const useTheme = () =>
  createMuiTheme({
    palette: {
      // type: 'dark',
      primary: {
        main: '#E9B84C'
      },
      secondary: {
        main: '#B82949'
      },
      text: {
        primary: '#333',
        secondary: '#9a9a9a'
      }
    },
    typography: {
      fontFamily: `'Barlow', sans-serif`
    }
  });

export default useTheme;
