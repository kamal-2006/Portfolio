import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const texts = [
      'Initializing',
      'Loading components',
      'Compiling skills',
      'Building projects',
      'Preparing portfolio',
      'Almost there'
    ];
    let textIndex = 0;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadComplete(), 300);
          return 100;
        }
        return prev + 1.7; // Adjusted for 6 seconds (100 / (6000 / 30) ≈ 1.7)
      });
    }, 30);

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo/Name */}
        <div className="loading-logo">
          <div className="logo-circle">
            <span className="logo-letter">K</span>
          </div>
          <h1 className="loading-name">
            Kamalesh<span className="gradient-text">.K</span>
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="loading-animation">
          <div className="code-brackets">
            <span className="bracket left-bracket">{'<'}</span>
            <div className="loading-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <span className="bracket right-bracket">{'/>'}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            >
              <span className="progress-text">{progress}%</span>
            </div>
          </div>
          <p className="loading-text">{loadingText}<span className="loading-dots-text">...</span></p>
        </div>

        {/* Terminal Style */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt">$</span> npm run portfolio
            </p>
            <p className="terminal-line loading-line">
              <span className="prompt">{'>'}</span> {loadingText}...
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="loading-bg">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="floating-code" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}>
            {['<>', '{}', '[]', '()', '=>', '&&', '||', '=='][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
