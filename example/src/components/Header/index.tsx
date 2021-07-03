import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import ReactFallingEmojisLogo from '../../assets/react-falling-emojis-logo.svg';
import InstallationLabel from './InstallationLabel';
import gsap from 'gsap';
import './index.css';

interface HeaderProps {
  buttonLabel: string;
  onEnable: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({
  buttonLabel,
  onEnable
}: HeaderProps) => {
  useEffect(() => {
    gsap.fromTo('#rfe-logo', { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      '.slogan-container',
      { x: 400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      '.installation-container',
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      '.enable-button',
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <header>
      <img
        id='rfe-logo'
        src={ReactFallingEmojisLogo}
        alt='ReactFallingEmojis'
      />
      <section>
        <div className='slogan-container'>
          <h1>Choose your emojis and make a rain with them!</h1>
          <p>
            It can also be varied in many ways via React props. Enable it and
            try your own settings below.
          </p>
        </div>
        <div className='installation-container'>
          <InstallationLabel />
          <Button
            className='github-button'
            href='https://github.com/ducktordanny/react-falling-emojis'
          >
            <GitHubIcon />
            <span>Github repo</span>
          </Button>
        </div>
      </section>
      <Button
        variant='outlined'
        className='enable-button'
        onClick={(e) => onEnable!(e)}
      >
        {buttonLabel}
      </Button>
    </header>
  );
};

export default Header;
