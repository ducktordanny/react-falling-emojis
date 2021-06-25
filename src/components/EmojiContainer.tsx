import React from 'react';

import useFallingAnimation from '../hooks/useFallingAnimation';
import useSmoothDisabling from '../hooks/useSmoothDisabling';
import useShakingAnimation from '../hooks/useShakingAnimation';
import ContainerProps from '../interfaces/ContainerProps'; // eslint-disable-line

import styles from '../styles.module.css';

const EmojiContainer: React.FC<ContainerProps> = ({
  id,
  emoji,
  speed,
  disable,
  shake,
  size,
  reverse,
  repeat
}: ContainerProps) => {
  const mainTimeline = useFallingAnimation({
    id,
    speed,
    size,
    reverse,
    repeat
  });
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
