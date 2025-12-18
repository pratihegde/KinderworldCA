import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Wifi, WifiOff, Zap, Check } from 'lucide-react';
import Button from '../components/common/Button';

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
    'Plant-based foods only'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1920)',
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
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800"
                alt="Bunkie interior"
                className="rounded-xl shadow-2xl"
              />
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
              In keeping with our mission of compassion for all living beings, we kindly request that only plant-based foods be brought onto the property. This land is a sanctuary—a retreat from harm, where all creatures are observed and respected, not consumed.
            </p>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-4 mb-16"
          >
            <img
              src="https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800"
              alt="Lake view"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800"
              alt="Forest"
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
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
