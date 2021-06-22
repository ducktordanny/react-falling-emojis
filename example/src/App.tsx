import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import FallingEmojis from 'react-falling-emojis';

import NavBar from './components/NavBar';
import Options from './components/Options';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const App = () => {
  const [fallingEnabled, setFallingEnabled] = useState<boolean>(true); // * by default it's gonna be false
  const classes = useStyles();

  const handleEnabling = () => {
    setFallingEnabled((currentValue) => !currentValue);
  };

  return (
    <div className={classes.root}>
      <NavBar
        buttonName={fallingEnabled ? 'Disable falling' : 'Enable falling'}
        onClick={handleEnabling}
      />
      <FallingEmojis
        emojis={['⚽️', '🦆', '🎉', '👻']}
        density={10}
        shake
        disable={!fallingEnabled}
      />
      <Options />
    </div>
  );
};

export default App;
