import React from 'react';
import useSlideUpAnimation from '../../hooks/useSlideUpAnimation';
import './styles.css';

interface FooterProps {
  version?: string;
}

const Footer: React.FC<FooterProps> = ({ version }) => {
  useSlideUpAnimation({
    targets: 'footer',
    from: 400,
    to: 0,
    duration: 1.25
  });

  return (
    <footer>
      <h1>
        ReactFallingEmojis <label>{version!}</label>
      </h1>
      <p>
        Made by <b>DucktorDanny</b>
      </p>
      <p>Font named Barlow by Jeremy Tribby</p>
      <p>Icon designer: Sean Maldjian</p>
    </footer>
  );
};

export default Footer;
