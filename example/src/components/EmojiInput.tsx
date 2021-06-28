import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import EmojiElement from './EmojiElement';
import useStyles from '../hooks/useStyles';

interface Props {
  defaultEmojis: string[];
  onAdding: (emojis: string[]) => void;
}

const EmojiInput: React.FC<Props> = ({ defaultEmojis, onAdding }: Props) => {
  const [emojiElementInput, setEmojiElementInput] = useState<string>('');
  const [emojis, setEmojis] = useState<string[]>(defaultEmojis);
  const classes = useStyles();

  const handleEmojiAdding = () => {
    if (emojiElementInput === '') return;
    onAdding([emojiElementInput, ...emojis]);
    setEmojis((currentValue) => [emojiElementInput, ...currentValue]);
    setEmojiElementInput('');
  };

  const handleRemove = (index: number) => {
    onAdding(emojis.filter((_, x) => index !== x));
    setEmojis((currentValue) => currentValue.filter((_, x) => index !== x));
  };

  return (
    <Box>
      <Box className={classes.emojiInputBox}>
        <TextField
          label='Emoji/falling element'
          value={emojiElementInput}
          helperText='Emojis: win + ; or control + cmd + space'
          onChange={(e) => setEmojiElementInput(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={handleEmojiAdding}>
          Add
        </Button>
      </Box>
      {emojis.length > 0 ? (
        emojis.map((emoji, index) => (
          <EmojiElement
            key={`emoji-element-${index}`}
            index={index}
            element={emoji}
            onRemove={handleRemove}
          />
        ))
      ) : (
        <label htmlFor='empty-array'>There are no emjis added...</label>
      )}
    </Box>
  );
};

export default EmojiInput;
