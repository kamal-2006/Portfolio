import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/kamal-2006', name: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/kamalesh-k-ab11572b2', name: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:kamaleshkamales006@gmail.com', name: 'Email' },
    { icon: <SiLeetcode />, href: 'https://leetcode.com/u/w4Cceb/', name: 'LeetCode' },
    { icon: <SiHackerrank />, href: 'https://www.hackerrank.com/profile/kamalesh_cs231', name: 'HackerRank' },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-top-shape"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h3 className="footer-logo">
              Kamalesh<span className="gradient-text">.K</span>
            </h3>
            <p className="footer-tagline">
              Crafting digital experiences, one line of code at a time.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="footer-quote">
            <p>"The best way to predict the future is to create it."</p>
            <span>- Abraham Lincoln</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Kamalesh K. All rights reserved. Made with <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
