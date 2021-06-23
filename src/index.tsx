import React, { useEffect } from 'react';
import gsap from 'gsap';

import EmojiContainer from './components/EmojiContainer';

import styles from './styles.module.css';
import 'react-falling-emojis/dist/index.css';

// ?fall once or repeat falling prop? well what should be its name? should it be repeat? yes
interface RainSettings {
  emojis: string[];
  timingType?: 'none' | 'linear'; // not implemented yet
  size?: number; // in pixels
  speed?: number; // in seconds
  density?: number;
  repeat?: number;
  disable?: boolean;
  shake?: boolean;
  reverse?: boolean; // emojis would come from bottom to top
}

const FallingEmojis: React.FC<RainSettings> = ({
  emojis,
  speed = 10,
  disable = false,
  density = 1,
  shake = false,
  size = 30,
  reverse = false,
  repeat = -1
}: RainSettings) => {
  useEffect(() => {
    gsap.set(`.${styles['emoji-container']}`, {
      // top: `-${size}px`,
      fontSize: `${size}px`,
      opacity: 1
    });
  }, [size]);

  /**
   * TODO: we have some issue with the size prop... sometimes not every emoji is changing
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
