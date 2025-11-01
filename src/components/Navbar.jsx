import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaBolt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setIsToggling(true);
    toggleTheme();
    setTimeout(() => setIsToggling(false), 600);
  };

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Services', to: 'services' },
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
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-text">Kamalesh<span className="gradient-text">.K</span></span>
          </div>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.to}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.to);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <button 
              className={`theme-toggle-creative ${theme} ${isToggling ? 'toggling' : ''}`}
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              <div className="toggle-icon-wrapper">
                {theme === 'light' ? (
                  <FaSun className="theme-icon sun" />
                ) : (
                  <FaMoon className="theme-icon moon" />
                )}
              </div>
              
              {/* Energy Burst Effect */}
              {isToggling && (
                <>
                  <div className="burst-ring ring-1"></div>
                  <div className="burst-ring ring-2"></div>
                  <div className="burst-ring ring-3"></div>
                  <FaBolt className="lightning-bolt bolt-1" />
                  <FaBolt className="lightning-bolt bolt-2" />
                  <FaBolt className="lightning-bolt bolt-3" />
                  <FaBolt className="lightning-bolt bolt-4" />
                </>
              )}
              
              {/* Glow Pulse */}
              <div className="glow-pulse"></div>
            </button>
            
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
