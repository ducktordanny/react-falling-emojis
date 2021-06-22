import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

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
        <Typography variant='h6' className={classes.title}>
          React Falling Emojis
        </Typography>
        <Button color='inherit' onClick={(e) => (onClick ? onClick(e) : '')}>
          {buttonName ? buttonName : 'Click Me'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
