// import gsap from 'gsap';

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
  console.log(id, speed, windowHeight, windowWidth);
  return null;
};

export default useFallingAnimation;
