import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/getAssetUrl';


const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Cinematic Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={getAssetUrl('images/hero/hero6.jpg')}
            alt="Pristine Wilderness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 border border-white/20 backdrop-blur-md rounded-full text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium mb-8"
          >
            The Journey to KINDness
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif font-bold mb-6 tracking-tighter"
          >
            Our <span className="italic font-light text-primary-100">Story</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-1 w-24 bg-accent-100 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Intro Section - The Family */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src={getAssetUrl('images/us.jpg')}
                  alt="Julie, Murph, and Max"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-100 rounded-full -z-0 blur-3xl opacity-50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-950 leading-tight">
                Hunt Camp Turns <br />
                <span className="italic font-light text-primary-700 text-5xl md:text-7xl">Vegan Retreat</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-primary-900/80 leading-relaxed font-light">
                <p className="text-2xl md:text-3xl font-serif italic text-primary-900 mb-8 leading-snug">
                  "We are Julie, Murph, and Max, a small family with a big dream."
                </p>
                <p>
                  For years, we longed to leave city life behind, live off-grid, and dedicate ourselves to protecting animals and nature. In 2018, that dream became a reality when we were given the incredible opportunity to purchase 300 acres of pristine wilderness.
                </p>
                <p>
                  As this land had been used exclusively as a hunting camp for decades, we intend to transform it into a place of peace for all. As stewards of this land and its waters, our mission is simple yet profound: to protect and preserve all life here.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Transformation Grid */}
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src={getAssetUrl('images/hero/hero9.jpg')} alt="Lake views" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-serif italic mb-2">Pristine Waters</h3>
                <p className="text-white/80 text-lg font-light">Safe haven for flora, fauna, and fish.</p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
              <img src={getAssetUrl('images/hero/hero2.jpg')} alt="Forest trails" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-white text-3xl font-serif italic mb-2">Wilderness</h3>
                <p className="text-white/80 text-lg font-light">Untouched nature thrives here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Acknowledgement */}
      <section className="py-24 md:py-32">
        <div className="container-custom max-w-5xl">
          <div className="space-y-32">
            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-10 top-0 text-9xl font-serif text-primary-100/50 -z-10 select-none">"</div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-950 mb-12 italic">The Mission</h2>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  <p>
                    There is an urgency to take steps to heal and nurture the planet. Creating A KINDer World is our contribution to making a positive change. For us, this is where action meets intention.
                  </p>
                  <p>
                    Nonviolence, compassion, and ethical stewardship guide us. This means treading lightly, reusing resources, and making choices that honour and protect all living beings.
                  </p>
                </div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                  <p>
                    Beyond conservation, we are deeply committed to animal rescue and opening our hearts and home to animals in need whenever possible.
                  </p>
                  <p>
                    As a fully vegan property, we invite guests to explore a way of living that nurtures rather than harms—where animals are observed in nature, not consumed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Land Acknowledgement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-accent-100 rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">Land <br />Acknowledgment</h2>
                  <div className="h-1 w-12 bg-primary-600 mt-6 rounded-full" />
                </div>
                <div className="md:w-2/3 space-y-6 text-lg text-gray-800 leading-relaxed font-light">
                  <p>
                    We acknowledge that A KINDer World is situated on the traditional territories of the Anishinaabe and Haudenosaunee peoples, including the Mississauga, Huron-Wendat and Kanien'kehá:ka (Mohawk) Nations who are the original stewards and custodians of these lands.
                  </p>
                  <p>
                    We pay respect to their Elders, past and present, and recognize the ongoing legacy of their culture and resilience on this land. We promise to continue to learn, listen and challenge the real Truth and Reconciliation in our community.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
