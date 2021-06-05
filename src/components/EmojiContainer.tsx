import React, { useEffect, useState, useRef } from 'react';
// import useFallingAnimation from '../hooks/useFallingAnimation';
import gsap from 'gsap';
import styles from '../styles.module.css';

interface Props {
  id: string; // this is gonna be a generated unique uuid
  emoji: string;
  speed: number;
  windowHeight: number;
  windowWidth: number;
}

const EmojiContainer: React.FC<Props> = ({
  id,
  emoji,
  speed,
  windowHeight,
  windowWidth
}: Props) => {
  const [animationTimeline, setAnimationTimeline] = useState(
    gsap.timeline({
      repeatRefresh: true
    })
  );
  const windowWidthRef = useRef<number>(window.innerWidth);
  const windowHeightRef = useRef<number>(window.innerHeight);

  useEffect(() => {
    // const from = {
    //   y: -100,
    //   x: `random(-50, ${windowWidth} + 50)`
    // };
    // const to = {
    //   y: windowHeight + 100,
    //   x: `random(-50, ${windowWidth} + 50)`,
    //   duration: speed,
    //   delay: `random(0, ${speed})`,
    //   rotation: 0,
    //   repeatRefresh: true
    // };
    animationTimeline.fromTo(
      `#${id}`,
      {
        y: -100,
        x: gsap.utils.random(-50, windowWidthRef.current + 50)
      },
      {
        y: windowHeightRef.current + 100,
        x: `random(-50, ${windowWidthRef.current + 50})`,
        duration: speed,
        delay: `random(0, ${speed})`,
        repeat: -1,
        ease: 'none',
        repeatRefresh: true
        // immediateRender: false
      }
    );

    return () => {
      animationTimeline.clear();
    };
  }, [animationTimeline, gsap, speed]);

  useEffect(() => {
    windowHeightRef.current = windowHeight;
    windowWidthRef.current = windowWidth;
  }, [windowHeight, windowWidth]);

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        animationTimeline.pause();
      } else if (e.code === 'Enter') {
        animationTimeline.play();
      }
    });

    return () => {
      window.removeEventListener('keyup', () => {
        console.log('removed');
      });
    };
  }, [animationTimeline]);

  useEffect(() => {
    setAnimationTimeline(
      gsap.timeline({
        delay: gsap.utils.random(0, speed)
      })
    );
  }, [speed]);

  // useEffect(() => {
  //   console.log('It should restart this shit');
  //   animationTimeline.restart(true, false);
  // }, [windowHeight, windowWidth, animationTimeline]);

  return (
    <div id={id} className={styles['emoji-container']}>
      {emoji}
    </div>
  );
};

export default EmojiContainer;
