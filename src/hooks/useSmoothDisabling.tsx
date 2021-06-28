import { useEffect } from 'react';
import gsap from 'gsap';

import SmoothDisablingProps from '../interfaces/SmoothDisablingProps'; // eslint-disable-line

const useSmoothDisabling = ({
  timelines,
  element,
  disable,
  opacity
}: SmoothDisablingProps) => {
  useEffect(() => {
    if (disable) {
      // disable fade out
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
      // restart every falling animation
      timelines.forEach((tl) => {
        if (tl.paused()) {
          tl.restart();
        }
      });
      // fade in after restart
      gsap
        .to(element, {
          opacity,
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
  }, [disable, opacity]);
};

export default useSmoothDisabling;
