import React, { useEffect, useState } from 'react';
import FallingEmojis from 'react-falling-emojis';

const App = () => {
  const [reverse, setReverse] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        setReverse(true);
      } else if (e.code === 'Enter') {
        setReverse(false);
      }
    });

    return () => {
      window.removeEventListener('keyup', () => {
        console.log('removed');
      });
    };
  }, []);

  useEffect(() => {
    console.log(reverse);
  }, [reverse]);

  return (
    <FallingEmojis
      emojis={['⚽️', '🦆', '🎉', '👻']}
      speed={10}
      density={5}
      reverse={reverse}
      shake
    />
  );
};

export default App;
