import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaFileAlt, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = ({ onViewResume }) => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Aspiring Full Stack Developer',
    'Tech Explorer',
    'Problem Solver'
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (index < currentText.length) {
          setTypedText(currentText.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (index > 0) {
          setTypedText(currentText.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRole((currentRole + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-image-container">
            <div className="profile-image-wrapper">
              <img 
                src="/images/profile.jpg" 
                alt="Kamalesh K" 
                className="profile-image"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Kamalesh+K&size=300&background=667eea&color=fff&bold=true&font-size=0.4";
                }}
              />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span className="gradient-text">Kamalesh K</span> 👋
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-subtitle">
            <span className="typing-text">{typedText}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Passionate about Building Scalable and Modern Web Applications
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <button className="btn btn-primary" onClick={onViewResume}>
              <FaFileAlt className="btn-icon" /> View Resume
            </button>
            <a href="/resume.pdf" download>
              <button className="btn btn-secondary">
                <FaDownload className="btn-icon" /> Download CV
              </button>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            <a 
              href="https://github.com/kamal-2006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/kamalesh-k-ab11572b2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://leetcode.com/u/w4Cceb/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <SiLeetcode />
            </a>
            <a 
              href="https://www.hackerrank.com/profile/kamalesh_cs231"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaHackerrank />
            </a>
            <a 
              href="mailto:kamaleshkamales006@gmail.com"
              className="social-icon"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
