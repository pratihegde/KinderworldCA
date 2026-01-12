import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Droplets, Zap, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';
import { getAssetUrl } from '../utils/getAssetUrl';

const Bunkie = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const features = [
    'Private screened-in patio with lake views',
    'Full shower with breathtaking lake views',
    'Two-burner propane stove',
    'Mini fridge for essentials',
    'Utensils, pots, and pans provided',
    'Animal free kitchen',
    'Solar powered',
    'Access to kms of private hiking trails',
    'Use of kayaks, canoes, paddle boards',
    'Built and decorated with reclaimed and reused materials',
    'Wifi',
    'Zero noise pollution'
  ];

  // Expanded Gallery images - reordered to mix different types of shots
  const galleryImages = [
    { src: getAssetUrl('images/gallery/bunkiewinter.jpg'), alt: 'Bunkie in Winter' },
    { src: getAssetUrl('images/gallery/bunkie guests.jpg'), alt: 'Guest Experience' },
    { src: getAssetUrl('images/gallery/bunkie-3.jpg'), alt: 'Cozy Interior' },
    { src: getAssetUrl('images/gallery/bunkie1.jpg'), alt: 'Bunkie exterior' },
    { src: getAssetUrl('images/gallery/bunkie4.jpg'), alt: 'Bathroom with a view' },
    { src: getAssetUrl('images/gallery/bunkie guests2.jpg'), alt: 'Lakeside Relaxing' },
    { src: getAssetUrl('images/gallery/bunkie-6.jpg'), alt: 'Interior Detail' },
    { src: getAssetUrl('images/gallery/bunkie3.jpg'), alt: 'Bunkie View' },
    { src: getAssetUrl('images/gallery/bunkiecutlery.jpg'), alt: 'Kitchen Setup' },
    { src: getAssetUrl('images/gallery/bunkie-11.jpg'), alt: 'Lakeside View' },
    { src: getAssetUrl('images/gallery/bunkie5.jpg'), alt: 'Screened-in Patio' },
    { src: getAssetUrl('images/gallery/bunkie-8.jpg'), alt: 'Morning Light' },
    { src: getAssetUrl('images/gallery/bunkie-4.jpg'), alt: 'Bunkie Detail' },
    { src: getAssetUrl('images/gallery/bunkie6.jpg'), alt: 'Peaceful Setting' },
    { src: getAssetUrl('images/gallery/bunkie7.jpeg'), alt: 'Lake View' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${getAssetUrl('images/gallery/bunkie6.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">The Bunkie</h1>
            <p className="text-2xl mb-8">Cozy Off-Grid Cabin</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users size={18} />
                <span>Up to 3 Guests</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Droplets size={18} />
                <span>Lakeside</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap size={18} />
                <span>Solar Powered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8 italic">
                Cozy Off-Grid Cabin
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
                <p>
                  Nestled beside the most serene private lake, the Bunkie offers a touch of luxury while you escape to reconnect with nature in peaceful seclusion. Aside from our small family, you’ll have complete privacy to explore the vast wilderness surrounding you.
                </p>
                <p className="font-serif italic text-2xl text-primary-900 mt-12 mb-4">Adventure Awaits</p>
                <p>
                  Paddle across the tranquil waters our our private lake while finding secret swimming spots along the way. Hike our peaceful and scenic trails. Skate and snowshoe in the silent winter wonderland.
                </p>
                <p className="font-serif italic text-2xl text-primary-900 mt-12 mb-4">Pure Uninterrupted Nature</p>
                <p>
                  Experience a complete lack of noise pollution. Fill your ears only with the magical sounds of the natural world.
                </p>
                <p className="font-serif italic text-2xl text-primary-900 mt-12 mb-4">Off-Grid Comfort</p>
                <p>
                  Live in harmony with nature, enjoying the freedom of self-sufficient living while still embracing simple modern comforts. It is our honour to share this land, offering a sanctuary where all beings—human and animal alike—can exist in respect and harmony. Come create unforgettable memories in our little slice of paradise.
                </p>
              </div>
            </motion.div>

            {/* Vertical Scrolling Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[600px] overflow-hidden rounded-xl shadow-2xl"
            >
              <style>
                {`
                  @keyframes scrollVertical {
                    0% {
                      transform: translateY(0);
                    }
                    100% {
                      transform: translateY(-50%);
                    }
                  }
                  .animate-scroll-vertical {
                    animation: scrollVertical 30s linear infinite;
                  }
                  .animate-scroll-vertical:hover {
                    animation-play-state: paused;
                  }
                `}
              </style>
              <div className="animate-scroll-vertical">
                {/* Duplicate images for seamless loop */}
                {[...galleryImages, ...galleryImages].map((image, index) => (
                  <div key={index} className="mb-4">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 rounded-xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Highlights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Living Sustainably Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent-100 rounded-[3rem] p-12 md:p-20 mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10 italic">
              Living Sustainably and Peacefully
            </h3>
            <div className="space-y-8 text-gray-700 leading-relaxed font-light text-lg">
              <p>
                The Bunkie is a cozy lakeside retreat designed for up to three guests, offering a peaceful escape into nature. Relax on your private screened-in patio, where you can take in the stunning lake views while listening to loons call, coyotes bark, and hummingbirds flutter by. Watch as beavers glide through the water, fully immersing yourself in the beauty of the wild.
              </p>
              <p>
                Inside, you'll find everything you need for simple, off-grid living, including a two-burner propane stove, utensils, pots and pans, and a mini fridge to store your essentials—making meal prep a breeze. A guest favourite is our indulgent bathroom, featuring a full shower with breathtaking views of the lake.
              </p>
              <p>
                True to our commitment to sustainability, the Bunkie was built and furnished using repurposed and reclaimed materials. While it offers comfort and charm, you won’t find brand-new bedding or modern luxury appliances—just a space that honours the land by reducing waste and embracing simplicity.
              </p>
              <p>
                As the Bunkie is completely off-grid and deeply connected to nature, we ask guests to conserve power and use only biodegradable products inside and out. In keeping with our mission of compassion for all living beings, we kindly request that only plant-based foods be brought onto the property. This land is a sanctuary—a retreat from harm, where all creatures are observed and respected, not consumed.
              </p>
              <p>
                We invite you to experience the beauty of A KINDer World, where nature, sustainability, and kindness come together.
              </p>
            </div>
          </motion.div>

          {/* Full Photo Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Bunkie?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Book your stay and discover the peace of a KINDer World
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button>Contact Us</Button>
              </Link>
              <a
                href="https://www.airbnb.ca/rooms/41991299?guests=1&adults=1&s=67&unique_share_id=0e06b3ec-f5f9-4b32-af5c-d9197cd0f215"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5A5F] hover:bg-[#E04E53] text-white px-8 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Book on Airbnb
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
              }}
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

export default Bunkie;