import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import FallingEmojis from 'react-falling-emojis';

// import NavBar from './components/NavBar';
import Header from './components/Header';
import Options from './components/Options';
import ComponentView from './components/ComponentView';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';
import ReactFallingEmojisProps from './interfaces/ReactFallingEmojisProps';
import useSlideUpAnimation from './hooks/useSlideUpAnimation';
import useStyles from './hooks/useStyles';

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
  const classes = useStyles();
  const theme = useTheme();

  useSlideUpAnimation({
    targets: `.${classes.main}`,
    from: 400,
    to: 0,
    duration: 1.25
  });

  // // TODO: Options and CopmonentView should be next to each other -> need to improve
  // TODO: clean-up in Opctions component
  // TODO: CopmonentView still need animation
  // TODO: style update (clean-up)
  // TODO: the markdown part and the options section could be in two column and if the width is not enough then wrap it...
  // TODO: Demo site route by versions
  // TODO: update to newer react version

  return (
    <ThemeProvider theme={theme}>
      <Header
        buttonLabel={fallingEnabled ? 'Disable falling' : 'Enable falling'}
        onEnable={() => setFallingEnabled((currentValue) => !currentValue)}
      />
      <main className={classes.main}>
        <Options
          fallingEmojisProps={fallingEmojisProps}
          onUpdate={(e) => setFallingEmojisProps(e)}
        />
        <ComponentView fallingEmojisProps={fallingEmojisProps} />
      </main>
      <Footer />
      <FallingEmojis disable={!fallingEnabled} {...fallingEmojisProps} />
    </ThemeProvider>
  );
};

export default App;
