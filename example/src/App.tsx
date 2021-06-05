import React from 'react';

import { ExampleComponent } from 'react-falling-emojis';
import 'react-falling-emojis/dist/index.css';

const App = () => {
  return (
    <ExampleComponent emojis={['🐶', '😂', '🤔', '🎉', '🦆', '🐶']} speed={5} />
  );
};

export default App;
