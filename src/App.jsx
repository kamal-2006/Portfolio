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

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <CursorFollower />
      <AnimatedBackground variant="geometric" />
      <ScrollProgress />
      <Navbar />
      <Hero />
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
