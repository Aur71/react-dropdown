import React from 'react';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info"></article>
        <article className="hero-img"></article>
      </div>
    </section>
  );
};

export default Hero;
