import React from 'react';

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
    icon: "🧠"
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
    icon: "⚡"
  },
  {
    title: "Big Data Crime Analysis",
    description: "Architecture Hadoop pour l'analyse de données criminelles en temps réel avec visualisation interactive.",
    tags: ["Hadoop", "R", "Big Data", "Analytics"],
    color: "blue",
    icon: "🔍"
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
