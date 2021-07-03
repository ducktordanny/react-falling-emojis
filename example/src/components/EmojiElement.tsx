import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import useStyles from '../hooks/useStyles';

interface Props {
  index: number;
  element: string;
  onRemove: (id: number) => void;
}

const EmojiElement: React.FC<Props> = ({ index, element, onRemove }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.emojiElementPaper}>
      <Typography className={classes.emojiElementLabel}>{element}</Typography>
      <Button color='secondary' onClick={() => onRemove(index)}>
        <DeleteForeverIcon />
      </Button>
    </Paper>
  );
};

export default EmojiElement;
