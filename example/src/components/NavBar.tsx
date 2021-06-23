import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from '../hooks/useStyles';

interface NavBarProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonName?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  onClick,
  buttonName
}: NavBarProps) => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.navBarTitle}>
          React Falling Emojis
        </Typography>
        <Button
          variant='contained'
          color='default'
          onClick={(e) => (onClick ? onClick(e) : '')}
        >
          {buttonName ? buttonName : 'Click Me'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
