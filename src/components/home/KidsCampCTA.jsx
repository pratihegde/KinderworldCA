import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';

const KidsCampCTA = () => {
    return (
        <section className="py-16 md:py-24 bg-[#F5F3F0]">
            <div className="max-w-[95%] lg:max-w-[1400px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        to="/kids-camp"
                        className="block group"
                    >
                        <div className="bg-primary-50 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_15px_50px_rgb(0,0,0,0.12)] transition-all duration-500 overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Image Side */}
                                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden">
                                    <img
                                        src={getAssetUrl('images/kidscamp/yockondock02.jpg')}
                                        alt="Vegan Kids Camp Group"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                                </div>

                                {/* Content Side */}
                                <div className="p-10 md:p-12 lg:p-14 xl:p-20 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1.5 bg-primary-600 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-8 self-start">
                                        Summer 2026
                                    </div>

                                    <h3 className="font-serif text-3xl md:text-4xl lg:text-[42px] xl:text-6xl text-gray-900 mb-6 leading-[1.1] font-light">
                                        Vegan <span className="italic">Kids Camp</span>
                                    </h3>

                                    <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                                        A week-long wilderness adventure for compassionate kids. Connect with nature while creating life long friendships and memories.
                                    </p>

                                    <div className="flex flex-wrap items-center gap-2 text-primary-600 mb-10">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Calendar size={20} />
                                        </div>
                                        <span className="font-medium text-lg">August 9-15 • Ages 9-15</span>
                                    </div>

                                    <div className="inline-flex items-center space-x-3 text-primary-600 font-medium text-lg border-b border-primary-600/30 pb-1 w-fit group-hover:border-primary-600 transition-colors">
                                        <span>Discover the Magic</span>
                                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
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
