import React from 'react';

const InstallationLabel = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    console.log(`${text} is copied to clipboard...`);
  };

  return (
    <div>
      <label className='comment' htmlFor='comment'>
        # Installation:
      </label>
      <br />
      <label
        id='npm'
        className='shell'
        htmlFor='shell'
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
        onClick={() => copyToClipboard('yarn add react-falling-emojis')}
      >
        yarn add react-falling-emojis
      </label>
      <br />
    </div>
  );
};

export default InstallationLabel;
