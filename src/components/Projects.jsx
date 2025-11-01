import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
      image: '/images/projects/chat-app.png',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Hospital Management System',
      description: 'Designed a responsive interface for doctor-patient appointment scheduling and hospital record management. Implemented admin panel features and basic analytics for better hospital operations.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      date: 'July 2025',
      github: 'https://github.com/kamaleshk23/hospital-management',
      demo: 'https://hospital-management-demo.com',
      image: '/images/projects/hospital-management.png',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing skills, projects, and experience. Features dark/light mode, smooth animations, and interactive elements built with React and Vite.',
      tech: ['React', 'Vite', 'Framer Motion', 'CSS3'],
      date: 'Nov 2025',
      github: 'https://github.com/kamaleshk23/portfolio',
      demo: 'https://kamaleshk.dev',
      image: '/images/projects/portfolio.png',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <div className="project-image-container">
                <div 
                  className="project-image-fallback"
                  style={{ background: project.gradient }}
                >
                  <div className="fallback-content">
                    <h4>{project.title}</h4>
                    <p>Add screenshot to: /public/images/projects/</p>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.previousSibling.style.display = 'flex';
                  }}
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                    if (e.target.previousSibling) {
                      e.target.previousSibling.style.display = 'none';
                    }
                  }}
                />
                <div 
                  className="project-overlay"
                  style={{ background: project.gradient }}
                >
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> View Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
