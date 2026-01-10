import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import Button from '../common/Button';
import { getAssetUrl } from '../../utils/getAssetUrl';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: getAssetUrl('images/hero/hero6.jpg'),
      title: "Hunt Camp Turns",
      italicPart: "Vegan Retreat",
      subtitle: "Transforming 300 acres into a place of peace for all."
    },
    {
      src: getAssetUrl('images/hero/hero2.jpg'),
      title: "Where Animals are",
      italicPart: "Truly Respected",
      subtitle: "A dedicated haven for all species."
    },
    {
      src: getAssetUrl('images/hero/hero9.jpg'),
      title: "300 Acres of",
      italicPart: "Pristine Wilderness",
      subtitle: "Untouched nature, where all species are protected."
    },
    {
      src: getAssetUrl('images/hero/hero5.jpg'),
      title: "Find Peace in",
      italicPart: "Deep Woods",
      subtitle: "Experience the silence of Ontario's off-grid forest."
    },
    {
      src: getAssetUrl('images/hero/hero3.jpg'),
      title: "A Sanctuary for",
      italicPart: "All Species",
      subtitle: "Every being flora, fauna, and fish is safe here."
    },
    {
      src: getAssetUrl('images/hero/hero1.jpg'),
      title: "Ethical Living,",
      italicPart: "Truly KIND",
      subtitle: "Discover a way of living that nurtures rather than harms."
    },
    {
      src: getAssetUrl('images/hero/hero10.jpg'),
      title: "Tread Lightly,",
      italicPart: "Live Deeply",
      subtitle: "A safe haven where nature thriving without exploitation."
    },
    {
      src: getAssetUrl('images/hero/hero7.jpg'),
      title: "Your Private",
      italicPart: "Wilderness Escape",
      subtitle: "Seclusion and freedom in the heart of nature."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Image Slider - Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear scale-110"
              style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom px-6 text-center">
        <div className="max-w-5xl mx-auto">


          <div className="mb-10 lg:h-[22rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] tracking-tighter"
              >
                {slides[currentSlide].title} <span className="italic font-light text-accent-100 block md:inline md:ml-4">{slides[currentSlide].italicPart}</span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-2xl text-white/90 font-light mb-14 max-w-3xl mx-auto leading-relaxed h-16"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/contact">
              <Button className="bg-white hover:bg-accent-100 text-primary-900 border-none px-14 py-6 text-xl font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                Come Visit
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;