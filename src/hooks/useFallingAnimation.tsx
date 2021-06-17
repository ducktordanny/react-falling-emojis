import { useMemo, useEffect } from 'react';
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
  // const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);
  // const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const mainTimeline = useMemo(
    () =>
      gsap.timeline({
        repeat: -1,
        repeatRefresh: true
      }),
    []
  );

  // useEffect(() => {
  //   addEventListener('resize', () => {
  //     setWindowHeight(window.innerHeight);
  //     setWindowWidth(window.innerWidth);
  //   });

  //   return () => {
  //     removeEventListener('resize', () => {});
  //   };
  // }, []);

  useEffect(() => {
    const getRandomX = () => gsap.utils.random(0, window.innerWidth, true);

    const animateFrom = {
      y: -size,
      x: getRandomX(),
      repeatRefresh: true
    };

    const animateTo = {
      y: window.innerHeight + size,
      x: getRandomX(),
      repeatRefresh: true,
      onRepeat: () => {
        console.log(window.innerWidth);
      }
    };

    mainTimeline
      .fromTo(
        `#${id}`,
        { ...(reverse ? animateTo : animateFrom) },
        {
          ...(reverse ? animateFrom : animateTo),
          delay: gsap.utils.random(0, speed, true),
          duration: speed,
          ease: 'none',
          repeat: -1
        }
      )
      .play();

    return () => {
      // clean-up
      mainTimeline.clear();
    };
  }, [reverse]);

  // ! TEST LATER THE FOLLOWING:
  // is it gonna update immediately?
  useEffect(() => {
    mainTimeline.restart();
  }, [speed, size]);

  return mainTimeline;
};

export default useFallingAnimation;
