import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      duration: '12 Weeks',
      score: '99% (Top 1%)',
      date: '2024',
      icon: <FaCertificate />
    },
    {
      title: 'The Joy of Computing Using Python',
      issuer: 'NPTEL',
      duration: '12 Weeks',
      score: '78%',
      date: '2024',
      icon: <FaCertificate />
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
    <section className="certifications section" id="certifications">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Certifications & Achievements
        </motion.h2>

        <div className="certifications-timeline">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <div className="cert-icon">
                {cert.icon}
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer} · {cert.duration}</p>
                <div className="cert-footer">
                  <span className="cert-score">
                    <FaTrophy /> {cert.score}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
