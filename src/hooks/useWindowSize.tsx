import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return [height, width] as const;
};

export default useWindowSize;
