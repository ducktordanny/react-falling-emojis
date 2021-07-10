import { useEffect } from 'react';
import gsap from 'gsap';

import SmoothDisablingProps from '../interfaces/SmoothDisablingProps'; // eslint-disable-line

/**
 * It's listening for disable's changing and it makes a nice animation and also pause timelines if it's true
 */
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
          duration: 1.25
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
          duration: 1.25,
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
