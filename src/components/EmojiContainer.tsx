import React, { useMemo, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles.module.css';

interface Props {
  id: string;
  emoji: string;
  size: number;
  speed: number;
  windowHeight: number;
  windowWidth: number;
  disable: boolean;
  shake: boolean;
  reverse: boolean;
}

const EmojiContainer: React.FC<Props> = ({
  id,
  emoji,
  speed,
  windowHeight,
  windowWidth,
  disable,
  shake,
  size,
  reverse
}: Props) => {
  const windowWidthRef = useRef<number>(window.innerWidth);
  const windowHeightRef = useRef<number>(window.innerHeight);
  const speedRef = useRef<number>(speed);
  const sizeRef = useRef<number>(size);
  // the main timline handle the falling animation
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
    const animateFrom = {
      y: -sizeRef.current,
      x: gsap.utils.random(-50, windowWidthRef.current + 50, true),
      repeatRefresh: true
    };
    const animateTo = {
      y: windowHeightRef.current + sizeRef.current,
      x: gsap.utils.random(-50, windowWidthRef.current + 50, true),
      repeatRefresh: true
    };

    mainTimeline
      .fromTo(
        `#${id}`,
        { ...(reverse ? animateTo : animateFrom) },
        {
          ...(reverse ? animateFrom : animateTo),
          delay: gsap.utils.random(0, speed, true),
          duration: speedRef.current,
          ease: 'linear'
        }
      )
      .play();

    return () => {
      // clean-up
      mainTimeline.clear();
    };
  }, [reverse]);

  // disable falling animation with opacity changing end pause
  useEffect(() => {
    if (disable) {
      gsap
        .to(`.${styles['emoji-container']}`, {
          opacity: 0,
          ease: 'none',
          paused: true,
          duration: 2
        })
        .play()
        .then(() => {
          mainTimeline.pause();
        });
    } else {
      if (mainTimeline.paused()) {
        mainTimeline.restart();
      }
      gsap
        .to(`.${styles['emoji-container']}`, {
          opacity: 1,
          ease: 'none',
          paused: true,
          duration: 2,
          onUpdate: () => {
            if (mainTimeline.paused()) {
              mainTimeline.resume();
            }
          }
        })
        .play();
    }
  }, [disable]);

  // if shake is enabled then it start from a random array of angle values
  useEffect(() => {
    if (shake) {
      shakeTimeline.clear();
      const shakingStartFrom = gsap.utils.random([
        30, -30, 20, -20, 10, -10, 40, -40
      ]);
      shakeTimeline.fromTo(
        `#${id}`,
        {
          rotation: shakingStartFrom
        },
        {
          rotation: -shakingStartFrom,
          yoyo: true,
          ease: 'none',
          duration: gsap.utils.random([1, 1.5, 2], true),
          repeat: -1,
          repeatRefresh: true
        }
      );
    } else {
      shakeTimeline.clear();
      shakeTimeline.set(`#${id}`, { rotation: 0 });
    }
  }, [shake]);

  // update reference on change
  useEffect(() => {
    speedRef.current = speed;
    mainTimeline.restart();
  }, [speed]);

  // on window size change we restart the animation
  // ! we should find out another way to make this more fancy
  // ! (if we simply update the window size references then it's not gonna update inside the animation)
  useEffect(() => {
    windowHeightRef.current = windowHeight;
    windowWidthRef.current = windowWidth;
    mainTimeline.restart();
  }, [windowHeight, windowWidth]);

  // (size and positions wouldn't update without restart)
  useEffect(() => {
    sizeRef.current = size;
    mainTimeline.restart();
  }, [size]);

  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
