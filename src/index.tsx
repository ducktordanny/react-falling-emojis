import React, { useEffect } from 'react';
import gsap from 'gsap';

import EmojiContainer from './components/EmojiContainer';
import RainSettings from './interfaces/RainSettings'; // eslint-disable-line

import styles from './styles.module.css';
import 'react-falling-emojis/dist/index.css';

/**
 * - [Demo site]()
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
}: RainSettings) => {
  useEffect(() => {
    gsap.set(`.${styles['emoji-container']}`, {
      fontSize: `${size}px`
      // opacity: 1
      // ?is opacity really necessary here?
    });
  }, [size]);

  // it's not gonna be good here...
  useEffect(() => {
    if (opacity > 1 || opacity < 0) {
      console.error(
        `[React Falling Emojis]: Opacity's value has to be between 0 and 1`
      );
    }
    gsap.to(`.${styles['emoji-container']}`, {
      opacity
    });
  }, [opacity]);

  // ! on opacity changing the emojis are appearing for a second

  /**
   * TODO: add doc comments
   * TODO: once I already tried to use stagger instead of the current solution. Should I give another chance to it? (might be more optimal...)
   * => Do we really need timelines? (https://greensock.com/forums/topic/11908-particle-system/) => One main timeline and it would get tweens from children
   */

  /**
   * Here we are handling the density's value e.g. if it's 0 or negative then we send error message.
   * And we also warn the dev if he wants to use too much density
   * ? should I add a prop what can remove the warning?
   */
  // this could be separated into a component
  const getEmojiElements = () => {
    if (density < 1) {
      console.error(
        '[React Falling Emojis]: Density cannot be smaller than 1!'
      );
      return undefined;
    }

    if (density * emojis.length > 100) {
      console.warn(
        '[React Falling Emojis]: Too many elements could cause performance issues!'
      );
    }

    return emojis.map((emoji, index) => {
      const id = `react-falling-emoji-${index}`;
      const emojiContainerElement = (idNumber: number) => (
        <EmojiContainer
          key={`${id}-${idNumber}`}
          id={`${id}-${idNumber}`}
          emoji={emoji}
          speed={speed}
          disable={disable}
          shake={shake}
          size={size}
          reverse={reverse}
          repeat={repeat}
          opacity={opacity}
        />
      );
      const emojiElements: JSX.Element[] = [];
      for (let index = 0; index < density; index++) {
        emojiElements.push(emojiContainerElement(index));
      }
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
