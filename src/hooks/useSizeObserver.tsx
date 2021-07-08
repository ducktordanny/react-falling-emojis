import { useEffect } from 'react';
import gsap from 'gsap';

const useSizeObserver = (size: number, className: string) => {
  useEffect(() => {
    gsap.set(className, {
      fontSize: `${size}px`
    });
  }, [size]);
};

export default useSizeObserver;
