import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Chat App',
      description: 'Developed a real-time messaging application with typing indicators, user presence detection, and authentication using hashed passwords. Focused on secure, scalable, and user-friendly UI.',
      tech: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
      date: 'Feb - Mar 2025',
      github: 'https://github.com/kamaleshk23/chat-app',
      demo: 'https://chat-app-demo.com',
      stars: 12,
      forks: 3,
      language: 'JavaScript'
    },
    {
      title: 'Hospital Management System',
      description: 'Designed a responsive interface for doctor-patient appointment scheduling and hospital record management. Implemented admin panel features and basic analytics for better hospital operations.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      date: 'July 2025',
      github: 'https://github.com/kamaleshk23/hospital-management',
      demo: 'https://hospital-management-demo.com',
      stars: 8,
      forks: 2,
      language: 'JavaScript'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing skills, projects, and experience. Features dark/light mode, smooth animations, and interactive elements built with React and Vite.',
      tech: ['React', 'Vite', 'Framer Motion', 'CSS3'],
      date: 'Nov 2025',
      github: 'https://github.com/kamaleshk23/portfolio',
      demo: 'https://kamaleshk.dev',
      stars: 15,
      forks: 5,
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

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-repo-card gh-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
