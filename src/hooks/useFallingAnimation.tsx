import { useRef, useMemo, useEffect } from 'react';
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
  const reverseRef = useRef(reverse);
  const sizeRef = useRef(size);
  const speedRef = useRef(speed);

  const timeline = useMemo(
    () =>
      gsap.timeline({
        repeatRefresh: true
      }),
    []
  );

  useEffect(() => {
    // this recursive function behaves like the timeline would be repeated, but
    // also sensitive for window resizing and other changes...
    const initFallingAnimation = () => {
      const getRandomX = gsap.utils.random(0, window.innerWidth, true);

      const top = -(sizeRef.current * 2);
      const bottom = window.innerHeight + sizeRef.current * 2;

      timeline
        .fromTo(
          `#${id}`,
          {
            y: reverseRef.current ? bottom : top,
            x: getRandomX,
            repeatRefresh: true
          },
          {
            y: reverseRef.current ? top : bottom,
            x: getRandomX,
            repeatRefresh: true,
            delay: gsap.utils.random(0, speedRef.current, true),
            duration: speedRef.current,
            ease: 'none',
            onComplete: () => {
              timeline.clear();
              initFallingAnimation();
            },
            onReverseComplete: () => {
              timeline.clear();
              initFallingAnimation();
            }
          }
        )
        .play();
    };

    initFallingAnimation();

    return () => {
      // clean-up
      timeline.clear();
    };
  }, []);

  /**
   * Update references on change
   */
  useEffect(() => {
    if (reverse) {
      timeline.reverse();
    }
    reverseRef.current = reverse;
    speedRef.current = speed;
    sizeRef.current = size;
  }, [reverse, speed, size]);

  return timeline;
};

export default useFallingAnimation;
