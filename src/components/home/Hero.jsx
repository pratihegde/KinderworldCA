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
      src: getAssetUrl('images/hero/hero5.jpg'), // Deer
      title: "A ",
      italic: "KINDer World",
      suffix: " Awaits"
    },
    {
      src: getAssetUrl('images/hero/hero10.jpg'),
      title: "300 Acres of ",
      italic: "Pristine Wilderness"
    },
    {
      src: getAssetUrl('images/hero/hero2.jpg'),
      title: "A Sanctuary for ",
      italic: "all Species"
    },
    {
      src: getAssetUrl('images/hero/hero9.jpg'),
      title: "Live Gently. ",
      italic: "Tread Lightly"
    },
    {
      src: getAssetUrl('images/hero/hero6.jpg'),
      title: "Reconnect with ",
      italic: "Nature"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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



          <div className="mb-10 lg:h-[16rem] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] tracking-tight"
              >
                {slides[currentSlide].title}
                {slides[currentSlide].italic && (
                  <span className="italic font-light text-accent-100">
                    {slides[currentSlide].italic}
                  </span>
                )}
                {slides[currentSlide].suffix}
              </motion.h1>
            </AnimatePresence>
          </div>

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