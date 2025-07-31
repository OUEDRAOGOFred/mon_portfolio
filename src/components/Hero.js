import React from 'react';
import TypeWriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title" data-aos="fade-down">
          FREDDY OUEDRAOGO
        </h1>
        <div className="hero-typewriter" data-aos="fade-up" data-aos-delay="200">
          <TypeWriter
            options={{
              strings: [
                'Data Engineer',
                'AI Engineer',
                'Big Data Specialist',
                'Machine Learning Expert'
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="hero-desc" data-aos="fade-up" data-aos-delay="400">
          Transformant des données complexes en solutions innovantes
        </p>
        <div className="hero-btns" data-aos="fade-up" data-aos-delay="600">
          <a href="#projects" className="btn-primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <svg className="hero-scroll-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
