import React, { useState, useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import EmojiElement from './EmojiElement';
import useStyles from '../hooks/useStyles';

interface Props {
  onAdding: (emojis: string[]) => void;
}

const EmojiInput: React.FC<Props> = ({ onAdding }: Props) => {
  const [emojiElementInput, setEmojiElementInput] = useState<string>('');
  const [emojis, setEmojis] = useState<string[]>(['🦆', '🙄']);
  const classes = useStyles();

  const handleEmojiAdding = () => {
    if (emojiElementInput === '') return;
    setEmojis((currentValue) => [emojiElementInput, ...currentValue]);
    setEmojiElementInput('');
  };

  useEffect(() => {
    onAdding(emojis);
  }, [emojis, onAdding]);

  return (
    <Box>
      <Box className={classes.emojiInputBox}>
        <TextField
          label='Emoji/falling element'
          value={emojiElementInput}
          onChange={(e) => setEmojiElementInput(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={handleEmojiAdding}>
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
