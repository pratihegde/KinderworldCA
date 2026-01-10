import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import Card from '../common/Card';
import { testimonials } from '../../data/content';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const reviewsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / reviewsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 md:py-32 bg-[#FDFCFB] overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
            Guest Experiences
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6 font-light italic">
            What our guests have to say...
          </h2>
          <div className="h-1 w-20 bg-accent-100 mx-auto rounded-full" />
        </motion.div>

        {/* Paginated Review Container */}
        <div className="relative group">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {[...Array(Math.ceil(testimonials.length / reviewsPerPage))].map((_, pageIndex) => (
                <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                  {testimonials.slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage).map((testimonial, idx) => (
                    <motion.div
                      key={idx}
                      className="h-full"
                    >
                      <div className="bg-primary-50/50 p-6 md:p-10 rounded-[32px] h-full flex flex-col justify-between border border-primary-100/30 hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-lg">
                        <div>
                          <div className="flex mb-6 space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={14} className="fill-primary-600 text-primary-600 opacity-60" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light italic mb-8">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-base">
                            {testimonial.name[0]}
                          </div>
                          <div>
                            <p className="font-serif text-base md:text-lg font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-[10px] text-primary-600 font-bold tracking-widest uppercase">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white shadow-xl text-primary-900 hover:bg-primary-50 transition-all opacity-0 group-hover:opacity-100 border border-primary-50"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white shadow-xl text-primary-900 hover:bg-primary-50 transition-all opacity-100 border border-primary-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-primary-600' : 'w-2 bg-primary-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;