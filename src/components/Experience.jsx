import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import './Experience.css';

const Experience = () => {
  const activities = [
    {
      icon: <FaCode />,
      title: 'Coding Practice',
      description: 'Solved 100+ problems on LeetCode and HackerRank',
      stats: '100+ Problems',
      color: '#ffa116'
    },
    {
      icon: <FaUsers />,
      title: 'NSS Volunteer',
      description: 'Active volunteer contributing to social welfare activities',
      stats: 'Active Member',
      color: '#667eea'
    },
    {
      icon: <FaTrophy />,
      title: 'Coding Contests',
      description: 'Regular participation in competitive programming contests',
      stats: 'Regular Participant',
      color: '#f5576c'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Technical Workshops',
      description: 'Engaged in various technical workshops and hackathons',
      stats: 'Active Learner',
      color: '#4facfe'
    }
  ];

  const platforms = [
    { name: 'LeetCode', icon: <SiLeetcode />, link: 'https://leetcode.com/kamaleshk23' },
    { name: 'HackerRank', icon: <SiHackerrank />, link: 'https://hackerrank.com/kamaleshk23' }
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
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Experience & Activities
        </motion.h2>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="activity-card glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="activity-icon"
                style={{ background: activity.color }}
              >
                {activity.icon}
              </div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-description">{activity.description}</p>
              <span className="activity-badge">{activity.stats}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="coding-platforms"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="platforms-title">Find me on</h3>
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link glass"
              >
                <span className="platform-icon">{platform.icon}</span>
                <span className="platform-name">{platform.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
