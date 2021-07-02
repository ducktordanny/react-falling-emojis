import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ReactFallingEmojisLogo from '../assets/react-falling-emojis-logo.svg';

// import useStyles from '../hooks/useStyles';

interface NavBarProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonLabel?: string;
}

const gradientBarImage = {
  background:
    'linear-gradient(111.34deg, #B82949 0%, rgba(184, 41, 73, 0) 100%), #E9B84C',
  height: '100vh',
  width: '100%'
};

const NavBar: React.FC<NavBarProps> = ({
  onClick,
  buttonLabel
}: NavBarProps) => {
  // const classes = useStyles();

  return (
    <AppBar position='static'>
      {/* <Toolbar>
        <Typography
          color='textPrimary'
          variant='h6'
          className={classes.navBarTitle}
        >
          React Falling Emojis
        </Typography>
        <Button
          variant='outlined'
          style={{ color: 'white', border: '1px solid white' }}
          onClick={(e) => (onClick ? onClick(e) : '')}
        >
          {buttonName ? buttonName : 'Click Me'}
        </Button>
      </Toolbar> */}
      <Box style={gradientBarImage}>
        <img
          style={{ height: '30px', margin: '30px' }}
          src={ReactFallingEmojisLogo}
          alt='ReactFallingEmojis'
        />

        {/* Slogan container */}
        <Box>
          <Typography
            variant='h3'
            color='textPrimary'
            style={{ fontWeight: 'bold' }}
          >
            Choose your emojis and make a rain with them.
          </Typography>
        </Box>

        {/* Installation */}
        <Box></Box>

        <Button
          style={{ color: 'white', border: '1px solid white' }}
          onClick={(e) => onClick!(e)}
        >
          {buttonLabel}
        </Button>
      </Box>
    </AppBar>
  );
};

export default NavBar;
