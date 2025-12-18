import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
