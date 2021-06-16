import React, { useEffect, useRef, useState } from 'react';
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
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const containerRef = useRef<any>();

  useEffect(() => {
    if (containerRef.current) console.log(containerRef.current.offsetWidth);
    window.addEventListener('resize', (e: UIEvent) => {
      const w = e.target as typeof window;
      console.log(`Shiet it's happening...`);
      setWindowHeight(w.innerHeight);
      setWindowWidth(w.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', (e) => {
        console.log('Clear...: ' + e);
      });
    };
  }, []);

  useEffect(() => {
    gsap.set(`.${styles['emoji-container']}`, {
      top: `-${size}px`,
      fontSize: `${size}px`
    });
  }, [size]);

  // TODO: rotations could be different at timing
  // TODO: reversed falling - flying
  // TODO: clean-up
  // // TODO: window resize is still a problem
  // // TODO: (recursive? https://stackoverflow.com/questions/56025440/gsap-staggerto-random-arguments-for-each-element) for window resize: https://codepen.io/GreenSock/pen/jrmgrW?editors=1010 and https://greensock.com/forums/topic/15149-stop-repeated-tween-at-the-end-of-an-iteration/

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
          windowHeight={windowHeight}
          windowWidth={windowWidth}
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
    <section
      className={styles['react-falling-emojis-container']}
      ref={containerRef}
    >
      {getEmojiElements()}
    </section>
  );
};

export default FallingEmojis;
