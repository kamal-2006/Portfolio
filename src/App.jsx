import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ResumeViewer from './components/ResumeViewer';
import CursorFollower from './components/CursorFollower';

console.log('App.jsx loaded');

function App() {
  console.log('App component rendering');
  
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Choose your background style here:
  // Options: 'particles', 'matrix', 'grid', 'gradient', 'geometric', 'waves'
  const backgroundStyle = 'geometric';

  useEffect(() => {
    console.log('App mounted');
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <ThemeProvider>
      <div className="App">
        <CursorFollower />
        <AnimatedBackground variant={backgroundStyle} />
        <ScrollProgress />
        <Navbar />
        <Hero onViewResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Services />
        <Contact />
        <Footer />
        {showBackToTop && <BackToTop />}
        <ResumeViewer 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
