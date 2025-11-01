import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaLanguage, FaDownload } from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="about-heading">
              Dedicated Computer Science Student with a Passion for <span className="gradient-text">Innovation</span>
            </h3>
            
            <p className="about-description">
              I'm a dedicated and enthusiastic Computer Science student passionate about building 
              full-stack web applications, exploring network technologies, and solving real-world 
              problems through code. I thrive on challenges that demand creativity and logical thinking.
            </p>

            <p className="about-description">
              My focus is on creating impactful, user-friendly, and efficient digital solutions that 
              make a difference. I believe in continuous learning and staying updated with the latest 
              technologies to deliver the best results.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="detail-text">
                  <h4>Location</h4>
                  <p>Tiruppur, Tamil Nadu</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <FaGraduationCap />
                </div>
                <div className="detail-text">
                  <h4>Education</h4>
                  <p>B.E. CSE (2023-2027)</p>
                  <p className="college">Bannari Amman Institute of Technology</p>
                  <p className="cgpa">CGPA: 9.09</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <FaLanguage />
                </div>
                <div className="detail-text">
                  <h4>Languages</h4>
                  <p>Tamil, English</p>
                </div>
              </div>
            </div>

            <a href="/resume.pdf" download>
              <button className="btn btn-primary">
                <FaDownload /> Download CV
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
