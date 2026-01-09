import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-primary-50 rounded-xl shadow-lg border border-primary-100/50 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
