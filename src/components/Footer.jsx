import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/kamal-2006', name: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/kamalesh-k-ab11572b2', name: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:kamaleshkamales006@gmail.com', name: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-panel">
          <div className="footer-main">
            <div className="footer-brand">
              <p className="footer-kicker">Portfolio</p>
              <h3 className="brand-name">KAMALESH K</h3>
            </div>

            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} KAMALESH K. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
