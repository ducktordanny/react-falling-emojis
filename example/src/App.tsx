import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import FallingEmojis from 'react-falling-emojis';

// import NavBar from './components/NavBar';
import Header from './components/Header';
import Options from './components/Options';
import Footer from './components/Footer';
import ReactFallingEmojisProps from './interfaces/ReactFallingEmojisProps';

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
        primary: '#333',
        secondary: '#9a9a9a'
      }
    },
    typography: {
      fontFamily: [`'Barlow', sans-serif`].join(',')
    }
  });

  // TODO: default density could be 5
  // TODO: opportunity to copy current settings (Button name: [Copy component with current settings]?) => https://www.npmjs.com/package/react-markdown

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
      <Footer />
      <FallingEmojis disable={!fallingEnabled} {...fallingEmojisProps} />
    </ThemeProvider>
  );
};

export default App;
