import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/getAssetUrl';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]"> {/* Softer off-white/tan */}
      {/* Cinematic Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={getAssetUrl('images/gallery/ourstory.jpg')}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-light mb-4"
          >
            Our <span className="italic font-light">Story</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-24 bg-accent-100 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* The Visionaries - Julie, Murph, and Max */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={getAssetUrl('images/us.jpg')}
                  alt="The KINDer World Family"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="inline-block px-4 py-1 bg-primary-50 text-primary-700 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full">
                The Family Behind the Mission
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-950 leading-tight">
                Hunt Camp turns <br />
                <span className="italic font-light text-primary-700">Vegan Retreat</span>
              </h2>

              <div className="space-y-6 text-lg text-primary-900/80 leading-relaxed">
                <p className="text-2xl font-serif italic text-primary-900 mb-8 border-l-4 border-accent-100 pl-6">
                  "We are Julie, Murph, and Max, a small family with a big dream."
                </p>
                <div className="space-y-4 font-light">
                  <p>
                    For years, we longed to leave city life behind, live off-grid, and dedicate ourselves to protecting animals and nature. In 2018, that dream became a reality when we were given the incredible opportunity to purchase 300 acres of pristine wilderness.
                  </p>
                  <p>
                    As this land had been used exclusively as a hunting camp for decades, we intend to transform it into a place of peace for all. As stewards of this land and its waters, our mission is simple yet profound: to protect and preserve all life here.
                  </p>
                  <p>
                    From the towering trees to the tiniest creatures, every being, flora, fauna, and fish, is safe under our watch. Here, there is no hunting, no violence—only peace, respect, and coexistence for all.
                  </p>
                  <p>
                    Beyond conservation, we are deeply committed to animal rescue and opening our hearts and home to animals in need whenever possible. We believe in creating a sanctuary not just for wildlife, but for people too; a place where nature is left untouched, and harmony can thrive for generations to come.
                  </p>
                  <p className="pt-6 font-medium text-primary-900 italic">
                    The next chapter of our dream is to share this land with those who share our passion for the natural world and compassion for all.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Earthy Background */}
      <section className="py-24 bg-[#5E6D55] text-white overflow-hidden">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12 mb-8 md:mb-16"
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-100 block mb-4">Our Core Philosophy</span>
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none">
                Mission <span className="italic font-light text-primary-50">Statement</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-12"
            >
              <div className="grid md:grid-cols-2 gap-12 md:gap-20 text-lg md:text-xl text-white/90 font-light leading-relaxed">
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl text-white font-serif leading-snug">
                    There is an urgency to take steps to heal and nurture the planet. Creating A KINDer World is our contribution to making a positive change.
                  </p>
                  <p>
                    For us, this is where action meets intention, and hopefully inspiring change through mindful living. Nonviolence, compassion, and ethical stewardship guide us. This means treading lightly, reusing resources where possible, conserving water, and making choices that honour and protect all living beings.
                  </p>
                </div>
                <div className="space-y-8">
                  <p>
                    As a fully plant-based property, we invite guests to explore a way of living that nurtures rather than harms—where animals are observed in nature, not consumed on a plate.
                  </p>
                  <p>
                    Beyond providing a peaceful escape, we aim to inspire a shift in perspective. Our Kids Summer Camp fosters deep connections with nature, encouraging empathy, creativity, and ethical thinking in future generations.
                  </p>
                  <p>
                    We hope that every guest leaves feeling rejuvenated, empowered, and enlightened, with a renewed sense of responsibility toward our planet and all who inhabit it.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-20 p-10 md:p-16 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 text-center"
              >
                <p className="text-xl md:text-2xl font-serif italic mb-4">
                  "Letting nature thrive without exploitation or harm is at the core of our values. A KINDer World is our way of showing that another way is possible."
                </p>
                <p className="text-accent-100 font-bold uppercase tracking-widest text-sm">We welcome you to be part of this journey.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Land Acknowledgement - Soft Tan Accent */}
      <section className="py-24 md:py-32 bg-[#F3E8D8]/50">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-10 md:p-20 shadow-xl border border-primary-50 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              <div className="md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 leading-tight">
                  Land <br /><span className="italic font-light text-primary-700">Acknowledgment</span>
                </h2>
                <div className="h-1 w-12 bg-accent-100 mt-6 rounded-full" />
              </div>
              <div className="md:w-2/3 space-y-6 text-lg text-primary-900/70 leading-relaxed font-light">
                <p>
                  We acknowledge that A KINDer World is situated on the traditional territories of the Anishinaabe and Haudenosaunee peoples, including the Mississauga, Huron-Wendat and Kanien'kehá:ka (Mohawk) Nations who are the original stewards and custodians of these lands.
                </p>
                <p>
                  We pay respect to their Elders, past and present, and recognize the ongoing legacy of their culture and resilience on this land. We promise to continue to learn, listen and challenge the real Truth and Reconciliation in our community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
