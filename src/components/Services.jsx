import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaLock } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Full Stack Web Development',
      description: 'End-to-end website and web application creation using MERN stack. Building scalable, performant applications with modern technologies.',
      features: ['React & Node.js', 'RESTful APIs', 'Database Integration', 'Responsive Design']
    },
    {
      icon: <FaPalette />,
      title: 'Frontend Design',
      description: 'Responsive and aesthetic UI development with HTML, CSS, JavaScript, and React. Creating beautiful, user-friendly interfaces that engage users.',
      features: ['Modern UI/UX', 'React Components', 'CSS Animations', 'Mobile-First']
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Secure APIs, database handling, and Node.js-based logic implementation. Building robust server-side applications with best practices.',
      features: ['Node.js & Express', 'MongoDB', 'API Development', 'Data Management']
    },
    {
      icon: <FaLock />,
      title: 'Authentication Systems',
      description: 'Hashed passwords, session handling, and comprehensive login/signup flow setup. Ensuring security and seamless user authentication.',
      features: ['Secure Auth', 'JWT Tokens', 'Password Hashing', 'Session Management']
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
    <section className="services section" id="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Services I Offer
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
