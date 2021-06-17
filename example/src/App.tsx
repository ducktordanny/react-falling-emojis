import React, { useEffect, useState } from 'react';
import FallingEmojis from 'react-falling-emojis';

const App = () => {
  const [fallingEmojiSwitch, setFallingEmojiSwitch] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        setFallingEmojiSwitch(true);
      } else if (e.code === 'Enter') {
        setFallingEmojiSwitch(false);
      }
    });

    return () => {
      window.removeEventListener('keyup', () => {
        console.log('removed');
      });
    };
  }, []);

  useEffect(() => {
    console.log(fallingEmojiSwitch);
  }, [fallingEmojiSwitch]);

  return (
    <FallingEmojis
      emojis={['⚽️', '🦆', '🎉', '👻']}
      speed={5}
      density={1}
      shake={fallingEmojiSwitch}
      size={50}
    />
  );
};

export default App;
