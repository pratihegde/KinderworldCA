import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { activities } from '../../data/content';
import Button from '../common/Button';

const ActivitiesPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 font-light">
            Activities & Experiences
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Reconnect with nature through our mindful activities and peaceful experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="text-3xl md:text-4xl mb-2">{activity.icon}</div>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-2 font-light">{activity.name}</h3>
                <p className="text-white/90 text-sm font-light">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/activities">
            <Button>
              View All Activities
              <ArrowRight className="inline ml-2" size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesPreview;