import React from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/getAssetUrl';


const OurStory = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Hunt Camp Turns Vegan Retreat
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <img
              src={getAssetUrl('/images/us.jpg')}
              alt="Our land"
              className="w-full max-w-2xl rounded-3xl shadow-2xl mb-16 object-cover aspect-video"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We are Julie, Murph, and Max, a small family with a big dream. For years, we longed to leave city life behind, live off-grid, and dedicate ourselves to protecting animals and nature. In 2018, that dream became a reality when we were given the incredible opportunity to purchase 300 acres of pristine wilderness.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                As this land had been used exclusively as a hunting camp for decades, we intend to transform it into a place of peace for all. As stewards of this land and its waters, our mission is simple yet profound: to protect and preserve all life here. From the towering trees to the tiniest creatures, every being, flora, fauna, and fish, is safe under our watch. Here, there is no hunting, no violence—only peace, respect, and coexistence for all.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Beyond conservation, we are deeply committed to animal rescue and opening our hearts and home to animals in need whenever possible. We believe in creating a sanctuary not just for wildlife, but for people too; a place where nature is left untouched, and harmony can thrive for generations to come.
              </p>

              <p className="text-gray-700 leading-relaxed mb-12">
                The next chapter of our dream is to share this land with those who share our passion for the natural world and compassion for all. We invite you to experience this peaceful haven with us, to reconnect with nature, and to be part of a movement that cherishes and protects the world we share.
              </p>

              <div className="bg-primary-50 rounded-xl p-8 my-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission Statement</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  There is an urgency to take steps to heal and nurture the planet. Creating A KINDer World is our contribution to making a positive change. For us, this is where action meets intention, and hopefully inspiring change through mindful living.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Nonviolence, compassion, and ethical stewardship guide us. This means treading lightly, reusing resources where possible, conserving water, and making choices that honour and protect all living beings. As a fully vegan property, we invite guests to explore a way of living that nurtures rather than harms—where animals are observed in nature, not consumed on a plate.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond providing a peaceful escape, we aim to inspire a shift in perspective. Our Kids Summer Camp fosters deep connections with nature, encouraging empathy, creativity, and ethical thinking in future generations. We hope that every guest leaves feeling rejuvenated, empowered, and enlightened, with a renewed sense of responsibility toward our planet and all who inhabit it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We must not only reduce our impact but actively rejuvenate ecosystems, protect wildlife, reduce animal use, and create a better world for future generations. Letting nature thrive without exploitation or harm is at the core of our values. A KINDer World is our way of showing that another way is possible.
                </p>
              </div>

              <div className="bg-accent-100 rounded-xl p-8 my-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Land Acknowledgement</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We acknowledge that A KINDer World is situated on the traditional territories of the Anishinaabe and Haudenosaunee peoples, including the Mississauga, Huron-Wendat and Kanien'kehá:ka (Mohawk) Nations who are the original stewards and custodians of these lands. We pay respect to their Elders, past and present, and recognize the ongoing legacy of their culture and resilience on this land. As part of the Upper Canada Land Surrenders, under the Crawford Purchase of 1784, no treaty was ever signed. We promise to continue to learn, listen and challenge the real Truth and Reconciliation in our community.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are steeped in gratitude to have access to this land, for the ability to protect, cherish and honour the divine beings who reside here.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We consider it our privilege to tread lightly here, using only sustainable and regenerative practices. We thank you for joining us as we collectively strive towards creating A KINDer World for all.
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
