import React from 'react';
import { motion } from 'framer-motion'; // Added framer-motion import
import Hero from '../components/home/Hero';
import Accommodations from '../components/home/Accommodations';
import WhyChooseUs from '../components/home/WhyChooseUs';
import KidsCampCTA from '../components/home/KidsCampCTA';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="overflow-hidden">
      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Accommodations />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <KidsCampCTA />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.div>
    </div>
  );
};

export default Home;