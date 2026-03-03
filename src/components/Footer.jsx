import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/kamal-2006', name: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/kamalesh-k-ab11572b2', name: 'LinkedIn' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/u/w4Cceb/', name: 'LeetCode' },
    { icon: <FaEnvelope />, href: 'mailto:kamaleshkamales006@gmail.com', name: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="gh-footer">
      <div className="gh-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-brand">
              <span className="brand-icon">💻</span>
              <h3>Kamalesh<span className="brand-accent">.dev</span></h3>
            </div>
            <p className="footer-tagline gh-text-muted">
              Passionate Full Stack Developer crafting elegant solutions to complex problems.
            </p>
            <p className="footer-tagline gh-text-muted">
              Building the web, one component at a time.
            </p>
          </div>

          <div className="footer-section footer-navigation">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-connect">
            <h4 className="footer-heading">Connect With Me</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="footer-contact">
              <a href="mailto:kamaleshkamales006@gmail.com" className="footer-email">
                kamaleshkamales006@gmail.com
              </a>
              <p className="footer-location gh-text-muted">Tiruppur, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright gh-text-muted">
            © {currentYear} Kamalesh K. All rights reserved.
          </p>
          <p className="footer-made-with gh-text-muted">
            Made with <FaHeart className="heart-icon" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
