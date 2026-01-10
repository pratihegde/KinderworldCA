import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../utils/getAssetUrl';
import { galleryImages } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  const categories = ['All', 'Activities', 'Kids Camp', 'Glamp Site', 'Bunkie', 'Kinder World'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxImageIndex((prev) => (prev + 1) % filteredImages.length);
      if (e.key === 'ArrowLeft') setLightboxImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImageIndex, filteredImages.length]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-20">
      {/* Header */}
      <section className="py-12 md:py-20 text-center container-custom">
        <h1 className="text-4xl md:text-7xl font-serif font-light mb-4 md:mb-6 text-primary-900">
          Visual <span className="italic text-primary-600">Journey</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-600 max-w-2xl mx-auto px-4">
          Glimpses of life at A KINDer World.
        </p>
      </section>

      {/* Filter Buttons */}
      <div className="container-custom mb-8 md:mb-12 overflow-x-auto no-scrollbar">
        <div className="flex justify-start md:justify-center flex-nowrap md:flex-wrap gap-2 md:gap-4 min-w-max pb-4 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border border-primary-100 whitespace-nowrap ${selectedCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-primary-800 hover:bg-primary-50 hover:border-primary-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container-custom pb-24 px-2 md:px-4">
        {/* CSS Columns approach for Masonry */}
        <div className="columns-2 md:columns-3 xl:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4">
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={image.src}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={getAssetUrl(image.src)}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={closeLightbox}
                className="p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={32} />
              </button>
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={lightboxImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getAssetUrl(filteredImages[lightboxImageIndex].src)}
                alt={filteredImages[lightboxImageIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
