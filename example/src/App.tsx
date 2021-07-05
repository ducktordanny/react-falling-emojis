import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import FallingEmojis from 'react-falling-emojis';

// import NavBar from './components/NavBar';
import Header from './components/Header';
import Options from './components/Options';
import ComponentView from './components/ComponentView';
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

  // TODO: Options and CopmonentView should be next to each other
  // TODO: clean-up in Opctions component
  // TODO: CopmonentView still need animation
  // TODO: style update (clean-up)
  // TODO: the markdown part and the options section could be in two column and if the width is not enough then wrap it...
  // TODO: Demo site route by versions
  // TODO: update to newer react version

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
      <main style={{ display: 'flex', alignItems: 'center' }}>
        <Options
          fallingEmojisProps={fallingEmojisProps}
          onUpdate={(e) => handleOptionsUpdate(e)}
        />
        <ComponentView fallingEmojisProps={fallingEmojisProps} />
      </main>
      <Footer />
      <FallingEmojis disable={!fallingEnabled} {...fallingEmojisProps} />
    </ThemeProvider>
  );
};

export default App;
