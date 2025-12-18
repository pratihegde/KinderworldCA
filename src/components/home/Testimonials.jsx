import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Card from '../common/Card';
import { testimonials } from '../../data/content';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 font-light">
            What Our Guests Say
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Read about the experiences of those who've found peace at A KINDer World
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover={false} className="h-full">
                <div className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic font-light leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-medium text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 font-light">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;