import React from 'react';

// Icônes SVG professionnelles
const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.5 2 6 4.5 6 7C6 8 6.5 9 7 9.5C6.5 10 6 11 6 12C6 13 6.5 14 7 14.5C6.5 15 6 16 6 17C6 19.5 8.5 22 12 22C15.5 22 18 19.5 18 17C18 16 17.5 15 17 14.5C17.5 14 18 13 18 12C18 11 17.5 10 17 9.5C17.5 9 18 8 18 7C18 4.5 15.5 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 10C9.5 10 10.5 11 12 11C13.5 11 14.5 10 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="10" cy="8" r="1" fill="currentColor"/>
    <circle cx="14" cy="8" r="1" fill="currentColor"/>
  </svg>
);

const LungsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V9M12 9C12 9 9 9 7 11C5 13 4 15 4 18C4 19.5 5 21 6.5 21C8 21 9 20 9 18.5V12C9 10.5 10.5 9 12 9ZM12 9C12 9 15 9 17 11C19 13 20 15 20 18C20 19.5 19 21 17.5 21C16 21 15 20 15 18.5V12C15 10.5 13.5 9 12 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EnergyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 8V14M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const projects = [
  {
    title: "HERMES_AI",
    description: (
      <>
        <strong>Une application web africaine, née de la passion et du travail acharné, pour révolutionner la recherche !</strong><br /><br />
        Après des semaines de conception, de code et de tests intensifs, je suis fier de vous présenter <b>HERMES</b>, un outil pensé par deux étudiants chercheurs africain pour faciliter le travail de la communauté scientifique.<br /><br />
        <b>HERMES</b> permet de générer en quelques clics des résumés précis, détaillés et multi échelles de vos articles scientifiques.<br />
        <a href="https://hermes-ai-p8um.onrender.com/" target="_blank" rel="noopener noreferrer" style={{color:'#00fff7',fontWeight:'bold',textDecoration:'underline'}}>Essayez là ici : https://hermes-ai-p8um.onrender.com/</a><br /><br />
        <b>HERMES, c’est plus qu’une application :</b><br />
        <ul style={{margin:'10px 0 0 18px',padding:0}}>
          <li>• Une solution concrète pour gagner du temps dans vos lectures scientifiques</li>
          <li>• Un outil pensé par un passionné pour les chercheurs du continent et du monde entier</li>
          <li>• Une fierté africaine construite avec rigueur, innovation et détermination</li>
        </ul>
      </>
    ),
    tags: ["React", "IA", "Web App", "Résumé scientifique"],
    color: "blue",
    icon: <BrainIcon />
  },
  {
    title: "Détection de la Pneumonie",
    description: (
      <>
        <strong>IA Médicale — Détection Pneumonie</strong><br /><br />
        Solution d'intelligence artificielle avancée utilisant des réseaux de neurones convolutionnels pour la détection automatique de pneumonie à partir d'images radiographiques thoraciques.<br /><br />
        Ce projet représente une application concrète de l'apprentissage profond dans le domaine médical, permettant d'assister les professionnels de santé dans le diagnostic rapide et précis de la pneumonie.<br /><br />
        <a href="https://ouedraogofred-projet-ml-avanc--app-9qbos6.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{color:'#00fff7',fontWeight:'bold',textDecoration:'underline'}}>Essayez l'application en ligne</a>
      </>
    ),
    tags: ["Deep Learning", "CNN", "Streamlit", "IA Médicale", "Python"],
    color: "green",
    icon: <LungsIcon />
  },
  {
    title: "Gestion intelligente de la consommation énergétique",
    description: (
      <>
        <strong>Optimisation énergétique résidentielle par Machine Learning</strong><br /><br />
        La gestion intelligente de la consommation énergétique est un enjeu majeur dans un contexte de transition énergétique, de hausse des coûts et de recherche d'efficacité domestique. À travers ce projet, nous exploitons un jeu de données provenant de capteurs installés dans une habitation résidentielle en Belgique, combiné à des données météorologiques horaires issues d'une station locale.<br /><br />
        Notre objectif est de concevoir un système capable non seulement de prédire la consommation énergétique à partir des conditions environnementales, mais également de comprendre les habitudes de consommation et de détecter des comportements anormaux ou inefficaces.<br /><br />
        <a href="https://ouedraogofred-projet-machine-learning-gest-app-streamlit-i9y2nr.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{color:'#00fff7',fontWeight:'bold',textDecoration:'underline'}}>Voir le projet en ligne</a>
      </>
    ),
    tags: ["Machine Learning", "Python", "Streamlit", "Énergie"],
    color: "green",
    icon: <EnergyIcon />
  },
  {
    title: "Big Data Crime Analysis",
    description: "Architecture Hadoop pour l'analyse de données criminelles en temps réel avec visualisation interactive.",
    tags: ["Hadoop", "R", "Big Data", "Analytics"],
    color: "blue",
    icon: <SearchIcon />
  },
  // Projet "Portfolio Futuriste" supprimé
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title" data-aos="fade-up">
          Projets Innovants
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`projects-card projects-${project.color}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`projects-icon projects-${project.color}`}>{project.icon}</div>
              <h3 className={`projects-card-title projects-${project.color}`}>{project.title}</h3>
              <p className="projects-desc">{project.description}</p>
              <div className="projects-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className={`projects-tag projects-${project.color}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
