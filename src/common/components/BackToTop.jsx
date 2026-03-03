import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
