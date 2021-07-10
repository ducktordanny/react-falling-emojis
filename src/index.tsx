import React from 'react';

import EmojiContainer from './components/EmojiContainer';
import RainSettings from './interfaces/RainSettings'; // eslint-disable-line
import useSizeObserver from './hooks/useSizeObserver';
import useOpacityHandle from './hooks/useOpacityHandle';

import styles from './styles.module.css';
import 'react-falling-emojis/dist/index.css';

/**
 * - [Demo site](http://localhost:3000)
 * - [Github repo](https://github.com/ducktordanny/react-falling-emojis)
 */
const FallingEmojis: React.FC<RainSettings> = ({
  emojis,
  speed = 10,
  disable = false,
  density = 5,
  shake = false,
  size = 30,
  reverse = false,
  repeat = -1,
  opacity = 1
}) => {
  useSizeObserver(size, `.${styles['emoji-container']}`);
  useOpacityHandle(opacity, disable, `.${styles['emoji-container']}`);

  /**
   * TODO: add doc comments
   */

  /**
   * Here we are handling the density's value e.g. if it's 0 or negative then we send error message.
   * And we also warn the dev if he wants to use too much density
   */
  const getEmojiElements = () => {
    if (density < 1) {
      console.error(
        '[React Falling Emojis]: Density cannot be smaller than 1!'
      );
      return;
    }

    if (density * emojis.length > 100) {
      console.warn(
        '[React Falling Emojis]: Too many elements could cause performance issues!'
      );
    }

    return emojis.map((emoji, index) => {
      const id = `react-falling-emoji-${index}`;
      const emojiElements = Array.apply(null, Array(density)).map(
        (_: any, index: number) => (
          <EmojiContainer
            key={`${id}-${index}`}
            id={`${id}-${index}`}
            emoji={emoji}
            fallingProps={{ speed, size, reverse, repeat }}
            disableProps={{ disable, opacity }}
            shake={shake}
          />
        )
      );
      return <React.Fragment key={id}>{...emojiElements}</React.Fragment>;
    });
  };

  return (
    <section className={styles['react-falling-emojis-container']}>
      {getEmojiElements()}
    </section>
  );
};

export default FallingEmojis;
