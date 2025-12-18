import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '', href, ...props }) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};

export default Button;
