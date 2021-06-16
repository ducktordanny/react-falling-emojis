import React from 'react';
import styles from '../styles.module.css';
import useFallingAnimation from '../hooks/useFallingAnimation';
import useSmoothDisabling from '../hooks/useSmoothDisabling';
import useShakingAnimation from '../hooks/useShakingAnimation';

interface Props {
  id: string;
  emoji: string;
  size: number;
  speed: number;
  disable: boolean;
  shake: boolean;
  reverse: boolean;
}

const EmojiContainer: React.FC<Props> = ({
  id,
  emoji,
  speed,
  disable,
  shake,
  size,
  reverse
}: Props) => {
  const mainTimeline = useFallingAnimation({ id, speed, size, reverse });

  useShakingAnimation({ id, shake });

  useSmoothDisabling({
    timeline: mainTimeline,
    element: `.${styles['emoji-container']}`,
    disable
  });

  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
