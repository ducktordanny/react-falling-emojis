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
  const shakeTimeline = useShakingAnimation({ id, shake });

  /**
   * it's listening for disable's changing and it makes a nice animation and also pause timelines if it's true
   */
  useSmoothDisabling({
    timelines: shake ? [mainTimeline, shakeTimeline] : [mainTimeline],
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
