import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import EmojiElement from './EmojiElement';
import useStyles from '../hooks/useStyles';

interface Props {}

const EmojiInput: React.FC<Props> = () => {
  const [emojis, setEmojis] = useState<string[]>(['🦆', '🙄']);
  const classes = useStyles();

  return (
    <Box className={classes.emojiInputRoot}>
      <Box className={classes.emojiInputBox}>
        <TextField label='Emoji/falling element' />
        <Button
          variant='contained'
          color='primary'
          onClick={() => setEmojis((currentValue) => [...currentValue, '🐶'])}
        >
          Add
        </Button>
      </Box>
      {emojis.length > 0 ? (
        emojis.map((emoji, index) => (
          <EmojiElement key={`emoji-element-${index}`} element={emoji} />
        ))
      ) : (
        <label htmlFor='empty-array'>There are no emjis added...</label>
      )}
    </Box>
  );
};

export default EmojiInput;
