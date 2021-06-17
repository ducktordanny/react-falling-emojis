import React, { useEffect } from 'react';
import EmojiContainer from './components/EmojiContainer';
import gsap from 'gsap';
import styles from './styles.module.css';
import 'react-falling-emojis/dist/index.css';

interface RainSettings {
  emojis: string[];
  timingType?: string;
  speed?: number; // in seconds
  density?: number; // an element how many times should occur (we need to handle invalid values)
  disable?: boolean;
  shake?: boolean;
  size?: number; // in pixels
  reverse?: boolean; // emojis would come from bottom to top
}

const FallingEmojis: React.FC<RainSettings> = ({
  emojis,
  speed = 10,
  disable = false,
  density = 1,
  shake = false,
  size = 30,
  reverse = false
}: RainSettings) => {
  useEffect(() => {
    gsap.set(`.${styles['emoji-container']}`, {
      top: `-${size}px`,
      fontSize: `${size}px`,
      opacity: 1
    });
  }, [size]);

  // TODO: clean-up
  // TODO: window resize is still a problem

  // hadnling density
  const getEmojiElements = () => {
    if (density < 1) {
      console.error(
        '[React Falling Emojis]: Density cannot be smaller than 1!'
      );
      return undefined;
    }
    if (density > 5 && emojis.length > 5) {
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
