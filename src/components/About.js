import React from 'react';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title" data-aos="fade-up">
          À Propos de Moi
        </h2>
        <div className="about-grid">
          <div className="about-card" data-aos="fade-right">
            <h3 className="about-card-title about-green">Profil Professionnel</h3>
            <p className="about-desc">
              Élève ingénieur passionné en Informatique et en Intelligence Artificielle, spécialisé dans le Data Engineering. 
              Mon expertise s'étend de la manipulation de données complexes à l'implémentation 
              d'algorithmes de Machine Learning innovants. J'ai également une solide expérience en développement web moderne.
            </p>
            <div className="about-skills">
              {['Python', 'SQL', 'Machine Learning', 'Big Data'].map((skill) => (
                <span key={skill} className="about-skill-chip about-green-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="about-card" data-aos="fade-left">
            <h3 className="about-card-title about-blue">Formation</h3>
            <div className="about-formation-list">
              <div className="about-formation about-blue-border">
                <h4 className="about-formation-title">Master - Ingénierie AI & Applications</h4>
                <p className="about-formation-school">2iE - Institut International d'Ingénierie</p>
                <p className="about-blue">2024 - En cours</p>
              </div>
              <div className="about-formation about-purple-border">
                <h4 className="about-formation-title">Classes Préparatoires</h4>
                <p className="about-formation-school">2iE - Institut International d'Ingénierie</p>
                <p className="about-purple">2022 - 2024</p>
              </div>
              <div className="about-formation about-green-border">
                <h4 className="about-formation-title">Baccalauréat Série D</h4>
                <p className="about-formation-school">Ecole Complexe Scolaire Monseigneur André Dupont</p>
                <p className="about-green">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
