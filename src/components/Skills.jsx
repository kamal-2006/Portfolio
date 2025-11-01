import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, 
  FaJava, FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiCplusplus, 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85, icon: <SiCplusplus /> },
        { name: 'C++', level: 85, icon: <SiCplusplus /> },
        { name: 'Java', level: 80, icon: <FaJava /> },
        { name: 'Python', level: 82, icon: <FaPython /> },
        { name: 'JavaScript', level: 88, icon: <FaJs /> }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 95, icon: <FaHtml5 /> },
        { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
        { name: 'React', level: 90, icon: <FaReact /> }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
        { name: 'Express', level: 83, icon: <SiExpress /> }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 80, icon: <SiMongodb /> },
        { name: 'Git', level: 87, icon: <FaGitAlt /> },
        { name: 'GitHub', level: 88, icon: <FaGithub /> },
        { name: 'VS Code', level: 92, icon: <FaGithub /> }
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'OOP', level: 85, icon: <FaDatabase /> },
        { name: 'DSA', level: 83, icon: <FaDatabase /> },
        { name: 'DBMS', level: 82, icon: <FaDatabase /> },
        { name: 'Operating Systems', level: 78, icon: <FaDatabase /> }
      ]
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
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
