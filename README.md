# react-falling-emojis

> Choose your emojis and make a rain with them.

[![NPM](https://img.shields.io/npm/v/react-falling-emojis.svg)](https://www.npmjs.com/package/react-falling-emojis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-falling-emojis
# or
yarn add react-falling-emojis
```

## Usage

```jsx
import FallingEmojis from 'react-falling-emojis';

const App = () => <FallingEmojis emojis={['⚽️', '🦆', '🎉', '👻']} />;

export default App;
```

### You can also set your own preferences with props. Currently the following props are available:

| Name          | Type    | Description                                                                                                                                                                                 |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| density       | number  | An emoji how many times could be represented. It gives a better look to the rain with cloning emojis. It could be useful when you don't have a lot of element. Important: it can't be null. |
| speed         | number  | How its name also says you can set how fast it should reach the bottom of the screen.                                                                                                       |
| disable       | boolean | If it's true then the falling animation stops.                                                                                                                                              |
| resumeRestart | boolean | If it's true after re-enabling it's gonna continue the falling from that position where it was on the moment of disabling.                                                                  |
| size          | number  | You can set the size of elements (in pixels).                                                                                                                                               |

### Some examples:

```jsx
import FallingEmojis from 'react-falling-emojis';

const App = () => (
  <FallingEmojis
    emojis={['⚽️', '🦆', '🎉', '👻']}
    speed={10}
    density={10}
    shake={true}
    size={50}
  />
);

export default App;
```

```jsx
import FallingEmojis from 'react-falling-emojis';

const App = () => (
  <FallingEmojis emojis={['⚽️', '🦆', '🎉', '👻']} speed={15} density={10} />
);

export default App;
```

If you notice any problems or you have any tips what could be included check out the github repo of react-falling-animation. (https://github.com/ducktorD/react-falling-emojis)

## License

MIT © [DucktorDanny](https://github.com/DucktorDanny)

## Made with:

- GSAP (https://greensock.com/)
- create-react-library with typescript (https://www.npmjs.com/package/create-react-library)
