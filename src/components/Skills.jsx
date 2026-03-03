import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, 
  FaJava, FaGithub, FaDatabase, FaNetworkWired 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiCplusplus, SiPostman 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '👨‍💻',
      skills: [
        { name: 'C', icon: <SiCplusplus />, color: '#A8B9CC' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' }
      ]
    },
    {
      title: 'Database & Tools',
      icon: '🛠️',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'VS Code', icon: <FaGithub />, color: '#007ACC' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: '📚',
      skills: [
        { name: 'OOP', icon: <FaDatabase />, color: '#0078D4' },
        { name: 'DSA', icon: <FaDatabase />, color: '#FF6B6B' },
        { name: 'DBMS', icon: <FaDatabase />, color: '#4ECDC4' },
        { name: 'Operating Systems', icon: <FaDatabase />, color: '#95E1D3' },
        { name: 'Computer Networks', icon: <FaNetworkWired />, color: '#FF9800' }
      ]
    }
  ];

  return (
    <section className="skills gh-section" id="skills">
      <div className="gh-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gh-heading" style={{ fontSize: '24px', marginBottom: '16px' }}>
            Skills & Technologies
          </h2>
          <p className="gh-text-muted" style={{ marginBottom: '24px', fontSize: '14px' }}>
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category-card gh-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-name">{category.title}</h3>
              </div>
              <div className="skills-badges">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-badge"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-badge-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-badge-name">{skill.name}</span>
                  </motion.div>
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
