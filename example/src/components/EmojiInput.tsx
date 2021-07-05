import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useSnackbar } from 'notistack';

import EmojiElement from './EmojiElement';
import useStyles from '../hooks/useStyles';

interface Props {
  defaultEmojis: string[];
  onAdding: (emojis: string[]) => void;
}

const EmojiInput: React.FC<Props> = ({ defaultEmojis, onAdding }: Props) => {
  const [emojiElementInput, setEmojiElementInput] = useState<string>('');
  const [emojis, setEmojis] = useState<string[]>(defaultEmojis);
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const handleEmojiAdding = () => {
    if (emojiElementInput === '') return;
    onAdding([emojiElementInput, ...emojis]);
    setEmojis((currentValue) => [emojiElementInput, ...currentValue]);
    setEmojiElementInput('');
  };

  const handleRemove = (index: number) => {
    if (emojis.length === 1) {
      enqueueSnackbar('You need at least one falling element.', {
        variant: 'error',
        autoHideDuration: 2000
      });
      return;
    }
    onAdding(emojis.filter((_, x) => index !== x));
    setEmojis((currentValue) => currentValue.filter((_, x) => index !== x));
  };

  return (
    <Box>
      <Box className={classes.emojiInputBox}>
        <TextField
          label='Falling element'
          value={emojiElementInput}
          helperText='Emojis: win + ; or control + cmd + space'
          onChange={(e) => setEmojiElementInput(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          style={{ color: '#fff' }}
          onClick={handleEmojiAdding}
        >
          Add
        </Button>
      </Box>
      {emojis.map((emoji, index) => (
        <EmojiElement
          key={`emoji-element-${index}`}
          index={index}
          element={emoji}
          onRemove={handleRemove}
        />
      ))}
    </Box>
  );
};

export default EmojiInput;
