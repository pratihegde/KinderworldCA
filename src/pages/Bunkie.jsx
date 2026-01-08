import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, WifiOff, Zap, Check } from 'lucide-react';
import Button from '../components/common/Button';
import { getAssetUrl } from '../utils/getAssetUrl';

const Bunkie = () => {
  const features = [
    'Private screened-in patio with lake views',
    'Full shower with breathtaking lake views',
    'Two-burner propane stove',
    'Mini fridge for essentials',
    'Utensils, pots, and pans provided',
    'Built with reclaimed materials',
    'Completely off-grid',
    'Biodegradable products only',
    'Vegan foods only'
  ];

  // Gallery images - using getAssetUrl helper
  const galleryImages = [
    { src: getAssetUrl('images/gallery/bunkie1.jpg'), alt: 'Bunkie exterior view' },
    { src: getAssetUrl('images/gallery/bunkie2.jpg'), alt: 'Lake view from bunkie' },
    { src: getAssetUrl('images/gallery/bunkie3.jpg'), alt: 'Bunkie with lake' },
    { src: getAssetUrl('images/gallery/bunkie4.jpg'), alt: 'Bunkie interior bathroom' },
    { src: getAssetUrl('images/gallery/bunkie5.jpg'), alt: 'Bunkie screened patio' },
    { src: getAssetUrl('images/gallery/bunkie6.jpg'), alt: 'Bunkie kitchen area' },
    { src: getAssetUrl('images/gallery/bunkie7.jpg'), alt: 'Bunkie bedroom' },
    { src: getAssetUrl('images/gallery/bunkie8.jpg'), alt: 'Bunkie sunset view' },
    { src: getAssetUrl('images/gallery/bunkie9.jpg'), alt: 'Bunkie night view' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${getAssetUrl('images/gallery/bunkie1.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
                <WifiOff size={18} />
                <span>Off-Grid</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Living Sustainably and Peacefully
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Bunkie is a cozy lakeside retreat designed for up to three guests, offering a peaceful escape into nature. Relax on your private screened-in patio, where you can take in the stunning lake views while listening to loons call, coyotes bark, and hummingbirds flutter by.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Watch as beavers glide through the water, fully immersing yourself in the beauty of the wild. Inside, you'll find everything you need for simple, off-grid living, including a two-burner propane stove, utensils, pots and pans, and a mini fridge to store your essentials—making meal prep a breeze.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A guest favourite is our indulgent bathroom, featuring a full shower with breathtaking views of the lake.
              </p>
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
              What's Included
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

          {/* Sustainability Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent-100 rounded-xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Sustainability
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              True to our commitment to sustainability, the Bunkie was built and furnished using repurposed and reclaimed materials. While it offers comfort and charm, you won't find brand-new bedding or modern luxury appliances—just a space that honours the land by reducing waste and embracing simplicity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As the Bunkie is completely off-grid and deeply connected to nature, we ask guests to conserve power and use only biodegradable products inside and out.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In keeping with our mission of compassion for all living beings, we kindly request that only vegan foods be brought onto the property. This land is a sanctuary—a retreat from harm, where all creatures are observed and respected, not consumed.
            </p>
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
              Book your stay and discover the peace of off-grid living
            </p>
            <Link to="/contact">
              <Button>Book Your Stay</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bunkie;