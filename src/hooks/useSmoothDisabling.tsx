import { useEffect } from 'react';
import gsap from 'gsap';

interface smoothDisablingProps {
  // timeline what's gonna be disabled or enabled
  timeline: gsap.core.Timeline;
  // the id or class of element what's gonna be disabled
  element: string;
  // if disable is getting true then the useEffect getting triggered
  disable: boolean;
}

const useSmoothDisabling = ({
  timeline,
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
          timeline.pause();
        });
    } else {
      if (timeline.paused()) {
        timeline.restart();
      }
      gsap
        .to(element, {
          opacity: 1,
          ease: 'none',
          paused: true,
          duration: 2,
          onUpdate: () => {
            if (timeline.paused()) {
              timeline.resume();
            }
          }
        })
        .play();
    }
  }, [disable]);
};

export default useSmoothDisabling;
