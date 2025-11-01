import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExpand, FaCompress } from 'react-icons/fa';
import './ResumeViewer.css';

const ResumeViewer = ({ isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kamalesh_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="resume-viewer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`resume-viewer-container ${isFullscreen ? 'fullscreen' : ''}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="resume-viewer-header">
            <h3 className="resume-title">
              <span className="gradient-text">Resume</span> - Kamalesh K
            </h3>
            <div className="resume-actions">
              <button 
                className="resume-action-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
              <button 
                className="resume-action-btn download"
                onClick={handleDownload}
                title="Download Resume"
              >
                <FaDownload />
              </button>
              <button 
                className="resume-action-btn close"
                onClick={onClose}
                title="Close"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          
          <div className="resume-viewer-content">
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="resume-iframe"
            />
            <div className="resume-fallback">
              <p>Unable to display PDF.</p>
              <button className="btn btn-primary" onClick={handleDownload}>
                <FaDownload /> Download Resume
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeViewer;
