import React, { useEffect } from 'react';
import useFallingAnimation from '../hooks/useFallingAnimation';
import styles from '../styles.module.css';

interface Props {
  id: string; // this is gonna be a generated unique uuid
  emoji: string;
  windowHeight: number;
  windowWidth: number;
}

const EmojiContainer: React.FC<Props> = ({
  id,
  emoji,
  windowHeight,
  windowWidth
}: Props) => {
  useEffect(() => {
    useFallingAnimation({ id, speed: 20, windowHeight, windowWidth });
  }, [windowHeight, windowWidth]);

  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
