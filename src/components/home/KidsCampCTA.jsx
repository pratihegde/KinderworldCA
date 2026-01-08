import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const KidsCampCTA = () => {
    return (
        <section className="section-padding">
            <div className="container-custom max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/kids-camp"
                        className="block group"
                    >
                        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="grid md:grid-cols-5 gap-0">
                                {/* Image Side - Takes 3 columns */}
                                <div className="md:col-span-3 h-64 md:h-80 relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80"
                                        alt="Kids Camp"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                                </div>

                                {/* Content Side - Takes 2 columns */}
                                <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-primary-50 to-white">
                                    <div className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-4 self-start">
                                        SUMMER 2026
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-700 mb-3">
                                        Vegan Kids Camp
                                    </h3>

                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        A week-long wilderness adventure for compassionate kids ages 9-14
                                    </p>

                                    <div className="flex items-center space-x-2 text-primary-600 mb-6">
                                        <Calendar size={18} />
                                        <span className="font-semibold text-sm">August 9-15, 2026 • Ages 9-14</span>
                                    </div>

                                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default KidsCampCTA;
