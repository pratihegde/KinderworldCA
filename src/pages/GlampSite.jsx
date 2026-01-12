import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, WifiOff, Zap, Check, Leaf, Anchor, X, ChevronLeft, ChevronRight, Trees } from 'lucide-react';
import Button from '../components/common/Button';
import { getAssetUrl } from '../utils/getAssetUrl';

const GlampSite = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const features = [
    'Solar powered outlets & lighting',
    'Screened-in outdoor kitchen',
    'Propane burner & cookware',
    'Composting toilet',
    'Spacious gazebo',
    'Lake access',
    'Privacy in nature',
    'Access to kms of private hiking trails',
    'Private dock'
  ];

  // Expanded Gallery images
  const galleryImages = [
    { src: getAssetUrl('images/glampsite/campsite.jpg'), alt: 'Glamping Setup' },
    { src: getAssetUrl('images/glampsite/we_the_free.jpg'), alt: 'We The Free' },
    { src: getAssetUrl('images/glampsite/glamp1.jpg'), alt: 'Nature Retreat' },
    { src: getAssetUrl('images/glampsite/campsite_kitchen.jpg'), alt: 'Outdoor Kitchen' },
    { src: getAssetUrl('images/glampsite/glamp2.jpg'), alt: 'Cozy Tent' },
    { src: getAssetUrl('images/glampsite/campsite_friends.jpg'), alt: 'Friends at Camp' },
    { src: getAssetUrl('images/glampsite/camp_dock.jpg'), alt: 'Dock Views' },
    { src: getAssetUrl('images/glampsite/IMG_0322.jpg'), alt: 'Nature Vibes' },
    { src: getAssetUrl('images/glampsite/glamp3.jpg'), alt: 'Peaceful Morning' },
    { src: getAssetUrl('images/glampsite/IMG_0876.jpg'), alt: 'Camp Life' },
    { src: getAssetUrl('images/glampsite/kinder_camp5.jpg'), alt: 'Relaxing Spot' },
    { src: getAssetUrl('images/glampsite/sound_bowls.jpg'), alt: 'Sound Bowls' },
    { src: getAssetUrl('images/glampsite/camp_toilet.jpg'), alt: 'Eco Toilet' },
    { src: getAssetUrl('images/glampsite/camp_toilets.jpg'), alt: 'Facilities' },
    { src: getAssetUrl('images/glampsite/trail_to_camp_2.jpg'), alt: 'Forest Trail' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${getAssetUrl('images/glampsite/FullSizeRender_3.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Glamp Site</h1>
            <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
              A Peaceful Retreat for People, Animals and Nature
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Trees size={18} />
                <span>Private</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Leaf size={18} />
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Zap size={18} />
                <span>Solar Power</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8 italic leading-tight">
                Camping in <span className="font-semibold text-primary-600">Style</span>
              </h2>

              <div className="space-y-8 text-gray-700 leading-relaxed font-light text-lg">
                <p>
                  Welcome to our breathtaking Glamp Site, perched at the highest point for stunning panoramic views of the lake. Whether you're seeking adventure or relaxation, our unique “Glamp Site” offers the perfect blend of nature and comfort. This secluded hike-in or paddle-in vacation option is a perfect fit for first-time campers and backcountry enthusiasts alike!
                </p>

                <div className="grid gap-6">
                  <div className="border-l-4 border-primary-200 pl-6">
                    <h3 className="font-serif text-xl text-primary-900 mb-2 font-bold">Unwind in Comfort</h3>
                    <p>Enjoy your outdoor screened-in kitchen and cozy gazebo, perfect for sipping morning coffee, meditating, or stretching into a peaceful yoga session.</p>
                  </div>
                  <div className="border-l-4 border-primary-200 pl-6">
                    <h3 className="font-serif text-xl text-primary-900 mb-2 font-bold">Campfire & Connection</h3>
                    <p>Gather around the crackling fire under the stars, share stories, and create unforgettable memories.</p>
                  </div>
                  <div className="border-l-4 border-primary-200 pl-6">
                    <h3 className="font-serif text-xl text-primary-900 mb-2 font-bold">Camp Your Way</h3>
                    <p>Spread out and set up your tent on any of our 4 spacious tent pads.</p>
                  </div>
                  <div className="border-l-4 border-primary-200 pl-6">
                    <h3 className="font-serif text-xl text-primary-900 mb-2 font-bold">Complete Solitude</h3>
                    <p>Wake up to the sounds of nature in complete privacy at our secluded Glamp Site.</p>
                  </div>
                  <div className="border-l-4 border-primary-200 pl-6">
                    <h3 className="font-serif text-xl text-primary-900 mb-2 font-bold">Lakeside Fun Awaits</h3>
                    <p>Explore the tranquil waters from your private dock in a kayak, paddle-board, or canoes.</p>
                  </div>
                </div>

                <p className="font-medium text-primary-800 pt-4">
                  Come and experience the magic of being deep in nature without sacrificing comfort. Book your stay now and discover glamping at its finest!
                </p>
              </div>
            </motion.div>

            {/* Vertical Scrolling Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[850px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white"
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
                    animation: scrollVertical 40s linear infinite;
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
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Grid - Highlights */}
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

          {/* Sustainable Stays Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FDFBF7] rounded-[3rem] p-12 md:p-20 mb-20 border border-primary-100"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light text-gray-900 mb-10 italic leading-tight text-center">
              Sustainable Stays with <br /> <span className="font-semibold text-primary-600">Simple Comforts</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-gray-700 leading-relaxed font-light">
              <div className="space-y-6">
                <p>
                  Our Glamp Site offers a nature-immersed experience with just the right touch of comfort. Powered by solar energy, you'll have access to outlets and solar lighting for safety and convenience. Cook your own plant-based meals in our screened-in outdoor kitchen, equipped with a propane burner, cookware, and utensils, just bring your ingredients!
                </p>
                <p>
                  As part of our commitment to compassion for all living beings, we ask that only plant-based foods be enjoyed on the property.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Our composting toilet ensures an eco-friendly stay, aligned with our mission to protect the land and its inhabitants.
                </p>
                <p>
                  When it's time to unwind, retreat to the spacious gazebo, a peaceful spot to relax, connect, or stay warm. Experience the beauty of nature in harmony with all its creatures. Join us for a glamping adventure where nature, comfort, and compassion come together.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Host Your Own Retreat - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 rounded-[3rem] p-10 md:p-16 border-4 border-primary-200 shadow-2xl">
              <div className="text-center">
                <div className="inline-block px-8 py-3 bg-accent-400 text-white rounded-full text-sm md:text-base font-black uppercase tracking-widest mb-8 shadow-lg">
                  ✨ New Offering ✨
                </div>
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-primary-900 mb-8 leading-tight">
                  Host Your Own <span className="italic text-primary-600">Retreat</span>
                </h3>
                <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light mb-10 leading-relaxed">
                  We now open our sanctuary for you to host your own intimate retreats. Connect with us to learn how you can bring your community to this peaceful haven.
                </p>
                <Link to="/contact">
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl">
                    Learn More About Hosting
                  </Button>
                </Link>
              </div>
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
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Ready for a Nature Escape?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
              Book your stay in our eco-friendly Glamp Site and immerse yourself in the peace of the wilderness.
            </p>
            <Link to="/contact">
              <Button>Stay with us</Button>
            </Link>
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
    </div >
  );
};

export default GlampSite;
