import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-title">
            FREDDY.DEV
          </div>
          <div className="footer-links">
            <a href="https://github.com/OUEDRAOGOFred" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/freddy-ouedraogo-9bb809293/" className="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/cv-freddy-ouedraogo.pdf" className="footer-link" download>CV (PDF)</a>
          </div>
          <p className="footer-copyright">
            © 2025 Freddy Ouedraogo. All rights reserved.
          </p>
        </div>
      </div>
      <div className="footer-glow-line"></div>
      <div className="footer-glow-vertical"></div>
    </footer>
  );
};
