import React from 'react';
import { useSnackbar } from 'notistack';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import {
  getFallingComponent,
  getFullSample
} from '../functions/componentViewValues';
import ReactFallingEmojisProps from '../interfaces/ReactFallingEmojisProps';

interface ComponentViewProps {
  fallingEmojisProps: ReactFallingEmojisProps;
}

const ComponentView: React.FC<ComponentViewProps> = ({
  fallingEmojisProps
}: ComponentViewProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleCopyAll = () => {
    navigator.clipboard.writeText(getFullSample(fallingEmojisProps));
    enqueueSnackbar('Preview copied.', {
      variant: 'success',
      autoHideDuration: 2000
    });
  };

  const handleCopyFallingComponent = () => {
    navigator.clipboard.writeText(getFallingComponent(fallingEmojisProps));
    enqueueSnackbar('Component copied.', {
      variant: 'success',
      autoHideDuration: 2000
    });
  };

  return (
    <Container id='component-view-container'>
      <Typography variant='h4' color='textSecondary'>
        Component preview:
      </Typography>
      <SyntaxHighlighter language='jsx' showLineNumbers>
        {getFullSample(fallingEmojisProps)}
      </SyntaxHighlighter>
      <Button
        variant='contained'
        color='primary'
        style={{ color: '#fff', marginRight: '.5rem' }}
        onClick={handleCopyAll}
      >
        Copy All
      </Button>
      <Button
        variant='contained'
        color='primary'
        style={{ color: '#fff' }}
        onClick={handleCopyFallingComponent}
      >
        Copy Component
      </Button>
    </Container>
  );
};

export default ComponentView;
