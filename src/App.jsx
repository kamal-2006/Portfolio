import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './common/components/ScrollProgress';
import BackToTop from './common/components/BackToTop';
import AnimatedBackground from './common/components/AnimatedBackground';
import CursorFollower from './common/components/CursorFollower';
import LoadingScreen from './common/components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  const handleViewResume = () => {
    const resumeUrl = '/resume.pdf';
    const resumeWindow = window.open(resumeUrl, '_blank', 'noopener,noreferrer');

    if (!resumeWindow) {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <CursorFollower />
      <AnimatedBackground variant="geometric" />
      <ScrollProgress />
      <Navbar />
      <Hero onViewResume={handleViewResume} />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
