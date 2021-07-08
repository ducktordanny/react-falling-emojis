import React from 'react';

import useFallingAnimation from '../hooks/useFallingAnimation';
import useSmoothDisabling from '../hooks/useSmoothDisabling';
import useShakingAnimation from '../hooks/useShakingAnimation';
import ContainerProps from '../interfaces/ContainerProps'; // eslint-disable-line

import styles from '../styles.module.css';

const EmojiContainer: React.FC<ContainerProps> = ({
  id,
  emoji,
  fallingProps,
  disableProps,
  shake
}: ContainerProps) => {
  const mainTimeline = useFallingAnimation({
    id: `#${id}`,
    ...fallingProps
  });
  const shakeTimeline = useShakingAnimation({ id, shake });

  useSmoothDisabling({
    timelines: shake ? [mainTimeline, shakeTimeline] : [mainTimeline],
    element: `.${styles['emoji-container']}`,
    ...disableProps
  });

  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
