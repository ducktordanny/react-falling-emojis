import React from 'react';
import styles from '../styles.module.css';

interface Props {
  id: string;
  emoji: string;
}

const EmojiContainer: React.FC<Props> = ({ id, emoji }: Props) => {
  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
