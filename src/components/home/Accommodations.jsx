import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { accommodations } from '../../data/content';

// Custom hook for parallax effect
const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const AccommodationCard = ({ accommodation, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Different parallax speeds for different elements
  const imageY = useParallax(scrollYProgress, 100);
  const textY = useParallax(scrollYProgress, -50);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <div className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgb(0,0,0,0.12)] transition-all duration-500 overflow-hidden group">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Text Content with Parallax */}
          <motion.div 
            style={{ y: textY }}
            className="p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10"
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[10px] md:text-xs font-normal text-primary-600 mb-4 uppercase tracking-[0.15em]"
            >
              {accommodation.name}
            </motion.p>

            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-serif text-3xl md:text-4xl lg:text-[42px] xl:text-5xl text-gray-900 mb-5 leading-[1.1] font-light"
            >
              {accommodation.subtitle}
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-sm md:text-base lg:text-base leading-relaxed mb-8 max-w-lg font-light"
            >
              {accommodation.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link to={accommodation.slug}>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-600 text-white px-8 py-3.5 rounded-full text-sm md:text-base font-normal
                           hover:bg-primary-700 transition-all duration-300 inline-flex items-center group/btn shadow-lg hover:shadow-xl"
                >
                  <span>{accommodation.name}</span>
                  <ArrowRight
                    size={18}
                    className="ml-3 group-hover/btn:translate-x-2 transition-transform duration-300"
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image with Parallax and 3D effect */}
          <motion.div 
            style={{ y: imageY }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] order-1 lg:order-2 overflow-hidden"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.6 }
              }}
              className="w-full h-full"
            >
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-full object-cover"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              />
            </motion.div>
            
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Accommodations = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ y: backgroundY }}
      className="py-16 md:py-24 bg-[#F5F3F0] relative overflow-hidden"
    >
      {/* Decorative elements for depth */}
      <motion.div 
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-0"
      />
      <motion.div 
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl -z-0"
      />

      <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-normal"
          >
            Discover
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-5 font-light leading-tight"
          >
            Your Gateway to Nature
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Unparalleled accommodations for the modern explorer
          </motion.p>
        </motion.div>

        {/* Accommodation Cards - Stacked Vertically with Parallax */}
        <div className="space-y-8 md:space-y-10">
          {accommodations.map((accommodation, index) => (
            <AccommodationCard 
              key={accommodation.id} 
              accommodation={accommodation} 
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Accommodations;