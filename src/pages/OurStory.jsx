import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/getAssetUrl';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]"> {/* Softer off-white/tan */}
      {/* Cinematic Hero Section */}
      {/* Cinematic Hero Section */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={getAssetUrl('images/activities/hiking1.jpg')}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </section>

      {/* Hero Text Box Below Image */}
      <section className="py-8 md:py-12 bg-white border-b border-primary-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-3 text-primary-950">
              Our <span className="italic">Story</span>
            </h1>
            <p className="text-lg md:text-xl font-light italic text-primary-800">
              "A deliberate way of living."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Visionaries - Julie, Murph, and Max */}
      <section className="py-16 md:py-24 bg-white">
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
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-950 leading-tight">
                Hunt Camp turns <br />
                <span className="italic font-light text-primary-700">Vegan Retreat</span>
              </h2>

              <div className="space-y-6 text-lg text-primary-900/80 leading-relaxed font-light">
                <p className="text-2xl font-serif italic text-primary-900 mb-8 border-l-4 border-accent-100 pl-6 font-normal">
                  "We are Julie, Murph, and Max, a small family with a big dream."
                </p>
                <p>
                  For years, we longed to leave city life behind, live off-grid, and dedicate ourselves to protecting animals and nature. In 2018, that dream became a reality when we purchased 300 acres of pristine wilderness.
                </p>
                <p>
                  This land had been used exclusively as a hunting camp for decades. We are transforming it into a sanctuary where every being—from towering trees to the tiniest creatures—is safe. Here, there is no hunting or violence; only peace, respect, and coexistence.
                </p>
                <p>
                  Beyond conservation, we are committed to animal rescue and opening our home to animals in need. We believe in creating a sanctuary where nature is left untouched and harmony can thrive for generations.
                </p>
                <p className="pt-6 font-medium text-primary-900 italic">
                  We invite you to share this land and join us in protecting the natural world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Earthy Background */}
      <section className="py-24 bg-[#5E6D55] text-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-100 block">Our Core Philosophy</span>
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none">
                Mission <span className="italic font-light text-primary-50">Statement</span>
              </h2>
              <p className="text-2xl md:text-3xl text-white font-serif leading-snug">
                There is an urgency to heal and nurture the planet. This is our contribution to positive change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-white/90 font-light leading-relaxed"
            >
              <p>
                Nonviolence, compassion, and ethical stewardship guide us. We tread lightly, reuse resources, and make choices that honour all living beings. As a plant-based property, we invite guests to explore a way of living that nurtures rather than harms.
              </p>
              <p>
                Beyond providing a peaceful escape, we aim to inspire a shift in perspective. Our Kids Summer Camp fosters empathy, creativity, and ethical thinking in future generations. We hope every guest leaves feeling rejuvenated and enlightened.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20 text-center"
          >
            <p className="text-xl md:text-2xl font-serif italic mb-4">
              "Letting nature thrive without exploitation is at our core. A KINDer World shows that another way is possible."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Land Acknowledgement - Minimized */}
      <section className="py-16 bg-[#F3E8D8]/30">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-primary-900 opacity-60">Land Acknowledgment</h3>
            <div className="text-xs md:text-sm text-primary-900/60 leading-relaxed font-light space-y-4">
              <p>
                We acknowledge that A KINDer World is situated on the traditional territories of the Anishinaabe and Haudenosaunee peoples, including the Mississauga, Huron-Wendat and Kanienʼkeháka (Mohawk) Nations who are the original custodians of these lands. We pay respect to their Elders, past and present.
              </p>
              <p>
                As part of the Crawford Purchase of 1784, no treaty was ever signed. We promise to continue to learn and challenge the real Truth and Reconciliation in our community. We are steeped in gratitude for the ability to protect and honour the beings who reside here.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
