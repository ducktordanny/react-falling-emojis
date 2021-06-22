import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, createStyles } from '@material-ui/core/styles';

// timingType?: 'none' | 'linear';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '.5rem',
      '& > *': {
        margin: '.5rem'
      }
    }
  })
);

interface ReactFallingEmojisProps {
  emojis: Array<string>;
  shake: boolean;
  reverse: boolean;
  repeat: number;
  density: number;
  speed: number;
  size: number;
}

interface Props {
  onUpdate?: (props: ReactFallingEmojisProps) => void;
}

const Options: React.FC<Props> = ({ onUpdate }: Props) => {
  // ? separated by comas ?
  // ? Adding and Removing elements ?
  const [emojisString, setEmojisString] = useState<string>('');
  const [shake, setShake] = useState<boolean>(false);
  const [reverse, setReverse] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<number>(-1);
  const [density, setDensity] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(10);
  const [size, setSize] = useState<number>(25);
  const classes = useStyles();

  useEffect(() => {
    console.log(shake);
  }, [shake]);

  return (
    <Container className={classes.root}>
      <TextField
        label='Emojis'
        value={emojisString}
        onChange={(e) => setEmojisString(e.target.value)}
      />
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
      <Button
        type='submit'
        variant='contained'
        color='primary'
        onSubmit={() =>
          onUpdate
            ? onUpdate({
                emojis: [],
                shake: false,
                reverse: false,
                repeat: -1,
                density: 1,
                speed: 10,
                size: 25
              })
            : ''
        }
      >
        Update
      </Button>
    </Container>
  );
};

export default Options;
