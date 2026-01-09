import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/getAssetUrl';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    getAssetUrl('images/hero/hero1.jpg'),
    getAssetUrl('images/kidscamp/group.jpg'),
    getAssetUrl('images/hero/hero2.jpg'),
    getAssetUrl('images/kidscamp/3girls.jpg'),
    getAssetUrl('images/hero/hero3.jpg'),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-linear scale-110"
            style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 container-custom px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2 border border-white/20 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium mb-6">
              Ontario's Hidden Sanctuary
            </span>
          </motion.div>

          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-bold text-white leading-[1.1] tracking-tighter"
            >
              Wildly <span className="italic font-light text-accent-100 block md:inline md:ml-4">Peaceful</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-white/90 font-light mb-14 max-w-3xl mx-auto leading-relaxed"
          >
            A private sanctuary across 300 acres of pristine wilderness.
            Reconnect with nature, animals, and your inner self on our 100% vegan property.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/contact">
              <Button className="bg-white hover:bg-accent-100 text-primary-900 border-none px-14 py-6 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                Book Your Stay
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;