import { useMemo, useEffect } from 'react';
import gsap from 'gsap';

import ShakingAnimationProps from '../interfaces/ShakingAnimationProps'; // eslint-disable-line

const useShakingAnimation = ({ id, shake }: ShakingAnimationProps) => {
  const timeline = useMemo(
    () =>
      gsap.timeline({
        repeatRefresh: true
      }),
    []
  );

  useEffect(() => {
    if (shake) {
      timeline.clear();

      // we have a given array of degrees and we choose one random what's gonna be the value of shaking
      // then the rotation will go from shakingStartFrom to (-shakingStartFrom)
      const shakingStartFrom = gsap.utils.random([
        30, -30, 20, -20, 10, -10, 40, -40
      ]);

      timeline.fromTo(
        `#${id}`,
        {
          rotation: 0
        },
        {
          rotation: shakingStartFrom
        }
      );

      timeline.fromTo(
        `#${id}`,
        {
          rotation: shakingStartFrom
        },
        {
          rotation: -shakingStartFrom,
          yoyo: true,
          // the duration/speed of shaking can be different what makes it nicer
          duration: gsap.utils.random([1, 1.5, 2], true),
          ease: 'none',
          repeat: -1,
          repeatRefresh: true
        }
      );
    } else {
      timeline.clear();
      timeline.to(`#${id}`, { rotation: 0 });
    }
  }, [shake]);

  return timeline;
};

export default useShakingAnimation;
