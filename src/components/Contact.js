import React, { useState } from 'react';

// Icônes SVG professionnelles
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.42 21.54 20.83 21.04 20.76C15.63 20.1 11.2 15.67 10.54 10.26C10.47 9.76 10.88 9.3 11.38 9.3H14.38C14.88 9.3 15.3 9.72 15.31 10.22C15.38 11.82 15.83 13.33 16.58 14.67C16.75 14.96 16.68 15.35 16.4 15.56L14.21 17.21C15.38 19.36 17.14 21.12 19.29 22.29L20.94 20.1C21.15 19.82 21.54 19.75 21.83 19.92C23.17 20.67 24.68 21.12 26.28 21.19C26.78 21.2 27.2 21.62 27.2 22.12V25.12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="2" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi du formulaire via mailto
    const subject = encodeURIComponent('Contact via portfolio');
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    window.location.href = `mailto:freddy.ouedraogo@2ie-edu.org?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title" data-aos="fade-up">
          Contact
        </h2>
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-card" data-aos="fade-right">
            <h3 className="contact-card-title contact-green">
              Let's Connect
            </h3>
            <div className="contact-info-list">
              <ContactItem icon={<PhoneIcon />} title="Téléphone" content="+226 73 51 44 91" />
              <ContactItem icon={<EmailIcon />} title="Email" content="freddy.ouedraogo@2ie-edu.org" />
              <ContactItem icon={<LocationIcon />} title="Localisation" content="Ouagadougou, Burkina Faso" />
            </div>
            <div className="contact-social">
              <h4 className="contact-social-title contact-blue">Social Links</h4>
              <div className="contact-social-links">
                <SocialLink href="https://github.com/OUEDRAOGOFred" icon="fab fa-github" />
                <SocialLink href="https://www.linkedin.com/in/freddy-ouedraogo-9bb809293/" icon="fab fa-linkedin" />
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-card" data-aos="fade-left">
            <div className="contact-form-group">
              <label className="contact-label contact-green">Nom</label>
              <input
                type="text"
                className="contact-input contact-green-border"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="contact-form-group">
              <label className="contact-label contact-blue">Email</label>
              <input
                type="email"
                className="contact-input contact-blue-border"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="contact-form-group">
              <label className="contact-label contact-purple">Message</label>
              <textarea
                className="contact-input contact-purple-border contact-textarea"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">ENVOYER MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="contact-item">
    <span className="contact-item-icon">{icon}</span>
    <div>
      <h4 className="contact-item-title">{title}</h4>
      <p className="contact-item-content">{content}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} className="contact-social-link">
    <i className={icon}></i>
  </a>
);
