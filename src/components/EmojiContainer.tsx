import React, { useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles.module.css';

interface Props {
  id: string; // this is gonna be a generated unique uuid
  emoji: string;
  speed: number;
  windowHeight: number;
  windowWidth: number;
  disable: boolean;
  shake: boolean;
}

const EmojiContainer: React.FC<Props> = ({
  id,
  emoji,
  speed,
  windowHeight,
  windowWidth,
  disable,
  shake
}: Props) => {
  const windowWidthRef = useRef<number>(window.innerWidth);
  const windowHeightRef = useRef<number>(window.innerHeight);
  // const disableRef = useRef<boolean>(disable);
  const speedRef = useRef<number>(speed);
  const mainTimeline = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      }),
    []
  );
  const shakeTimeline = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      }),
    []
  );

  useEffect(() => {
    mainTimeline
      .fromTo(
        `#${id}`,
        {
          y: -100,
          x: gsap.utils.random(-50, windowWidthRef.current + 50, true),
          repeatRefresh: true
        },
        {
          y: windowHeightRef.current + 100,
          x: gsap.utils.random(-50, windowWidthRef.current + 50, true),
          delay: gsap.utils.random(0, speed, true),
          duration: speedRef.current,
          ease: 'linear',
          repeatRefresh: true
        }
      )
      .play();

    return () => {
      console.log('Clean-up');
      mainTimeline.clear();
    };
  }, []);

  useEffect(() => {
    // disable falling animation with opacity changing end pause
    if (disable) {
      gsap
        .to(`.${styles['emoji-container']}`, {
          opacity: 0,
          duration: 1
        })
        .then(() => {
          mainTimeline.pause();
        });
    } else {
      // ? here we could choose if we want to continue from the end of the previous or restart it
      // mainTimeline.resume();
      gsap.to(`.${styles['emoji-container']}`, {
        opacity: 1,
        duration: 1
      });
      mainTimeline.restart();
    }
  }, [disable, mainTimeline]);

  useEffect(() => {
    if (shake) {
      shakeTimeline.clear();
      shakeTimeline.fromTo(
        `#${id}`,
        {
          rotation: -30
        },
        {
          rotation: 30,
          yoyo: true,
          ease: 'none',
          duration: 1.5,
          repeat: -1
        }
      );
    } else {
      shakeTimeline.clear();
      shakeTimeline.set(`#${id}`, { rotation: 0 });
    }
  }, [shake]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    windowHeightRef.current = windowHeight;
    windowWidthRef.current = windowWidth;
  }, [windowHeight, windowWidth]);

  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
