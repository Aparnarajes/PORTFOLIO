import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Background = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movements
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" style={{ background: '#080911' }}>
      <div className="absolute inset-0 stripe-grid opacity-[0.25] pointer-events-none" />
      <div className="gradient-bg opacity-60" />
      
      {/* Mouse Follow Glow - Hidden on mobile for performance */}
      {!isMobile && (
        <motion.div 
          className="mouse-glow"
          style={{
            left: smoothX,
            top: smoothY,
          }}
        />
      )}
      
      {/* Animated Glow Blobs */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
      />

      {/* Center subtle glow */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />

      {/* Sparse Anti-Gravity Particles */}
      {[...Array(isMobile ? 15 : 40)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 0.4 + 0.1
          }}
          animate={{
            y: ["0px", "-40px", "0px"],
            x: ["0px", (Math.random() - 0.5) * 20 + "px", "0px"],
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            background: i % 3 === 0 ? 'rgba(99,102,241,0.9)' : i % 3 === 1 ? 'rgba(139,92,246,0.9)' : 'rgba(255,255,255,0.8)',
            boxShadow: i % 3 === 0 ? '0 0 6px rgba(99,102,241,0.8)' : i % 3 === 1 ? '0 0 6px rgba(139,92,246,0.8)' : '0 0 6px rgba(255,255,255,0.6)'
          }}
        />
      ))}
    </div>
  );
};

export default Background;
