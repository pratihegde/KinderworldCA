import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, Camera, MapPin, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';

const KidsCamp = () => {
    const containerRef = useRef(null);

    // Images - using high quality Unsplash as fallbacks for now
    const campImages = [
        { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', alt: 'Kids in nature', size: 'large', rotation: -2 },
        { src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80', alt: 'Campfire fun', size: 'medium', rotation: 3 },
        { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80', alt: 'Summer lake', size: 'small', rotation: -5 },
        { src: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=800&q=80', alt: 'Adventure travel', size: 'large', rotation: 2 },
        { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Outdoor learning', size: 'medium', rotation: -1 },
        { src: 'https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?w=800&q=80', alt: 'Nature kids', size: 'small', rotation: 4 },
    ];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xTranslate1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const xTranslate2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    const springX1 = useSpring(xTranslate1, { stiffness: 50, damping: 20 });
    const springX2 = useSpring(xTranslate2, { stiffness: 50, damping: 20 });

    return (
        <div className="min-h-screen bg-[#F3E8D8]">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80)` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
                            Summer 2026 Registration Open
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tight">
                            A <span className="italic font-light">KIND</span>er World Summer Camp
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
                            Connecting children with nature through compassion, adventure, and community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Info Section */}
            <section className="py-12 bg-white/80 backdrop-blur-md relative z-20 border-b border-primary-100">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                        <div className="flex items-center space-x-4 text-primary-900">
                            <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary-500 mb-0.5">Dates</p>
                                <p className="font-bold text-lg">August 9-15, 2026</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 text-primary-900">
                            <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary-500 mb-0.5">Ages</p>
                                <p className="font-bold text-lg">9-14 Years Old</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 text-primary-900">
                            <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary-500 mb-0.5">Location</p>
                                <p className="font-bold text-lg">Ontario Wilderness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Moving Gallery */}
            <section ref={containerRef} className="py-24 overflow-hidden select-none bg-[#F3E8D8]">
                <div className="container-custom mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-3 mb-6 bg-primary-100/50 px-4 py-2 rounded-full text-primary-700"
                    >
                        <Camera size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Life at Camp</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-primary-950 mb-6"
                    >
                        Unforgettable Memories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-primary-800/70 max-w-xl mx-auto text-lg font-light leading-relaxed"
                    >
                        A glimpse into the magical experiences our campers share in the heart
                        of the Canadian wilderness.
                    </motion.p>
                </div>

                {/* Row 1 - Moving Left */}
                <motion.div style={{ x: springX1 }} className="flex space-x-8 mb-8 whitespace-nowrap px-4">
                    {campImages.map((image, idx) => (
                        <motion.div
                            key={`row1-${idx}`}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            style={{ rotate: image.rotation }}
                            className={`inline-block relative overflow-hidden rounded-[32px] shadow-2xl flex-shrink-0 cursor-pointer bg-white p-3 md:p-5 group transition-all duration-500 ${image.size === 'large' ? 'w-[400px] h-[500px]' :
                                image.size === 'medium' ? 'w-[300px] h-[400px]' : 'w-[250px] h-[300px]'
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-[24px]"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Sparkles className="text-white" size={48} />
                            </div>
                        </motion.div>
                    ))}
                    {/* Duplicate for seamless feel */}
                    {campImages.map((image, idx) => (
                        <div
                            key={`row1-dup-${idx}`}
                            className={`inline-block relative overflow-hidden rounded-[32px] shadow-2xl flex-shrink-0 bg-white p-3 md:p-5 ${image.size === 'large' ? 'w-[400px] h-[500px]' :
                                image.size === 'medium' ? 'w-[300px] h-[400px]' : 'w-[250px] h-[300px]'
                                }`}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-[24px]" />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - Moving Right */}
                <motion.div style={{ x: springX2 }} className="flex space-x-12 whitespace-nowrap px-4">
                    {[...campImages].reverse().map((image, idx) => (
                        <motion.div
                            key={`row2-${idx}`}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            style={{ rotate: -image.rotation }}
                            className={`inline-block relative overflow-hidden rounded-[32px] shadow-2xl flex-shrink-0 cursor-pointer bg-white p-3 md:p-5 group transition-all duration-500 ${image.size === 'large' ? 'w-[450px] h-[350px]' :
                                image.size === 'medium' ? 'w-[350px] h-[300px]' : 'w-[280px] h-[250px]'
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-[24px]"
                            />
                        </motion.div>
                    ))}
                    {[...campImages].reverse().map((image, idx) => (
                        <div
                            key={`row2-dup-${idx}`}
                            className={`inline-block relative overflow-hidden rounded-[32px] shadow-2xl flex-shrink-0 bg-white p-3 md:p-5 ${image.size === 'large' ? 'w-[450px] h-[350px]' :
                                image.size === 'medium' ? 'w-[350px] h-[300px]' : 'w-[280px] h-[250px]'
                                }`}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover rounded-[24px]" />
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-950 leading-tight">
                                A Wilderness <br />Built on Kindness
                            </h2>
                            <div className="space-y-6 text-primary-800/80 text-xl leading-relaxed font-light">
                                <p>
                                    At <strong>A KINDer World</strong> we believe that connecting with nature isn't just fun
                                    for kids—it's vital to their healthy development.
                                </p>
                                <p>
                                    Immersed in nature, our campers sleep under the stars in tents and unplug completely
                                    from technology. They forge deep connections with the natural world, build
                                    beautiful friendships, and create unforgettable memories.
                                </p>
                                <p>
                                    Our camp fosters kindness toward each other, animals, and the planet while
                                    offering a truly Canadian summer camp experience, with activities like
                                    paddleboarding, swimming, hiking, and campfires.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary-50 p-10 md:p-14 rounded-[48px] border border-primary-100 shadow-sm"
                        >
                            <h3 className="text-3xl font-serif font-bold mb-6 text-primary-950 italic">The Vegan Experience</h3>
                            <p className="text-primary-800/80 text-lg leading-relaxed mb-8 font-light">
                                For one special week each year, our camp is reserved exclusively for vegan children.
                                This intimate experience offers like-minded young people the chance to connect
                                without the presence of fishing or animal consumption.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Compassionate Community',
                                    'Delicious Vegan Meals',
                                    'Peaceful Sanctuary Environment',
                                    'No Tech - Fully Unplugged'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-primary-900 font-medium">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Heart size={12} className="text-red-500 fill-red-500" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12">
                                <Link to="/contact">
                                    <Button className="w-full bg-red-600 hover:bg-black text-white py-6 rounded-2xl text-xl font-bold shadow-xl shadow-red-200 transition-all active:scale-95">
                                        Enroll for 2026
                                    </Button>
                                </Link>
                                <p className="text-center text-primary-500 text-sm mt-4 tracking-wide font-medium">Limited Spaces Available</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KidsCamp;
