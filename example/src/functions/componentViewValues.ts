import ReactFallingEmojisProps from '../interfaces/ReactFallingEmojisProps';
import defaultFallingProps from './defaultFallingProps';

export const getFallingComponent = ({
  emojis,
  shake,
  reverse,
  repeat,
  density,
  speed,
  size,
  opacity
}: ReactFallingEmojisProps) =>
  `<FallingEmojis
    emojis={['${emojis.join(`', '`)}']}${shake === true ? '\n    shake' : ''}${
    reverse === true ? '\n    reverse' : ''
  }${repeat !== defaultFallingProps.repeat ? `\n    repeat={${repeat}}` : ''}${
    density !== defaultFallingProps.density ? `\n    density={${density}}` : ''
  }${speed !== defaultFallingProps.speed ? `\n    speed={${speed}}` : ''}${
    size !== defaultFallingProps.size ? `\n    size={${size}}` : ''
  }${
    opacity !== defaultFallingProps.opacity ? `\n    opacity={${opacity}}` : ''
  }
  />`;

export const getFullSample = (fallingEmojisProps: ReactFallingEmojisProps) =>
  `import React from 'react';
import FallingEmojis from 'react-falling-emojis';

const App = () => (
  ${getFallingComponent(fallingEmojisProps)}
);

export default App;
`;
