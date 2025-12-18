import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
    'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800',
    'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
    'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800',
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
    'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Experience the Beauty of A KINDer World
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setLightboxImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
