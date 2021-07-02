import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

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
  const [fallingEmojis, setFallingEmojis] =
    useState<ReactFallingEmojisProps>(fallingEmojisProps);
  const classes = useStyles();

  useEffect(() => {
    gsap.fromTo(
      '.options-container',
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <Container className={`${classes.optionsRoot} options-container`}>
      <EmojiInput
        defaultEmojis={fallingEmojis.emojis}
        onAdding={(emojis) =>
          setFallingEmojis((currentValue) => ({ ...currentValue, emojis }))
        }
      />
      <Box className={classes.optionsSwitchBox}>
        <FormControlLabel
          control={
            <Switch
              color='primary'
              onChange={() =>
                setFallingEmojis((currentValue) => ({
                  ...currentValue,
                  shake: !currentValue.shake
                }))
              }
            />
          }
          label='Shake'
          value={fallingEmojis.shake}
        />
        <FormControlLabel
          control={
            <Switch
              color='primary'
              onChange={() =>
                setFallingEmojis((currentValue) => ({
                  ...currentValue,
                  reverse: !currentValue.reverse
                }))
              }
            />
          }
          label='Reverse'
          value={fallingEmojis.reverse}
        />
      </Box>
      <Box className={classes.optionsTextFields}>
        <TextField
          type='number'
          label='Repeat'
          value={fallingEmojis.repeat}
          onChange={(e) =>
            setFallingEmojis((currentValue) => ({
              ...currentValue,
              repeat: +e.target.value
            }))
          }
        />
        <TextField
          type='number'
          label='Density'
          value={fallingEmojis.density}
          onChange={(e) =>
            setFallingEmojis((currentValue) => ({
              ...currentValue,
              density: +e.target.value
            }))
          }
        />
        <TextField
          type='number'
          label='Speed'
          value={fallingEmojis.speed}
          onChange={(e) =>
            setFallingEmojis((currentValue) => ({
              ...currentValue,
              speed: +e.target.value
            }))
          }
        />
        <TextField
          type='number'
          label='Size (in pixels)'
          value={fallingEmojis.size}
          color='secondary'
          onChange={(e) =>
            setFallingEmojis((currentValue) => ({
              ...currentValue,
              size: +e.target.value
            }))
          }
        />
        <TextField
          type='number'
          label='Opacity'
          value={fallingEmojis.opacity}
          InputProps={{ inputProps: { min: 0, max: 1, step: 0.1 } }}
          onChange={(e) => {
            const value = +e.target.value;
            if (value > 1 || value < 0) return;
            setFallingEmojis((currentValue) => ({
              ...currentValue,
              opacity: value
            }));
          }}
        />
      </Box>
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          onUpdate(fallingEmojis);
        }}
      >
        Update
      </Button>
    </Container>
  );
};

export default Options;
