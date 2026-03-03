import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/ThemeContext';
import './AnimatedBackground.css';

const AnimatedBackground = ({ variant = 'particles' }) => {
  const { theme } = useTheme();
  
  if (variant === 'grid') {
    return <div className="animated-bg animated-bg-grid" data-theme={theme}></div>;
  }

  if (variant === 'gradient') {
    return <div className="animated-bg animated-bg-gradient" data-theme={theme}></div>;
  }

  if (variant === 'geometric') {
    return <FloatingGeometricBackground theme={theme} />;
  }

  if (variant === 'waves') {
    return (
      <div className="animated-bg animated-bg-waves" data-theme={theme}>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave-parallax">
            <use href="#wave" x="48" y="0" fill="rgba(102, 126, 234, 0.1)" />
            <use href="#wave" x="48" y="3" fill="rgba(118, 75, 162, 0.1)" />
            <use href="#wave" x="48" y="5" fill="rgba(79, 172, 254, 0.1)" />
            <use href="#wave" x="48" y="7" fill="rgba(102, 126, 234, 0.2)" />
          </g>
        </svg>
      </div>
    );
  }

  return <InteractiveParticlesBackground theme={theme} />;
};

// New Floating Geometric Shapes Background
const FloatingGeometricBackground = ({ theme }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = [
    { type: 'circle', size: 300, top: '10%', left: '15%', duration: 25, delay: 0 },
    { type: 'square', size: 200, top: '60%', left: '70%', duration: 30, delay: 2 },
    { type: 'triangle', size: 250, top: '25%', left: '80%', duration: 28, delay: 1 },
    { type: 'hexagon', size: 180, top: '70%', left: '20%', duration: 32, delay: 3 },
    { type: 'circle', size: 150, top: '40%', left: '50%', duration: 26, delay: 1.5 },
    { type: 'square', size: 120, top: '15%', left: '45%', duration: 29, delay: 2.5 },
  ];

  return (
    <div className={`animated-bg floating-geometric-bg ${theme}`} data-theme={theme}>
      {/* Dynamic Mesh Gradient Layer */}
      <div className="mesh-gradient-layer">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
        <div className="mesh-blob mesh-blob-4"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="geometric-shapes-layer">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={`geometric-shape shape-${shape.type}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              top: shape.top,
              left: shape.left,
              animationDuration: `${shape.duration}s`,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Parallax Gradient Orbs */}
      <div
        className="parallax-orbs"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      >
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Decorative Patterns */}
      <div className="pattern-layer pattern-dots"></div>
      <div className="pattern-layer pattern-lines"></div>
      <div className="pattern-layer pattern-circuits"></div>
    </div>
  );
};

// Enhanced Interactive Particles Background
const InteractiveParticlesBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2.5 + 0.5;
        this.color = Math.random() > 0.5 ? '102, 126, 234' : '118, 75, 162';
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Mouse interaction
        const dx = mousePos.current.x - this.x;
        const dy = mousePos.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx -= (dx / distance) * force * 0.3;
          this.vy -= (dy / distance) * force * 0.3;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Keep minimum velocity
        if (Math.abs(this.vx) < 0.1) this.vx = (Math.random() - 0.5) * 0.5;
        if (Math.abs(this.vy) < 0.1) this.vy = (Math.random() - 0.5) * 0.5;

        this.pulsePhase += 0.02;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
        const opacity = theme === 'dark' ? 0.6 + pulse * 0.3 : 0.4 + pulse * 0.2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${opacity})`;
        ctx.fill();
        
        // Glow effect
        const glowSize = theme === 'dark' ? 10 + pulse * 5 : 5 + pulse * 3;
        ctx.shadowBlur = glowSize;
        ctx.shadowColor = `rgba(${this.color}, ${theme === 'dark' ? 0.8 : 0.5})`;
      }
    }

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Background fade based on theme
      const fadeOpacity = theme === 'dark' ? 0.05 : 0.08;
      ctx.fillStyle = `rgba(${theme === 'dark' ? '10, 14, 39' : '248, 249, 255'}, ${fadeOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            const lineOpacity = theme === 'dark' ? 0.3 : 0.2;
            ctx.strokeStyle = `rgba(102, 126, 234, ${lineOpacity * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`animated-bg animated-bg-canvas ${theme}`}
      data-theme={theme}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default AnimatedBackground;
