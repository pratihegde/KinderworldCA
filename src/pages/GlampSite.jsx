import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const GlampSite = () => {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1920)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Glamp Site</h1>
            <p className="text-2xl mb-8">Luxury Camping Experience</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the best of camping with modern comfort in our glamping setup.
          </p>
          <Link to="/contact">
            <Button>Contact Us for Details</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlampSite;
