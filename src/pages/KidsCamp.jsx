import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, Camera, MapPin, Sparkles, X } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';
import Button from '../components/common/Button';

const GalleryCard = ({ image, onClick }) => (
    <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onClick(image)}
        className="relative group overflow-hidden rounded-[2.5rem] shadow-xl bg-white cursor-pointer border border-primary-100/30 w-full"
    >
        <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.05]"
            loading="lazy"
        />
        <div className="absolute inset-0 bg-primary-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{image.alt}</p>
                <div className="h-0.5 w-8 bg-accent-100 rounded-full" />
            </div>
        </div>
    </motion.div>
);

const KidsCamp = () => {
    const [selectedImg, setSelectedImg] = React.useState(null);
    const [heroImgIndex, setHeroImgIndex] = React.useState(0);

    // All 22 local images
    const campImages = [
        { src: getAssetUrl('images/kidscamp/group.jpg'), alt: 'Campers Group' },
        { src: getAssetUrl('images/kidscamp/3girls.jpg'), alt: 'Best Friends' },
        { src: getAssetUrl('images/kidscamp/3_girls_in_woods.jpg'), alt: 'Forest Exploration' },
        { src: getAssetUrl('images/kidscamp/boards.jpg'), alt: 'Paddle Boarding' },
        { src: getAssetUrl('images/kidscamp/birdwatching.jpg'), alt: 'Bird Watching' },
        { src: getAssetUrl('images/kidscamp/soundbowls.jpg'), alt: 'Sound Bath' },
        { src: getAssetUrl('images/kidscamp/yogaondock.jpg'), alt: 'Morning Yoga' },
        { src: getAssetUrl('images/kidscamp/swimmingrock.jpg'), alt: 'Swimming' },
        { src: getAssetUrl('images/kidscamp/whiteshirt.jpg'), alt: 'Summer Smiles' },
        { src: getAssetUrl('images/kidscamp/IMG_1277.jpg'), alt: 'Lake Life' },
        { src: getAssetUrl('images/kidscamp/jump.jpg'), alt: 'The Big Jump' },
        { src: getAssetUrl('images/kidscamp/kayak.jpg'), alt: 'Kayaking' },
        { src: getAssetUrl('images/kidscamp/lake.jpg'), alt: 'Pristine Lake' },
        { src: getAssetUrl('images/kidscamp/paddle.jpg'), alt: 'Paddling Together' },
        { src: getAssetUrl('images/kidscamp/paddle2.jpg'), alt: 'Sunset Paddle' },
        { src: getAssetUrl('images/kidscamp/paddle4.jpg'), alt: 'Quiet Waters' },
        { src: getAssetUrl('images/kidscamp/rowboat.jpg'), alt: 'Boat Trip' },
        { src: getAssetUrl('images/kidscamp/summer.jpg'), alt: 'Summer Sun' },
        { src: getAssetUrl('images/kidscamp/table.jpg'), alt: 'Art & Crafts' },
        { src: getAssetUrl('images/kidscamp/camp.jpg'), alt: 'Campfire Magic' },
        { src: getAssetUrl('images/kidscamp/chloseandattica.jpg'), alt: 'Puppy Love' },
        { src: getAssetUrl('images/kidscamp/KinderCamp2024-22.jpg'), alt: 'Wilderness Adventure' },
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setHeroImgIndex((prev) => (prev + 1) % campImages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [campImages.length]);

    return (
        <div className="min-h-screen bg-[#F3E8D8]">
            {/* Hero Section - Full Cover */}
            <section className="relative h-[85vh] overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={heroImgIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center transform-gpu"
                        style={{ backgroundImage: `url(${campImages[heroImgIndex].src})` }}
                    >
                        <div className="absolute inset-0 bg-black/30" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block px-6 py-2 bg-red-600 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
                            Summer 2026 Registration Open
                        </span>
                        <h1 className="text-6xl md:text-[10rem] font-sans leading-none mb-12 tracking-tight">
                            A <span className="font-bold">KIND</span>er World
                        </h1>
                        <p className="text-xl md:text-3xl font-light max-w-3xl mx-auto opacity-95 leading-relaxed">
                            Connecting children with nature through compassion, <br className="hidden md:block" /> adventure, and community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-primary-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-all bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImg(null);
                            }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative max-w-5xl w-full h-full flex items-center justify-center p-4"
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.alt}
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
                            />
                            <div className="absolute bottom-8 left-0 w-full text-center">
                                <p className="text-white text-xs font-bold uppercase tracking-[0.4em] mb-2">{selectedImg.alt}</p>
                                <div className="h-0.5 w-16 bg-red-600 mx-auto rounded-full" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stats/Info Section */}
            <section className="py-20 bg-white/80 backdrop-blur-md relative z-20 border-b border-primary-100">
                <div className="container-custom">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-32">
                        <div className="flex items-center space-x-6 text-primary-900">
                            <div className="p-4 bg-red-50 rounded-[2rem] text-red-600 shadow-inner">
                                <Calendar size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary-500 mb-1">Dates</p>
                                <p className="font-bold text-xl">August 9-15, 2026</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 text-primary-900">
                            <div className="p-4 bg-red-50 rounded-[2rem] text-red-600 shadow-inner">
                                <Users size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary-500 mb-1">Ages</p>
                                <p className="font-bold text-xl">9-14 Years Old</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 text-primary-900">
                            <div className="p-4 bg-red-50 rounded-[2rem] text-red-600 shadow-inner">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary-500 mb-1">Location</p>
                                <p className="font-bold text-xl">Ontario Wilderness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Footer Grey Background */}
            <section className="py-32 bg-[#7A746C] overflow-hidden relative">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center space-x-4 mb-8 bg-white/10 backdrop-blur-sm px-8 py-2 rounded-full text-white/80 border border-white/20"
                        >
                            <Camera size={20} className="text-red-300" />
                            <span className="text-xs font-bold uppercase tracking-[0.4em]">Visual Sanctuary</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-6xl md:text-9xl font-serif font-bold text-white mb-10 leading-[0.9]"
                        >
                            Life <span className="italic font-light text-primary-100">at Camp</span>
                        </motion.h2>
                    </div>

                    <div className="relative h-[900px] overflow-hidden rounded-[4rem] border-8 border-white/90 shadow-2xl">
                        <style>
                            {`
                                @keyframes scrollSlow { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
                                @keyframes scrollFast { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
                                .animate-scroll-slow { animation: scrollSlow 180s linear infinite; }
                                .animate-scroll-medium { animation: scrollFast 150s linear infinite; }
                                .animate-scroll-fast { animation: scrollSlow 120s linear infinite; }
                                .scroll-column:hover .animate-scroll-slow,
                                .scroll-column:hover .animate-scroll-medium,
                                .scroll-column:hover .animate-scroll-fast {
                                    animation-play-state: paused;
                                }
                            `}
                        </style>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full px-8">
                            {/* Column 1 */}
                            <div className="scroll-column relative h-full">
                                <div className="animate-scroll-slow space-y-8 pt-8">
                                    {[...campImages, ...campImages].map((img, idx) => (
                                        <GalleryCard key={`col1-${idx}`} image={img} onClick={setSelectedImg} />
                                    ))}
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="scroll-column relative h-full hidden md:block">
                                <div className="animate-scroll-medium space-y-8 pt-16">
                                    {[...campImages, ...campImages].reverse().map((img, idx) => (
                                        <GalleryCard key={`col2-${idx}`} image={img} onClick={setSelectedImg} />
                                    ))}
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="scroll-column relative h-full hidden lg:block">
                                <div className="animate-scroll-fast space-y-8 pt-4">
                                    {[...campImages, ...campImages].map((img, idx) => (
                                        <GalleryCard key={`col3-${idx}`} image={img} onClick={setSelectedImg} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Top & Bottom Gradient Fades */}
                        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#7A746C] via-[#7A746C]/80 to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#7A746C] via-[#7A746C]/80 to-transparent pointer-events-none z-10" />
                    </div>
                </div>
            </section>

            {/* Main Content - High Contrast Dark on Beige */}
            <section className="py-32 bg-[#F3E8D8] relative">
                <div className="container-custom max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 space-y-12"
                        >
                            <h2 className="text-5xl md:text-8xl font-serif font-bold text-primary-950 leading-[0.9]">
                                A Wilderness <br />Built <span className="italic font-light text-primary-700">on Kindness</span>
                            </h2>
                            <div className="space-y-8 text-primary-900/80 text-xl font-light leading-relaxed">
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
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 bg-white p-12 md:p-16 rounded-[4rem] border border-primary-100 shadow-2xl shadow-primary-950/5 sticky top-32"
                        >
                            <h3 className="text-4xl font-serif font-bold mb-8 text-primary-950 italic">The Vegan Experience</h3>
                            <p className="text-primary-800/80 text-xl leading-relaxed mb-10 font-light">
                                For one special week each year, our camp is reserved exclusively for vegan children.
                                This intimate experience offers like-minded young people the chance to connect
                                without the presence of fishing or animal slaughter.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    'Compassionate Community',
                                    'Delicious Vegan Meals',
                                    'Peaceful Sanctuary Environment',
                                    'No Tech - Fully Unplugged'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 text-primary-950 font-medium text-lg">
                                        <div className="w-8 h-8 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Heart size={16} className="text-red-500 fill-red-500" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-16">
                                <Link to="/contact">
                                    <Button className="w-full bg-red-600 hover:bg-black text-white py-8 rounded-3xl text-2xl font-bold shadow-2xl shadow-red-200 transition-all active:scale-95">
                                        Enroll for 2026
                                    </Button>
                                </Link>
                                <p className="text-center text-primary-400 text-sm mt-6 tracking-widest font-bold uppercase">Limited Spaces Available</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KidsCamp;
