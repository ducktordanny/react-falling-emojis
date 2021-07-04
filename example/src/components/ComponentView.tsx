import React from 'react';
import Container from '@material-ui/core/Container';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import defaultFallingProps from '../defaultFallingProps';
import ReactFallingEmojisProps from '../interfaces/ReactFallingEmojisProps';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';

interface ComponentViewProps {
  fallingEmojisProps: ReactFallingEmojisProps;
}

const ComponentView: React.FC<ComponentViewProps> = ({
  fallingEmojisProps
}: ComponentViewProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const getFallingEmojisSample = ({
    emojis,
    shake,
    reverse,
    repeat,
    density,
    speed,
    size,
    opacity
  }: ReactFallingEmojisProps) =>
    `import React from 'react';
import FallingEmojis from 'react-falling-emojis';

const App = () => (
  <FallingEmojis
    emojis={['${emojis.join(`', '`)}']}${shake === true ? '\n    shake' : ''}${
      reverse === true ? '\n    reverse' : ''
    }${
      repeat !== defaultFallingProps.repeat ? `\n    repeat={${repeat}}` : ''
    }${
      density !== defaultFallingProps.density
        ? `\n    density={${density}}`
        : ''
    }${speed !== defaultFallingProps.speed ? `\n    speed={${speed}}` : ''}${
      size !== defaultFallingProps.size ? `\n    size={${size}}` : ''
    }${
      opacity !== defaultFallingProps.opacity
        ? `\n    opacity={${opacity}}`
        : ''
    }
  />
);
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(getFallingEmojisSample(fallingEmojisProps));
    enqueueSnackbar('Component copied.', {
      variant: 'success',
      autoHideDuration: 2000
    });
  };

  return (
    <Container>
      <SyntaxHighlighter language='jsx' showLineNumbers>
        {getFallingEmojisSample(fallingEmojisProps)}
      </SyntaxHighlighter>
      <Button
        variant='contained'
        color='primary'
        style={{ color: '#fff', marginBottom: '2rem' }}
        onClick={handleCopy}
      >
        Copy
      </Button>
    </Container>
  );
};

export default ComponentView;
