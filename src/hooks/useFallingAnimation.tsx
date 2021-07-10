import { useState, useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';

import FallingAnimationProps from '../interfaces/FallingAnimationProps'; // eslint-disable-line
import useWindowSize from './useWindowSize';

/**
 * Make an element falling from top to bottom and it can be varied by props
 */
const useFallingAnimation = ({
  id,
  reverse,
  size,
  speed,
  repeat
}: FallingAnimationProps) => {
  const [repeatCounter, setRepeatCounter] = useState<number>(0);
  const [height] = useWindowSize();
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

  /**
   * This recursive function behaves like the timeline would be repeated, but
   * also sensitive for window resizing and other changes...
   */
  const initFallingAnimation = () => {
    const fixedValues = {
      x: gsap.utils.random(0, window.innerWidth, true),
      repeatRefresh: true
    };
    const top = -(sizeRef.current * 2);
    const bottom = window.innerHeight + sizeRef.current * 2;

    timeline
      .fromTo(
        id,
        {
          y: reverseRef.current ? bottom : top,
          ...fixedValues
        },
        {
          y: reverseRef.current ? top : bottom,
          ...fixedValues,
          delay: gsap.utils.random(0, speedRef.current, true),
          duration: speedRef.current,
          ease: 'none',
          onStart: () => {
            initFallingAnimation();
          },
          onComplete: () => {
            timeline.clear();
            setRepeatCounter((currentValue) =>
              currentValue !== 1 ? currentValue + 1 : 0
            );
            initFallingAnimation();
          }
        }
      )
      .play();
  };

  /** Restart the animation with new params... */
  const restartWithClear = () => {
    timeline.clear();
    initFallingAnimation();
  };

  useEffect(() => {
    initFallingAnimation();
    return () => {
      timeline.clear();
    };
  }, []);

  useEffect(() => {
    restartWithClear();
  }, [height]);

  /** Update references on change */
  useEffect(() => {
    reverseRef.current = reverse;
    restartWithClear();
  }, [reverse]);

  useEffect(() => {
    speedRef.current = speed;
    restartWithClear();
  }, [speed]);

  useEffect(() => {
    sizeRef.current = size;
  }, [size]);

  useEffect(() => {
    if (repeat !== -1 && repeat === repeatCounter) timeline.clear();
  }, [repeatCounter, repeat]);

  return timeline;
};

export default useFallingAnimation;
