import React, { useEffect, useRef, useState } from 'react';
import EmojiContainer from './components/EmojiContainer';
// import { v4 as uuid } from 'uuid';
import styles from './styles.module.css';

interface RainSettings {
  emojis: string[];
  quantity?: number;
  speed?: number; // in seconds
  timingType?: string;
  // size?: number; // pixels maybe
}

export const ExampleComponent: React.FC<RainSettings> = ({
  emojis
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

  // TODO: switch to timeline and use iteration instead of repeat
  // TODO: bring the window listener useEffect here from EmojiContainer
  // TODO: add rotation to useFallingAnimation
  // TODO: remove hardcoded part from the map's fragment

  return (
    <section
      className={styles['react-falling-emojis-container']}
      ref={containerRef}
    >
      {emojis.map((emoji, index) => {
        const id = `react-falling-emoji-${index}`;
        return (
          <React.Fragment key={id}>
            <EmojiContainer
              id={`${id}-0`}
              emoji={emoji}
              windowHeight={windowHeight}
              windowWidth={windowWidth}
            />
            <EmojiContainer
              id={`${id}-1`}
              emoji={emoji}
              windowHeight={windowHeight}
              windowWidth={windowWidth}
            />
            <EmojiContainer
              id={`${id}-2`}
              emoji={emoji}
              windowHeight={windowHeight}
              windowWidth={windowWidth}
            />
          </React.Fragment>
        );
      })}
    </section>
  );
};
