import { useEffect } from 'react';
import gsap from 'gsap';

interface slideUpProps {
  targets: gsap.TweenTarget;
  from: gsap.TweenValue;
  to: gsap.TweenValue;
  duration?: gsap.TweenValue;
}

const useSlideUpAnimation = ({ targets, from, to, duration }: slideUpProps) => {
  useEffect(() => {
    gsap.fromTo(
      targets,
      { y: from, opacity: 0 },
      { y: to, opacity: 1, duration: duration! }
    );
  }, []); // eslint-disable-line
};

export default useSlideUpAnimation;
