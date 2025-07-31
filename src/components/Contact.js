import React, { useState } from 'react';

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
              <ContactItem icon="📱" title="Téléphone" content="+226 73 51 44 91" />
              <ContactItem icon="📧" title="Email" content="freddy.ouedraogo@2ie-edu.org" />
              <ContactItem icon="🌍" title="Localisation" content="Ouagadougou, Burkina Faso" />
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
