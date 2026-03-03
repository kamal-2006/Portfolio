import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaFileAlt, FaMapMarkerAlt, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = ({ onViewResume }) => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const terminalCommands = [
    '$ whoami',
    'Kamalesh K - Full Stack Developer',
    '',
    '$ cat skills.txt',
    'React | Node.js | MongoDB | Express | JavaScript',
    '',
    '$ ls projects/',
    'chat-app/ hospital-management/ portfolio/',
    '',
    '$ echo $STATUS',
    'Ready to build amazing things! 🚀'
  ];

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    
    const typeInterval = setInterval(() => {
      if (index < terminalCommands.length) {
        if (charIndex < terminalCommands[index].length) {
          currentText += terminalCommands[index][charIndex];
          setTerminalText(currentText);
          charIndex++;
        } else {
          currentText += '\n';
          setTerminalText(currentText);
          index++;
          charIndex = 0;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="hero gh-section" id="hero">
      <div className="gh-container">
        <div className="hero-content">
          {/* Profile Card - GitHub style */}
          <motion.div 
            className="profile-card gh-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="profile-header">
              <img 
                src="/images/profile.jpg" 
                alt="Kamalesh K" 
                className="profile-avatar"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Kamalesh+K&size=400&background=667eea&color=fff&bold=true&font-size=0.4";
                }}
              />
              <div className="profile-info">
                <h1 className="profile-name">Kamalesh K</h1>
                <p className="profile-username gh-text-muted">@kamal-2006</p>
              </div>
            </div>

            <div className="profile-bio">
              <p>Aspiring Full Stack Developer passionate about building innovative web applications</p>
            </div>

            <div className="profile-meta">
              <div className="meta-item">
                <FaMapMarkerAlt className="meta-icon" />
                <span>Tiruppur, Tamil Nadu</span>
              </div>
              <div className="meta-item">
                <FaGraduationCap className="meta-icon" />
                <span>B.E. CSE - Bannari Amman Institute of Technology</span>
              </div>
              <div className="meta-item">
                <FaLanguage className="meta-icon" />
                <span>Tamil, English</span>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat">
                <span className="stat-number">9.09</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Skills</span>
              </div>
            </div>

            <div className="profile-actions">
              <button className="gh-btn gh-btn-primary" onClick={onViewResume}>
                <FaFileAlt /> View Resume
              </button>
              <a href="/resume.pdf" download>
                <button className="gh-btn">
                  <FaDownload /> Download CV
                </button>
              </a>
            </div>

            <div className="profile-social">
              <a href="https://github.com/kamal-2006" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kamalesh-k-ab11572b2" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/w4Cceb/" target="_blank" rel="noopener noreferrer" className="social-link">
                <SiLeetcode />
              </a>
              <a href="mailto:kamaleshkamales006@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Terminal - Code style intro */}
          <motion.div 
            className="terminal-container gh-terminal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="gh-terminal-header">
              <div className="gh-terminal-dot"></div>
              <div className="gh-terminal-dot"></div>
              <div className="gh-terminal-dot"></div>
              <span className="terminal-title">kamalesh@portfolio:~$</span>
            </div>
            <div className="terminal-content">
              <pre className="terminal-output">
                {terminalText}
                {showCursor && <span className="terminal-cursor">▊</span>}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
