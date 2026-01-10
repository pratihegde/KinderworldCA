import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, VolumeX, Trees, Heart, Battery, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Private 300 Acres',
      description: 'Vast, untouched wilderness offering complete seclusion and a rare sense of freedom to explore.',
      icon: <Trees className="w-8 h-8" />,
    },
    {
      title: 'Zero Noise Pollution',
      description: 'Find true silence, broken only by the sounds of the wind, birds, and the call of the loon.',
      icon: <VolumeX className="w-8 h-8" />,
    },
    {
      title: 'Wildlife Sanctuary',
      description: 'A dedicated haven where wild animals are respected as the true owners of the land.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: '100% Vegan property',
      description: 'A purely compassionate sanctuary where ethical living is at the heart of everything we do.',
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      title: 'Off-Grid Simplicity',
      description: 'Reconnect with nature\'s rhythms through sustainable practices and mindful energy use.',
      icon: <Battery className="w-8 h-8" />,
    },
    {
      title: 'Ethical Stewardship',
      description: 'Our mission is to protect, preserve, and rejuvenate this magical land for future generations of all species.',
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <section className="section-padding bg-[#F3E8D8] py-32">
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 border-2 border-primary-600/30 rounded-full text-primary-700 text-xs uppercase tracking-[0.4em] font-bold mb-8"
          >
            THE <span className="font-black">KIND</span>er World Difference
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary-950 mb-8 leading-tight"
          >
            A Sanctuary Built <br /><span className="italic font-light text-primary-600">on Kindness</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-900/70 text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Discover the values that make our 300-acre retreat a world apart.
            A place where ethical living and natural beauty meet.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              className="bg-white p-12 rounded-[48px] shadow-xl shadow-primary-900/5 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 group border border-white"
            >
              <div className="mb-10 p-6 bg-primary-50 rounded-[24px] text-primary-600 w-fit group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-950 mb-5 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-primary-800/80 text-lg leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
