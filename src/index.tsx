import React, { useEffect, useRef, useState } from 'react';
import EmojiContainer from './components/EmojiContainer';
// import { v4 as uuid } from 'uuid';
import styles from './styles.module.css';

interface RainSettings {
  emojis: string[];
  quantity?: number;
  speed?: number; // in seconds
  timingType?: string;
  disable?: boolean;
  // reverse?:  boolean; // emojis are flying up
  // size?: number; // pixels maybe
  // density?: number; // X maximum and if it's incorrect throw warning and use valid value
}
// https://greensock.com/forums/topic/14775-creating-a-particle-animation/
export const ExampleComponent: React.FC<RainSettings> = ({
  emojis,
  speed = 10,
  disable = false
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
    // const emojiCheckerRegex: RegExp =
    //   /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gu;
    console.log(
      'Checking the emojis if those are valid... Or actually should we?'
    );
  }, [emojis]);

  // TODO: for window resize: https://codepen.io/GreenSock/pen/jrmgrW?editors=1010 and https://greensock.com/forums/topic/15149-stop-repeated-tween-at-the-end-of-an-iteration/
  // TODO: add rotation to useFallingAnimation
  // TODO: We should find a better way to return more emoji if the density is not default

  return (
    <section
      className={styles['react-falling-emojis-container']}
      ref={containerRef}
    >
      {disable
        ? ''
        : emojis.map((emoji, index) => {
            const id = `react-falling-emoji-${index}`;
            return (
              <React.Fragment key={id}>
                <EmojiContainer
                  id={`${id}-0`}
                  emoji={emoji}
                  speed={speed}
                  windowHeight={windowHeight}
                  windowWidth={windowWidth}
                />
              </React.Fragment>
            );
          })}
    </section>
  );
};
