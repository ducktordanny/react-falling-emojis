import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from '../hooks/useStyles';

interface Props {
  element: string;
}

const EmojiElement: React.FC<Props> = ({ element }: Props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.emojiElementPaper}>
      <Typography>{element}</Typography>
      <Button color='secondary'>Remove</Button>
    </Paper>
  );
};

export default EmojiElement;
