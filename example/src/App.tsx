import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import FallingEmojis from 'react-falling-emojis';

// import NavBar from './components/NavBar';
import Header from './components/Header/index';
import Options from './components/Options';
import ReactFallingEmojisProps from './interfaces/ReactFallingEmojisProps';
// import useStyles from './hooks/useStyles';

const App = () => {
  const [fallingEnabled, setFallingEnabled] = useState<boolean>(false);
  const [fallingEmojisProps, setFallingEmojisProps] =
    useState<ReactFallingEmojisProps>({
      emojis: ['⚽️', '🦆', '🎉', '👻'],
      shake: false,
      reverse: false,
      repeat: -1,
      density: 5,
      speed: 10,
      size: 30,
      opacity: 1
    });
  // const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      // type: 'dark',
      primary: {
        main: '#E9B84C'
      },
      secondary: {
        main: '#B82949'
      },
      text: {
        primary: '#FFF',
        secondary: '#9a9a9a'
      }
    },
    typography: {
      fontFamily: [`'Barlow', sans-serif`].join(',')
    }
  });

  // ! TextField value is white
  // ! TextField 'value' of null issue...
  // TODO: add github repo link button
  // TODO: add notistack for notifications on copying something to the clipboard
  // TODO: make footer
  // TODO: opportunity to copy current settings (Button name: [Copy component with current settings]?)

  const handleEnabling = () => {
    setFallingEnabled((currentValue) => !currentValue);
  };

  const handleOptionsUpdate = (e: ReactFallingEmojisProps) => {
    setFallingEmojisProps(e);
  };

  useEffect(() => {
    console.log(fallingEmojisProps);
  }, [fallingEmojisProps]);

  return (
    <ThemeProvider theme={theme}>
      <Header
        buttonLabel={fallingEnabled ? 'Disable falling' : 'Enable falling'}
        onEnable={handleEnabling}
      />
      <Options
        fallingEmojisProps={fallingEmojisProps}
        onUpdate={(e) => handleOptionsUpdate(e)}
      />
      <FallingEmojis disable={!fallingEnabled} {...fallingEmojisProps} />
    </ThemeProvider>
  );
};

export default App;
