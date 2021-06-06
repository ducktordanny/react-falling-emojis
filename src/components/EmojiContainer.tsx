import React, { useEffect, useMemo, useRef } from 'react';
// import useFallingAnimation from '../hooks/useFallingAnimation';
import gsap from 'gsap';
import styles from '../styles.module.css';

interface Props {
  id: string; // this is gonna be a generated unique uuid
  emoji: string;
  speed: number;
  windowHeight: number;
  windowWidth: number;
  // disable: boolean;
}

const EmojiContainer: React.FC<Props> = ({
  id,
  emoji,
  speed,
  windowHeight,
  windowWidth
}: Props) => {
  const windowWidthRef = useRef<number>(window.innerWidth);
  const windowHeightRef = useRef<number>(window.innerHeight);
  const animationTimeline = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      }),
    []
  );

  useEffect(() => {
    animationTimeline.fromTo(
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
        duration: speed,
        ease: 'linear',
        repeatRefresh: true
      }
    );

    return () => {
      console.log('Clear timeline...');
      animationTimeline.clear();
    };
  }, [windowHeight, windowWidth]);

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
