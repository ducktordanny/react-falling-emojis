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

| Name    | Type     | Default | Description                                                                                                                                                                                                                           |
| ------- | -------- | :-----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| emojis  | string[] |    -    | **Required!** Here you can specify your falling elements what should be emojis (win: ctrl + ; mac: control + command + space), but it also could be any other texts. You have to include this prop otherwise you're gonna get errors. |
| density | number   |    1    | An emoji how many times could be represented. It gives a better look to the rain with cloning emojis. It could be useful when you don't have a lot of element. **Important**: It cannot be null or negative.                          |
| speed   | number   |   10    | How its name also says you can set how fast it should reach the bottom of the screen.                                                                                                                                                 |
| disable | boolean  |  false  | If it's included (or true) then the falling animation stops with a fade out animation.                                                                                                                                                |
| size    | number   |   30    | You can set the size of elements (in pixels).                                                                                                                                                                                         |
| reverse | boolean  |  false  | If you include this prop (or its value is true) the emjis/elements are gonna fly from the bottom to top instead of falling.                                                                                                           |
| opacity | number   |    1    | You are able to change the opacity of elements. **Important**: It must be between 0 and 1, otherwise you will get an error.                                                                                                           |

### Some examples:

```jsx
import FallingEmojis from 'react-falling-emojis';

const App = () => (
  <FallingEmojis
    emojis={['⚽️', '🦆', '🎉', '👻']}
    speed={10}
    density={5}
    size={50}
    shake
  />
);

export default App;
```

```jsx
import FallingEmojis from 'react-falling-emojis';

const App = () => (
  <FallingEmojis
    emojis={['⚽️', '🦆', '🎉', '👻']}
    speed={15}
    density={10}
    reverse
  />
);

export default App;
```

If you notice any problems or you have any tips what could be included check out the github repo of react-falling-animation. (https://github.com/ducktorD/react-falling-emojis)

## License

MIT © [DucktorDanny](https://github.com/DucktorDanny)

## Made with:

- GSAP (https://greensock.com/)
- create-react-library with typescript (https://www.npmjs.com/package/create-react-library)
