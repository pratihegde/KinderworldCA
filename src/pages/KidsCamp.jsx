import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const KidsCamp = () => {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Kids Camp</h1>
            <p className="text-2xl mb-8">Summer Nature Adventures</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Seasonal Programs</h2>
          <p className="text-xl text-gray-600 mb-8">
            Foster deep connections with nature through our educational summer camp programs.
          </p>
          <Link to="/contact">
            <Button>Inquire About Summer Programs</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KidsCamp;
