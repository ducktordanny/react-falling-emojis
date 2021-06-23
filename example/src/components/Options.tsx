import React, { useEffect, useState } from 'react';

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
  onUpdate: (props: ReactFallingEmojisProps) => void;
}

const Options: React.FC<Props> = ({ onUpdate }: Props) => {
  // ? separated by comas ?
  // ? Adding and Removing elements ?
  const [emojis, setEmojis] = useState<string[]>([]);
  const [shake, setShake] = useState<boolean>(false);
  const [reverse, setReverse] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<number>(-1);
  const [density, setDensity] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(10);
  const [size, setSize] = useState<number>(25);

  const classes = useStyles();

  console.log(classes.optionsRoot);

  useEffect(() => {
    // verification
    console.log(shake);
  }, [shake]);

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
