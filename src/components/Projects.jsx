import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Intelligent Academic Fraud Detection System',
      description: 'Full-stack MERN platform for detecting academic fraud with plagiarism detection, attendance tracking, exam analysis, fraud reports, and analytics dashboards.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/AcademicFraudDetection.git',
      demo: 'https://academic-fraud-detection.vercel.app',
      stars: 24,
      forks: 6,
      language: 'JavaScript'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Real-time messaging application with typing indicators, user presence, and secure authentication using hashed passwords for a smooth communication experience.',
      tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/chat-app-backend.git',
      demo: null,
      stars: 18,
      forks: 4,
      language: 'JavaScript'
    },
    {
      title: 'Hospital Management System',
      description: 'Appointment booking and doctor scheduling system with role-based authentication and REST APIs for streamlined hospital operations.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/frontend_heal_link.git',
      demo: 'https://project-heal-link.vercel.app',
      stars: 21,
      forks: 5,
      language: 'JavaScript'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website with a modern UI, responsive layouts, smooth motion, and an engaging presentation of skills and work.',
      tech: ['React', 'Tailwind CSS'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/Portfolio.git',
      demo: 'https://kamal006.vercel.app',
      stars: 19,
      forks: 3,
      language: 'JavaScript'
    },
    {
      title: 'AI-Powered Personalized Learning Platform',
      description: 'Full-stack EduTechnology platform with ML microservice support for personalized learning, quizzes, analytics, and predictions.',
      tech: ['React', 'Node.js', 'MongoDB', 'Flask'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/EduTechology.git',
      demo: 'https://edu-ai-mauve.vercel.app',
      stars: 17,
      forks: 4,
      language: 'Python'
    },
    {
      title: 'Smart Farming Assistant',
      description: 'Offline-first PWA for farmers with weather data, crop disease detection, market prices, and a voice assistant for practical field use.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'PWA', 'IndexedDB'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/Smart-Farming-Assistant.git',
      demo: 'https://smart-farming-assistant-ten.vercel.app',
      stars: 23,
      forks: 5,
      language: 'TypeScript'
    },
    {
      title: 'IPL Website',
      description: 'Cricket-focused web application built with React to display IPL-related content in a responsive and interactive layout.',
      tech: ['React', 'JavaScript', 'CSS'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/ipl_website.git',
      demo: null,
      stars: 10,
      forks: 2,
      language: 'JavaScript'
    },
    {
      title: 'E-Commerce Website',
      description: 'Advanced e-commerce platform with filtering, sorting, cart management, and promo code support for a smooth shopping flow.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      date: 'Featured Project',
      github: 'https://github.com/kamal-2006/eCommerce.git',
      demo: 'https://kamal-2006.github.io/eCommerce/',
      stars: 14,
      forks: 4,
      language: 'JavaScript'
    }
  ];

  const languageColors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    TypeScript: '#2b7489',
    HTML: '#e34c26',
    CSS: '#563d7c'
  };

  return (
    <section className="projects gh-section" id="projects">
      <div className="gh-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gh-heading" style={{ fontSize: '24px', marginBottom: '16px' }}>
            Featured Projects
          </h2>
          <p className="gh-text-muted" style={{ marginBottom: '24px', fontSize: '14px' }}>
            Some of my recent work and side projects
          </p>
        </motion.div>

        <div className="projects-carousel" aria-label="Projects carousel">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              className="project-repo-card gh-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className="repo-header">
                <div className="repo-title-section">
                  <FaGithub className="repo-icon" />
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="repo-title gh-link">
                    {project.title}
                  </a>
                </div>
                <span className="repo-visibility gh-badge">Public</span>
              </div>

              <p className="repo-description">{project.description}</p>

              <div className="repo-topics">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="topic-tag gh-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="repo-footer">
                <div className="repo-stats">
                  <span className="repo-language">
                    <FaCircle style={{ color: languageColors[project.language] || '#586069' }} />
                    {project.language}
                  </span>
                  <a href={project.github} className="repo-stat gh-link">
                    <FaStar />
                    {project.stars}
                  </a>
                  <a href={project.github} className="repo-stat gh-link">
                    <FaCodeBranch />
                    {project.forks}
                  </a>
                </div>
                <div className="repo-actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="gh-btn gh-btn-secondary">
                    <FaGithub /> GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gh-btn">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="repo-date gh-text-muted">
                Updated {project.date}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
