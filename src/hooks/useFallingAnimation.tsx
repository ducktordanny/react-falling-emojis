import { useState, useMemo, useEffect } from 'react';
import gsap from 'gsap';

interface fallingAnimationProps {
  id: string;
  reverse: boolean;
  size: number;
  speed: number;
}

const useFallingAnimation = ({
  id,
  reverse,
  size,
  speed
}: fallingAnimationProps) => {
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const mainTimeline = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      }),
    []
  );

  useEffect(() => {
    addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    });

    return () => {
      removeEventListener('resize', () => {
        setWindowHeight(-1);
        setWindowWidth(-1);
      });
    };
  }, []);

  useEffect(() => {
    if (windowHeight < 0 || windowWidth < 0) {
      console.error('[ReactFallingEmojis]: Something went wrong.');
      return;
    }

    const animateFrom = {
      y: -size,
      x: gsap.utils.random(-50, windowWidth + 50, true),
      repeatRefresh: true
    };
    const animateTo = {
      y: windowHeight + size,
      x: gsap.utils.random(-50, windowWidth + 50, true),
      repeatRefresh: true
    };

    mainTimeline
      .fromTo(
        `#${id}`,
        { ...(reverse ? animateTo : animateFrom) },
        {
          ...(reverse ? animateFrom : animateTo),
          delay: gsap.utils.random(0, speed, true),
          duration: speed,
          ease: 'none',
          repeat: -1
        }
      )
      .play();

    return () => {
      // clean-up
      mainTimeline.clear();
    };
  }, [windowHeight, windowWidth, reverse]);

  // ! TEST LATER THE FOLLOWING:
  // is it gonna update immediately?
  useEffect(() => {
    mainTimeline.restart();
  }, [speed, size]);

  return mainTimeline;
};

export default useFallingAnimation;
