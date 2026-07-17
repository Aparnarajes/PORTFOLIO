import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ children, duration = 6, delay = 0, yOffset = 20, className = "" }) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
