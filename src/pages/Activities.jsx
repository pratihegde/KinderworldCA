import React from 'react';
import { motion } from 'framer-motion';
import { activities } from '../data/content';
import Card from '../components/common/Card';

const Activities = () => {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Reconnect with Nature Through Mindful Experiences
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <div className="relative h-64">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 text-5xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {activity.name}
                    </h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
