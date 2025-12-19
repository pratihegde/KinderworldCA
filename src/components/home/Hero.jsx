import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/hero/hero1.jpg',
    '/images/hero/hero2.jpg',
    '/images/hero/hero3.jpg',
    '/images/hero/hero4.jpg',
    '/images/hero/hero5.jpg',
    '/images/hero/hero8.jpg',
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
          >
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimal Content - Skyridge Inspired */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Headline - Large & Elegant */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-tight">
            Escape to Nature.<br />
            Return to Yourself.
          </h1>

          {/* Subheadline - Clean & Simple */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 font-light tracking-wide opacity-95 max-w-2xl mx-auto">
            A peaceful, plant-based retreat in 300 acres of pristine Ontario wilderness
          </p>

          {/* Single CTA Button */}
          <Link to="/contact">
            <Button className="bg-white text-primary-700 hover:bg-gray-100 px-10 py-4 text-base md:text-lg font-medium shadow-xl">
              Book Your Escape
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white"
          >
            <span className="text-xs md:text-sm mb-2 tracking-widest uppercase opacity-75 font-light">Discover More</span>
            <ArrowDown size={20} className="opacity-75" />
          </motion.div>
        </motion.div>
      </div>

      {/* Minimalist Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60 w-1'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
