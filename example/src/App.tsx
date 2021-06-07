import React, { useEffect, useState } from 'react';

import { ExampleComponent } from 'react-falling-emojis';
import 'react-falling-emojis/dist/index.css';

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
    console.log(fallingEmojiSwitch ? 'Stop' : 'Start');
  }, [fallingEmojiSwitch]);

  return (
    <ExampleComponent
      emojis={['@ducktor.danny', '🦆']}
      speed={10}
      density={10}
      disable={fallingEmojiSwitch}
      shake={false}
    />
  );
};

export default App;
