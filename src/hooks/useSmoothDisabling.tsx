import { useEffect } from 'react';
import gsap from 'gsap';

interface smoothDisablingProps {
  // timeline what's gonna be disabled or enabled
  timelines: Array<gsap.core.Timeline>;
  // the id or class of element what's gonna be disabled
  element: string;
  // if disable is getting true then the useEffect getting triggered
  disable: boolean;
}

const useSmoothDisabling = ({
  timelines,
  element,
  disable
}: smoothDisablingProps) => {
  useEffect(() => {
    if (disable) {
      gsap
        .to(element, {
          opacity: 0,
          ease: 'none',
          paused: true,
          duration: 2
        })
        .play()
        .then(() => {
          timelines.forEach((tl) => {
            tl.pause();
          });
        });
    } else {
      timelines.forEach((tl) => {
        if (tl.paused()) {
          tl.restart();
        }
      });
      gsap
        .to(element, {
          opacity: 1,
          ease: 'none',
          paused: true,
          duration: 2,
          onUpdate: () => {
            timelines.forEach((tl) => {
              if (tl.paused()) {
                tl.resume();
              }
            });
          }
        })
        .play();
    }
  }, [disable]);
};

export default useSmoothDisabling;
