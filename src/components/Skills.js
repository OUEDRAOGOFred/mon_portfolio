import React from 'react';

const skills = [
  {
    category: 'Data Engineering',
    items: [
      { name: 'SQL', level: 90, icon: '🗃️' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'R', level: 80, icon: '📊' },
      { name: 'Hadoop', level: 75, icon: '🐘' },
    ],
    color: 'green'
  },
  {
    category: 'Machine Learning & IA',
    items: [
      { name: 'Machine Learning', level: 85, icon: '🤖' },
      { name: 'Deep Learning', level: 80, icon: '🧠' },
      { name: 'Data Analysis', level: 90, icon: '📈' },
      { name: 'Data Visualization', level: 85, icon: '📊' },
    ],
    color: 'blue'
  },
  {
    category: 'Web Development',
    items: [
      { name: 'JavaScript', level: 75, icon: '⚡' },
      { name: 'Node.js', level: 70, icon: '🟢' },
      { name: 'TypeScript', level: 70, icon: '🔷' },
      { name: 'React', level: 75, icon: '⚛️' },
    ],
    color: 'purple'
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title" data-aos="fade-up">
          Compétences Techniques
        </h2>
        <div className="skills-grid">
          {skills.map((skillSet, index) => (
            <div 
              key={skillSet.category}
              className={`skills-card skills-${skillSet.color}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="skills-card-title">{skillSet.category}</h3>
              <div className="skills-list">
                {skillSet.items.map((skill) => (
                  <div key={skill.name} className="skills-item">
                    <div className="skills-item-row">
                      <span className="skills-item-label">
                        {skill.icon} {skill.name}
                      </span>
                      <span className={`skills-item-level skills-${skillSet.color}`}>{skill.level}%</span>
                    </div>
                    <div className="skills-bar-bg">
                      <div 
                        className={`skills-bar skills-bar-${skillSet.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
