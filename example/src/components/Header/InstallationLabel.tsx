import React from 'react';
import { useSnackbar } from 'notistack';

const InstallationLabel = () => {
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    const type = text.split(' ')[0] === 'npm' ? 'Npm' : 'Yarn';
    enqueueSnackbar(`${type} installation copied.`, {
      variant: 'success',
      autoHideDuration: 2000
    });
  };

  return (
    <div>
      <label className='comment' htmlFor='comment'>
        # Installation (click to copy):
      </label>
      <br />
      <label
        id='npm'
        className='shell'
        htmlFor='shell'
        title='Click to copy.'
        onClick={() => copyToClipboard('npm install react-falling-emojis')}
      >
        npm install react-falling-emojis
      </label>
      <br />
      <label className='comment' htmlFor='comment'>
        # or
      </label>
      <br />
      <label
        id='yarn'
        className='shell'
        htmlFor='shell'
        title='Click to copy.'
        onClick={() => copyToClipboard('yarn add react-falling-emojis')}
      >
        yarn add react-falling-emojis
      </label>
      <br />
    </div>
  );
};

export default InstallationLabel;
