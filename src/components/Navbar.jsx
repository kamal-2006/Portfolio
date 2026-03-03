import React, { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../common/hooks/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section detection
      const sections = ['hero', 'skills', 'projects', 'activities', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Activities', to: 'activities' },
    { name: 'Contact', to: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`gh-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="gh-container">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <span className="brand-letter">K</span>
            <span className="brand-text">
              amalesh<span className="brand-dot">.</span><span className="brand-accent">K</span>
            </span>
          </div>

          <div className="navbar-menu">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`nav-item ${activeSection === item.to ? 'active' : ''}`}
                onClick={() => scrollToSection(item.to)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="navbar-actions">
            {/* Modern Theme Toggle */}
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div className="theme-toggle-track">
                <div className={`theme-toggle-thumb ${theme}`}>
                  {theme === 'dark' ? (
                    <HiMoon className="theme-icon moon" />
                  ) : (
                    <HiSun className="theme-icon sun" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;