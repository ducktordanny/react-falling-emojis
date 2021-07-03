import React, { useEffect } from 'react';
import gsap from 'gsap';
import './styles.css';

interface Props {}

const Footer: React.FC<Props> = () => {
  useEffect(() => {
    gsap.fromTo(
      'footer',
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.25 }
    );
  }, []);

  return (
    <footer>
      <h1>ReactFallingEmojis</h1>
      <p>
        Made by <b>DucktorDanny</b>
      </p>
      <p>Font named Barlow by Jeremy Tribby</p>
      <p>Icon designer: Sean Maldjian</p>
    </footer>
  );
};

export default Footer;
