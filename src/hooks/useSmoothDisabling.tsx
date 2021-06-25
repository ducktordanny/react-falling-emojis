import { useEffect } from 'react';
import gsap from 'gsap';

import SmoothDisablingProps from '../interfaces/SmoothDisablingProps'; // eslint-disable-line

const useSmoothDisabling = ({
  timelines,
  element,
  disable
}: SmoothDisablingProps) => {
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
