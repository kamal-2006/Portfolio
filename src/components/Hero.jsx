import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ onViewResume }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Side - Professional Image */}
        <motion.div
          className="hero-image-section"
          variants={imageVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img
                src="/images/profile.jpg"
                alt="Kamalesh K"
                className="hero-image"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Kamalesh+K&size=500&background=1e6fdd&color=fff&bold=true&font-size=0.35";
                }}
              />
            </div>
            <div className="image-glow"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Name */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            KAMALESH K
          </motion.h1>

          {/* Professional Summary */}
          <motion.p className="hero-summary" variants={itemVariants}>
            Computer Science and Engineering student with strong foundations in data structures, algorithms, and object-oriented programming. Experienced in building scalable web applications using modern technologies. Passionate about solving real-world problems and contributing effectively in collaborative environments.
          </motion.p>

          {/* Contact Information */}
          <motion.div className="hero-contact-section" variants={itemVariants}>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Tiruppur, Tamil Nadu</span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 6369026251</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:kamaleshkamales006@gmail.com">kamaleshkamales006@gmail.com</a>
            </div>
          </motion.div>

          {/* Education Highlight */}
          <motion.div className="hero-education" variants={itemVariants}>
            <h3 className="education-title">Education</h3>
            <p className="education-text">
              Bachelor of Engineering in Computer Science and Engineering
            </p>
            <p className="education-institution">
              Bannari Amman Institute of Technology, Sathyamangalam (2023 – 2027)
            </p>
            <p className="education-cgpa">CGPA: 9.15</p>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-value">400+</span>
              <span className="stat-label">LeetCode Problems</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">2</span>
              <span className="stat-label">NPTEL Certificates</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div className="hero-cta-section" variants={itemVariants}>
            <button className="cta-button cta-primary" onClick={onViewResume}>
              <FaFileAlt /> View Resume
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div className="hero-social-links" variants={itemVariants}>
            <a 
              href="https://github.com/kamal-2006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/kamalesh-k-ab11572b2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:kamaleshkamales006@gmail.com"
              className="social-link"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
