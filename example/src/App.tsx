import React, { useState } from 'react';
import FallingEmojis from 'react-falling-emojis';

import NavBar from './components/NavBar';
import Options from './components/Options';
import useStyles from './hooks/useStyles';

const App = () => {
  const [fallingEnabled, setFallingEnabled] = useState<boolean>(false); // * by default it's gonna be false
  const classes = useStyles();

  const handleEnabling = () => {
    setFallingEnabled((currentValue) => !currentValue);
  };

  const handleOptionsUpdate = () => {
    console.log('update...');
  };

  return (
    <div className={classes.root}>
      <NavBar
        buttonName={fallingEnabled ? 'Disable falling' : 'Enable falling'}
        onClick={handleEnabling}
      />
      <Options onUpdate={handleOptionsUpdate} />
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
