import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CursorFollower.css';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [clickParticles, setClickParticles] = useState([]);
  const [trail, setTrail] = useState([]);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let rafId;
    let scrollTimeout;
    let lastHeartTime = 0;
    
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for better performance
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        // Add trail effect
        setTrail(prev => [...prev, { 
          x: e.clientX, 
          y: e.clientY, 
          id: Date.now() + Math.random() 
        }].slice(-8));
        
        // Spawn hearts occasionally while moving
        const now = Date.now();
        if (now - lastHeartTime > 150) { // Spawn a heart every 150ms
          lastHeartTime = now;
          const newHeart = {
            id: now + Math.random(),
            x: e.clientX,
            y: e.clientY,
            size: 12 + Math.random() * 8,
            rotation: Math.random() * 360,
            duration: 1 + Math.random() * 0.5
          };
          
          setHearts(prev => [...prev, newHeart]);
          
          // Remove hearts after animation
          setTimeout(() => {
            setHearts(prev => prev.filter(h => h.id !== newHeart.id));
          }, newHeart.duration * 1000 + 100);
        }
      });
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Reset scroll state after scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleMouseOver = (e) => {
      const interactiveElement = e.target.closest('a, button, .btn, .nav-item, .gh-card, input, textarea, [role="button"]');
      setIsHovering(!!interactiveElement);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      
      // Create click particles
      const particles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        angle: (i * 30) + Math.random() * 15,
        distance: 40 + Math.random() * 30,
        color: ['#667eea', '#764ba2', '#4facfe', '#f093fb'][Math.floor(Math.random() * 4)]
      }));
      
      setClickParticles(particles);
      setTimeout(() => setClickParticles([]), 1000);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trail Effect */}
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            className="cursor-trail-point"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ 
              opacity: 0,
              scale: 0,
              x: point.x - 3,
              y: point.y - 3
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              opacity: (index + 1) / trail.length * 0.6 
            }}
          />
        ))}
      </AnimatePresence>

      {/* Rocket Cursor with Circular Container */}
      <motion.div
        className="custom-cursor-circle"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : isScrolling ? 0.9 : 1,
          opacity: isScrolling ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.3,
          opacity: { duration: 0.15 }
        }}
      >
        <motion.div
          className="custom-cursor-rocket"
          animate={{
            rotate: isHovering ? 45 : isScrolling ? -15 : 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        >
          🚀
        </motion.div>
      </motion.div>

      {/* Hover Glow Effect */}
      {isHovering && (
        <motion.div
          className="custom-cursor-glow"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            opacity: 0.4,
            scale: 1
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 150,
          }}
        />
      )}

      {/* Click Particles */}
      <AnimatePresence>
        {clickParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="click-particle"
            style={{ 
              backgroundColor: particle.color,
              left: particle.x,
              top: particle.y
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [1, 0.8, 0],
              x: Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
              y: Math.sin((particle.angle * Math.PI) / 180) * particle.distance
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Floating Hearts */}
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="cursor-heart"
            style={{ 
              left: heart.x,
              top: heart.y,
              fontSize: `${heart.size}px`
            }}
            initial={{ 
              scale: 0, 
              opacity: 1,
              rotate: heart.rotation,
              y: 0
            }}
            animate={{
              scale: [0, 1, 0.8],
              opacity: [1, 1, 0],
              y: -60 - Math.random() * 40,
              x: (Math.random() - 0.5) * 30,
              rotate: heart.rotation + (Math.random() - 0.5) * 60
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: heart.duration, 
              ease: "easeOut"
            }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default CursorFollower;
