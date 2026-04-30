import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 6369026251',
      link: 'tel:+916369026251'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'kamaleshkamales006@gmail.com',
      link: 'mailto:kamaleshkamales006@gmail.com'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/kamal-2006',
      link: 'https://github.com/kamal-2006'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/kamalesh-k-ab11572b2',
      link: 'https://www.linkedin.com/in/kamalesh-k-ab11572b2'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const itemFadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="contact-eyebrow">Contact</p>
          <h2 className="contact-title">Let’s connect</h2>
          <p className="contact-subtitle">
            Reach out directly through any of the channels below. I keep this section simple,
            accessible, and easy to scan.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="contact-grid">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  className="contact-card"
                  href={info.link || '#'}
                  target={info.link ? '_blank' : undefined}
                  rel={info.link ? 'noopener noreferrer' : undefined}
                  variants={itemFadeInUp}
                  onClick={(e) => { if (!info.link) e.preventDefault(); }}
                >
                  <div className="contact-card-icon">
                    {info.icon}
                  </div>
                  <div className="contact-card-body">
                    <div className="contact-card-title">{info.title}</div>
                    <div className="contact-card-value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
