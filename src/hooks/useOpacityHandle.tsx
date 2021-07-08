import { useEffect } from 'react';
import gsap from 'gsap';

const useOpacityHandle = (
  opacity: number,
  disable: boolean,
  className: string
) => {
  useEffect(() => {
    if (opacity > 1 || opacity < 0) {
      console.error(
        `[React Falling Emojis]: Opacity's value has to be between 0 and 1`
      );
      return;
    }
    if (!disable) {
      gsap.to(className, {
        opacity
      });
    }
  }, [opacity, disable]);
};

export default useOpacityHandle;
