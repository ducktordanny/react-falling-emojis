import { useMemo, useEffect } from 'react';
import gsap from 'gsap';

interface shakingAnimationProps {
  id: string;
  shake: boolean;
}

const useShakingAnimation = ({ id, shake }: shakingAnimationProps) => {
  const shakeTimeline = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      }),
    []
  );

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
};

export default useShakingAnimation;
