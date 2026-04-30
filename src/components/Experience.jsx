import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaUsers } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const activities = [
    {
      icon: <FaCode />,
      title: 'LeetCode Problem Solving',
      description: 'Solved 400+ problems on LeetCode focusing on algorithms and data structures',
      stats: '400+ Problems',
      color: '#ffa116'
    },
    {
      icon: <FaUsers />,
      title: 'NSS Volunteer',
      description: 'Participated in community outreach and service programs as an NSS volunteer',
      stats: 'NSS Volunteer',
      color: '#667eea'
    },
    {
      icon: <FaTrophy />,
      title: 'Coding Contests & Events',
      description: 'Regular participant in coding contests, hackathons and technical events',
      stats: 'Competitions',
      color: '#f5576c'
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
    <section className="experience section" id="activities">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Achievements & Activities
        </motion.h2>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.article
              key={index}
              className="activity-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.08 }}
              aria-labelledby={`activity-${index}-title`}
            >
              <div className="activity-card-inner">
                <div 
                  className="activity-icon"
                  style={{ background: activity.color }}
                  aria-hidden="true"
                >
                  {activity.icon}
                </div>

                <div className="activity-body">
                  <h3 id={`activity-${index}-title`} className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </div>

                <div className="activity-meta">
                  <span className="activity-badge">{activity.stats}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
