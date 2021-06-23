import React, { useState } from 'react';
import FallingEmojis from 'react-falling-emojis';

import NavBar from './components/NavBar';
import Options from './components/Options';
import ReactFallingEmojisProps from './interfaces/ReactFallingEmojisProps';
import useStyles from './hooks/useStyles';

const App = () => {
  const [fallingEnabled, setFallingEnabled] = useState<boolean>(false); // * by default it's gonna be false
  const classes = useStyles();

  const handleEnabling = () => {
    setFallingEnabled((currentValue) => !currentValue);
  };

  const handleOptionsUpdate = (e: ReactFallingEmojisProps) => {
    console.log(e);
  };

  // TODO: EmojiInput tip label for emojis (Windows and macOS shortcut)

  return (
    <div className={classes.root}>
      <NavBar
        buttonName={fallingEnabled ? 'Disable falling' : 'Enable falling'}
        onClick={handleEnabling}
      />
      <Options onUpdate={(e) => handleOptionsUpdate(e)} />
      <FallingEmojis
        emojis={['⚽️', '🦆', '🎉', '👻']}
        density={10}
        shake
        disable={!fallingEnabled}
      />
    </div>
  );
};

export default App;
