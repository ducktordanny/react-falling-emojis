import React, { useEffect, useState } from 'react';

import { ExampleComponent } from 'react-falling-emojis';
import 'react-falling-emojis/dist/index.css';

const App = () => {
  const [fallingEmojiSwitch, setFallingEmojiSwitch] = useState<boolean>(false);
  const [shakeControl, setShakeControl] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space') {
        setFallingEmojiSwitch(false);
        setShakeControl(true);
      } else if (e.code === 'Enter') {
        // setFallingEmojiSwitch(false);
        setShakeControl(false);
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
      emojis={['🐶', '😂', '🤔', '🎉', '🦆', '🐶']}
      speed={5}
      disable={fallingEmojiSwitch}
      shake={shakeControl}
    />
  );
};

export default App;

// useEffect(() => {
//   window.addEventListener('keyup', (e) => {
//     if (e.code === 'Space') {
//       animationTimeline.pause();
//     } else if (e.code === 'Enter') {
//       animationTimeline.play();
//     }
//   });

//   return () => {
//     window.removeEventListener('keyup', () => {
//       console.log('removed');
//     });
//   };
// }, [animationTimeline]);
