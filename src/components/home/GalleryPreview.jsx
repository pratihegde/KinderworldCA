import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GalleryPreview = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      alt: 'Nature landscape'
    },
    {
      src: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
      alt: 'Forest scenery'
    },
    {
      src: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800',
      alt: 'Cabin exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800',
      alt: 'Lake view'
    },
    {
      src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
      alt: 'Wildlife'
    },
    {
      src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800',
      alt: 'Natural beauty'
    }
  ];

  return (
    <section className="py-16 lg:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 text-xs lg:text-sm uppercase tracking-[0.2em] mb-4 font-normal">
            Added Comforts for Your Stay
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-5 font-light leading-tight">
            Our Photo Gallery
          </h2>
          <p className="text-gray-600 text-sm lg:text-base max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Get a glimpse of the beauty that awaits. From stunning natural views to the peaceful comforts of our retreat, 
            our gallery captures the essence of a stay with us. Browse through images to start imagining your own unforgettable escape.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-colors font-normal text-sm lg:text-base"
            >
              Explore Full Gallery
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-normal text-sm lg:text-base"
            >
              Book Your Stay
            </Link>
          </div>
        </motion.div>

        {/* Gallery Grid - Infinite Scroll Effect */}
        <div className="overflow-hidden relative">
          <style>
            {`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div className="flex gap-6 animate-scroll">
            {[...images, ...images].map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-[32px] shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;