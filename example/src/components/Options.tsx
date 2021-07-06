import React, { useState } from 'react';
import { Container, Box, Button, TextField } from '@material-ui/core';

import EmojiInput from './EmojiInput';
import LabeledSwitch from './LabeledSwitch';
import ReactFallingEmojisProps from '../interfaces/ReactFallingEmojisProps';
import entriesMapByType from '../functions/entriesMapByType';
import useStyles from '../hooks/useStyles';

interface OptionsProps {
  fallingEmojisProps: ReactFallingEmojisProps;
  onUpdate: (props: ReactFallingEmojisProps) => void;
}

const Options: React.FC<OptionsProps> = ({
  fallingEmojisProps,
  onUpdate
}: OptionsProps) => {
  const [fallingEmojis, setFallingEmojis] =
    useState<ReactFallingEmojisProps>(fallingEmojisProps);
  const classes = useStyles();

  const changeFallingEmojisProperty = (value: number, property: string) => {
    if (property === 'opacity' && (value > 1 || value < 0)) return;
    if (typeof fallingEmojis[property] === 'number')
      setFallingEmojis((currentValue) => ({
        ...currentValue,
        [property]: value
      }));
  };

  const getNumberTextFieldGroup = () =>
    entriesMapByType(fallingEmojis, 'number', ([key, value], index) => (
      <TextField
        key={`text-field-element-${index}`}
        type='number'
        InputProps={{
          inputProps: key === 'opacity' ? { min: 0, max: 1, step: 0.1 } : {}
        }}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        value={value}
        onChange={(e) => {
          changeFallingEmojisProperty(+e.target.value, key);
        }}
      />
    ));

  const getSwitchGroup = () =>
    entriesMapByType(fallingEmojis, 'boolean', ([key, value], index) => (
      <LabeledSwitch
        key={`labeled-switch-element-${index}`}
        label={key.charAt(0).toUpperCase() + key.slice(1)}
        value={value}
        labelColor='textSecondary'
        switchColor='primary'
        onChange={() =>
          setFallingEmojis((currentValue) => ({
            ...currentValue,
            [key]: !currentValue[key]
          }))
        }
      />
    ));

  return (
    <Container className={classes.optionsRoot} id='options-container'>
      <EmojiInput
        defaultEmojis={fallingEmojis.emojis}
        onAdding={(emojis) =>
          setFallingEmojis((currentValue) => ({ ...currentValue, emojis }))
        }
      />
      <Box className={classes.optionsSwitchBox}>{getSwitchGroup()}</Box>
      <Box className={classes.optionsTextFields}>
        {getNumberTextFieldGroup()}
      </Box>
      <Button
        variant='contained'
        color='primary'
        style={{ color: '#fff' }}
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
