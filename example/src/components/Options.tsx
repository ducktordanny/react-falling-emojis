import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import EmojiInput from './EmojiInput';
import ReactFallingEmojisProps from '../interfaces/ReactFallingEmojisProps';
import useStyles from '../hooks/useStyles';

// timingType?: 'none' | 'linear';

interface Props {
  fallingEmojisProps: ReactFallingEmojisProps;
  onUpdate: (props: ReactFallingEmojisProps) => void;
}

const Options: React.FC<Props> = ({ fallingEmojisProps, onUpdate }: Props) => {
  // ? separated by comas ?
  // ? Adding and Removing elements ?
  const [emojis, setEmojis] = useState<string[]>(fallingEmojisProps.emojis);
  const [shake, setShake] = useState<boolean>(fallingEmojisProps.shake);
  const [reverse, setReverse] = useState<boolean>(fallingEmojisProps.reverse);
  const [repeat, setRepeat] = useState<number>(fallingEmojisProps.repeat);
  const [density, setDensity] = useState<number>(fallingEmojisProps.density);
  const [speed, setSpeed] = useState<number>(fallingEmojisProps.speed);
  const [size, setSize] = useState<number>(fallingEmojisProps.size);

  const classes = useStyles();

  return (
    <Container className={classes.optionsRoot}>
      <EmojiInput onAdding={(e) => setEmojis(e)} />
      <Box className={classes.optionsSwitchBox}>
        <FormControlLabel
          control={
            <Switch
              color='primary'
              onChange={() => setShake((currentValue) => !currentValue)}
            />
          }
          label='Shake'
          value={shake}
        />
        <FormControlLabel
          control={
            <Switch
              color='primary'
              onChange={() => setReverse((currentValue) => !currentValue)}
            />
          }
          label='Reverse'
          value={reverse}
        />
      </Box>
      <Box className={classes.optionsTextFields}>
        <TextField
          type='number'
          label='Repeat'
          value={repeat}
          onChange={(e) => setRepeat(+e.target.value)}
        />
        <TextField
          type='number'
          label='Density'
          value={density}
          onChange={(e) => setDensity(+e.target.value)}
        />
        <TextField
          type='number'
          label='Speed'
          value={speed}
          onChange={(e) => setSpeed(+e.target.value)}
        />
        <TextField
          type='number'
          label='Size (in pixels)'
          value={size}
          onChange={(e) => setSize(+e.target.value)}
        />
      </Box>
      <Button
        variant='contained'
        color='primary'
        onClick={() =>
          onUpdate({
            emojis,
            shake,
            reverse,
            repeat,
            density,
            speed,
            size
          })
        }
      >
        Update
      </Button>
    </Container>
  );
};

export default Options;
