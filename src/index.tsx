import React, { useEffect } from 'react';
import styles from './styles.module.css';

interface RainSettings {
  emojis: string[];
  quantity?: number;
  speed?: number; // microscenonds
  timingType?: string;
  // size?: number; // pixels maybe
}

export const ExampleComponent: React.FC<RainSettings> = ({
  emojis
}: RainSettings) => {
  useEffect(() => {}, []);

  useEffect(() => {
    // const emojiCheckerRegex: RegExp =
    //   /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gu;
    console.log('Checking the emojis if those are valid');
  }, [emojis]);

  return (
    <section className={styles['react-falling-emojis-container']}>
      {emojis.map((emoji, id) => {
        return <div key={id}>{emoji}</div>;
      })}
    </section>
  );
};
