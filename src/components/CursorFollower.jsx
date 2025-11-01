import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaHeart } from 'react-icons/fa';
import './CursorFollower.css';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail on movement
      if (Math.random() > 0.7) {
        const icons = [FaRocket, FaStar, FaHeart];
        const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
        setTrails(prev => [...prev, {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          Icon: RandomIcon
        }].slice(-5));
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .btn, .nav-link, .social-icon')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Remove old trails
  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => {
        setTrails(prev => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [trails]);

  return (
    <>
      {/* Custom Cursor - Smaller Rocket Icon */}
      <motion.div
        className="custom-cursor-icon"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.3 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.4
        }}
      >
        <FaRocket />
      </motion.div>
      
      {/* Cursor Trail Effect */}
      <motion.div
        className="custom-cursor-trail"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          mass: 0.6
        }}
      />

      {/* Animated Trail Icons */}
      {trails.map((trail) => {
        const Icon = trail.Icon;
        return (
          <motion.div
            key={trail.id}
            className="cursor-trail-icon"
            initial={{
              x: trail.x - 10,
              y: trail.y - 10,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [1, 0.7, 0],
              y: trail.y - 40,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </>
  );
};

export default CursorFollower;
