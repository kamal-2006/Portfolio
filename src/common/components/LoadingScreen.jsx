import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/ThemeContext';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const { theme } = useTheme();
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const terminalLines = [
    { text: 'kamalesh@portfolio:~$', delay: 0, speed: 30, isPrompt: true },
    { text: '$ whoami', delay: 300, speed: 50, isCommand: true },
    { text: 'Kamalesh K - Full Stack Developer', delay: 500, speed: 30, isOutput: true },
    { text: '', delay: 200, speed: 0 },
    { text: '$ cat skills.txt', delay: 300, speed: 50, isCommand: true },
    { text: 'React | Node.js | MongoDB | Express | JavaScript', delay: 400, speed: 30, isOutput: true },
    { text: '', delay: 200, speed: 0 },
    { text: '$ ls projects/', delay: 300, speed: 50, isCommand: true },
    { text: 'chat-app/ hospital-management/ portfolio/', delay: 400, speed: 30, isOutput: true },
    { text: '', delay: 200, speed: 0 },
    { text: '$ echo $STATUS', delay: 300, speed: 50, isCommand: true },
    { text: 'Ready to build amazing things! 🚀', delay: 400, speed: 30, isOutput: true },
  ];

  // Smooth percentage increase
  useEffect(() => {
    const totalDuration = 4500; // Total loading time in ms
    const incrementInterval = 30; // Update every 30ms
    const totalIncrements = totalDuration / incrementInterval;
    const incrementValue = 100 / totalIncrements;

    let currentPercentage = 0;
    const percentageTimer = setInterval(() => {
      currentPercentage += incrementValue;
      if (currentPercentage >= 100) {
        setPercentage(100);
        clearInterval(percentageTimer);
      } else {
        setPercentage(Math.floor(currentPercentage));
      }
    }, incrementInterval);

    return () => clearInterval(percentageTimer);
  }, []);

  useEffect(() => {
    let timeoutId;
    let lineIndex = 0;

    const showNextLine = () => {
      if (lineIndex < terminalLines.length) {
        setCurrentLine(lineIndex);
        lineIndex++;
        const currentDelay = terminalLines[lineIndex - 1]?.delay || 200;
        timeoutId = setTimeout(showNextLine, currentDelay);
      } else {
        // All lines displayed, wait a bit then complete
        timeoutId = setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete?.();
          }, 800);
        }, 1000);
      }
    };

    // Start showing lines
    timeoutId = setTimeout(showNextLine, 500);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className={`loading-screen terminal-loading ${theme}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="terminal-container">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">kamalesh@portfolio:~</div>
            </div>
            
            <div className="terminal-body">
              {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                <TerminalLine
                  key={index}
                  text={line.text}
                  speed={line.speed}
                  isPrompt={line.isPrompt}
                  isCommand={line.isCommand}
                  isOutput={line.isOutput}
                  isLast={index === currentLine}
                />
              ))}
              
              {currentLine < terminalLines.length && (
                <span className="cursor-blink">▋</span>
              )}
              
              {/* Loading Percentage Indicator */}
              <div className="terminal-percentage">
                <div className="percentage-bar-container">
                  <div 
                    className="percentage-bar-fill" 
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="percentage-text">
                  <span className="percentage-label">Loading:</span>
                  <span className="percentage-value">{percentage}%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Terminal line component with typing animation
const TerminalLine = ({ text, speed, isPrompt, isCommand, isOutput, isLast }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!text) {
      setDisplayedText('');
      return;
    }

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayedText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, speed || 30);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  if (!text) {
    return <div className="terminal-line terminal-empty"></div>;
  }

  let lineClass = 'terminal-line';
  if (isPrompt) lineClass += ' terminal-prompt-line';
  if (isCommand) lineClass += ' terminal-command';
  if (isOutput) lineClass += ' terminal-output';

  return (
    <div className={lineClass}>
      <span className="terminal-text">{displayedText}</span>
      {isLast && showCursor && displayedText.length < text.length && (
        <span className="cursor-inline">▋</span>
      )}
    </div>
  );
};

export default LoadingScreen;
