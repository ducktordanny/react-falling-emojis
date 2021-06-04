import gsap from 'gsap';

interface AnimationProps {
  id: string;
  speed?: number; // seconds
  windowHeight: number;
  windowWidth: number;
}

const useFallingAnimation = ({
  id,
  speed = 4,
  windowHeight,
  windowWidth
}: AnimationProps) => {
  gsap.fromTo(
    `#${id}`,
    { y: -100, x: gsap.utils.random(-50, windowWidth + 50) },
    {
      y: windowHeight + 100,
      x: gsap.utils.random(-50, windowWidth + 50),
      duration: speed,
      delay: gsap.utils.random(0, speed),
      repeat: -1
    }
  );
};

export default useFallingAnimation;
