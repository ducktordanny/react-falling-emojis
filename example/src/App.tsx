import React, { useState } from 'react';
import FallingEmojis from 'react-falling-emojis';

import NavBar from './components/NavBar';
import Options from './components/Options';
import ReactFallingEmojisProps from './interfaces/ReactFallingEmojisProps';
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
      size: 30
    });
  const classes = useStyles();

  const handleEnabling = () => {
    setFallingEnabled((currentValue) => !currentValue);
  };

  const handleOptionsUpdate = (e: ReactFallingEmojisProps) => {
    setFallingEmojisProps(e);
  };

  // TODO: EmojiInput tip label for emojis (Windows and macOS shortcut)

  return (
    <div className={classes.root}>
      <NavBar
        buttonName={fallingEnabled ? 'Disable falling' : 'Enable falling'}
        onClick={handleEnabling}
      />
      <Options
        fallingEmojisProps={fallingEmojisProps}
        onUpdate={(e) => handleOptionsUpdate(e)}
      />
      <FallingEmojis
        emojis={fallingEmojisProps.emojis}
        shake={fallingEmojisProps.shake}
        reverse={fallingEmojisProps.reverse}
        repeat={fallingEmojisProps.repeat}
        density={fallingEmojisProps.density}
        speed={fallingEmojisProps.speed}
        size={fallingEmojisProps.size}
        disable={!fallingEnabled}
      />
    </div>
  );
};

export default App;
