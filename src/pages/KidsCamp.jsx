import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, Camera, MapPin, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';
import Button from '../components/common/Button';
import { campTestimonials } from '../data/content';

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
    </motion.div>
);

const KidsCamp = () => {
    const [selectedImg, setSelectedImg] = React.useState(null);
    const [heroImgIndex, setHeroImgIndex] = React.useState(0);

    // All available local images for the gallery
    const campImages = [
        { src: getAssetUrl('images/kidscamp/group.jpg'), alt: 'Campers Group' },
        { src: getAssetUrl('images/kidscamp/yockondock02.jpg'), alt: 'Group Hug on the Dock' },
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
        { src: getAssetUrl('images/kidscamp/lake.jpg'), alt: 'Pristine Lake' },
        { src: getAssetUrl('images/kidscamp/paddle.jpg'), alt: 'Paddling Together' },
        { src: getAssetUrl('images/kidscamp/paddle2.jpg'), alt: 'Sunset Paddle' },
        { src: getAssetUrl('images/kidscamp/paddle4.jpg'), alt: 'Quiet Waters' },
        { src: getAssetUrl('images/kidscamp/rowboat.jpg'), alt: 'Boat Trip' },
        { src: getAssetUrl('images/kidscamp/summer.jpg'), alt: 'Summer Sun' },
        { src: getAssetUrl('images/kidscamp/table.jpg'), alt: 'Art & Crafts' },
        { src: getAssetUrl('images/kidscamp/chloseandattica.jpg'), alt: 'Puppy Love' },
        { src: getAssetUrl('images/kidscamp/KinderCamp2024-22.jpg'), alt: 'Wilderness Adventure' },
        { src: getAssetUrl('images/kidscamp/boys.jpg'), alt: 'Camp Friends' },
        { src: getAssetUrl('images/kidscamp/campsite.jpg'), alt: 'Forest Camping' },
        { src: getAssetUrl('images/kidscamp/frog.jpg'), alt: 'Discovering Nature' },
        { src: getAssetUrl('images/kidscamp/Hike-05.jpg'), alt: 'Summer Hike' },
        { src: getAssetUrl('images/kidscamp/IMG_0729.jpg'), alt: 'Canoe Adventure' },
        { src: getAssetUrl('images/kidscamp/IMG_1726.jpg'), alt: 'Sunny Days' },
        { src: getAssetUrl('images/kidscamp/IMG_2836_2.jpg'), alt: 'Candid Moments' },
        { src: getAssetUrl('images/kidscamp/IMG_2907.jpg'), alt: 'Paddle Fun' },
        { src: getAssetUrl('images/kidscamp/IMG_2920.jpg'), alt: 'Paddle Love' },
        { src: getAssetUrl('images/kidscamp/IMG_3135_(1).jpg'), alt: 'Summer Fun' },
        { src: getAssetUrl('images/kidscamp/IMG_3141_2.jpg'), alt: 'Camp Memories' },
        { src: getAssetUrl('images/kidscamp/IMG_3159.jpg'), alt: 'Smiles' },
        { src: getAssetUrl('images/kidscamp/IMG_3427_2.jpg'), alt: 'Summer Days' },
        { src: getAssetUrl('images/kidscamp/jess.jpg'), alt: 'Staff Members' },
        { src: getAssetUrl('images/kidscamp/Jumping rock-07.jpg'), alt: 'Lake Fun' },
        { src: getAssetUrl('images/kidscamp/macgrouphug.jpg'), alt: 'Big Hug' },
        { src: getAssetUrl('images/kidscamp/Yoga on dock-06.jpg'), alt: 'Best Friends' },
        { src: getAssetUrl('images/kidscamp/Yoga on dock-07.jpg'), alt: 'Mindful Morning' },
        { src: getAssetUrl('images/kidscamp/Kinder Camp2024-16.jpg'), alt: 'Kinder Camp 2024' },
    ];

    // Horizontal images for the top hero backgrounds
    const heroBackgrounds = [
        getAssetUrl('images/kidscamp/IMG_1277.jpg'),
        getAssetUrl('images/kidscamp/jump.jpg'),
        getAssetUrl('images/kidscamp/yockondock02.jpg'),
        getAssetUrl('images/kidscamp/yogaondock.jpg'),
        getAssetUrl('images/kidscamp/IMG_3159.jpg'),
        getAssetUrl('images/kidscamp/whiteshirt.jpg'),
        getAssetUrl('images/kidscamp/IMG_2907.jpg')
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setHeroImgIndex((prev) => (prev + 1) % heroBackgrounds.length);
        }, 3000); // 3 seconds interval
        return () => clearInterval(timer);
    }, [heroBackgrounds.length]);

    return (
        <div className="min-h-screen bg-[#F3E8D8]">
            {/* Hero Section - Full Cover */}
            <section className="relative h-[70vh] md:h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={heroImgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-[center_20%] transition-transform duration-[4000ms] ease-linear"
                            style={{ backgroundImage: `url(${heroBackgrounds[heroImgIndex]})` }}
                        >
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 text-center text-white px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-light leading-none mb-6 tracking-tight">
                            <span className="font-bold">KIND</span>er <span className="italic text-accent-100 italic-font">Camp</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide opacity-90 italic">
                            where lifelong <span className="italic-font">memories</span> are made
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
                                <p className="font-bold text-xl">9-15 Years Old</p>
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
                                    {[...campImages.filter((_, i) => i % 3 === 0), ...campImages.filter((_, i) => i % 3 === 0)].map((img, idx) => (
                                        <GalleryCard key={`col1-${idx}`} image={img} onClick={setSelectedImg} />
                                    ))}
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="scroll-column relative h-full hidden md:block">
                                <div className="animate-scroll-medium space-y-8 pt-16">
                                    {[...campImages.filter((_, i) => i % 3 === 1).reverse(), ...campImages.filter((_, i) => i % 3 === 1).reverse()].map((img, idx) => (
                                        <GalleryCard key={`col2-${idx}`} image={img} onClick={setSelectedImg} />
                                    ))}
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="scroll-column relative h-full hidden lg:block">
                                <div className="animate-scroll-fast space-y-8 pt-4">
                                    {[...campImages.filter((_, i) => i % 3 === 2), ...campImages.filter((_, i) => i % 3 === 2)].map((img, idx) => (
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

            {/* Highlights Section */}
            <section className="py-24 md:py-32 bg-[#F3E8D8]">
                <div className="container-custom max-w-6xl">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 border-2 border-primary-600/30 rounded-full text-primary-700 text-xs uppercase tracking-[0.4em] font-bold mb-8"
                        >
                            What Makes Camp Special
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-bold text-primary-950 mb-8 leading-tight"
                        >
                            Camp <span className="italic font-light text-primary-600">Highlights</span>
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Heart, title: 'Compassionate Community', desc: 'Connect with like-minded vegan children in a supportive environment.' },
                            { icon: Users, title: 'Nature Connection', desc: 'Explore pristine wilderness and develop a deep bond with the natural world.' },
                            { icon: Sparkles, title: 'Creative Expression', desc: 'Engage in arts, crafts, and activities that inspire imagination.' },
                            { icon: Camera, title: 'Outdoor Adventures', desc: 'Paddleboarding, hiking, swimming, and wilderness exploration.' },
                            { icon: MapPin, title: 'Mindfulness Practices', desc: 'Yoga, meditation, and sound healing in nature.' },
                            { icon: Calendar, title: 'Lifelong Friendships', desc: 'Build lasting bonds with campers who share your values.' }
                        ].map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                                whileHover={{ y: -12, transition: { duration: 0.4 } }}
                                className="bg-white p-12 rounded-[48px] shadow-xl shadow-primary-900/5 hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-500 group border border-white"
                            >
                                <div className="mb-10 p-6 bg-primary-50 rounded-[24px] text-primary-600 w-fit group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                                    <highlight.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-950 mb-5 group-hover:text-primary-700 transition-colors">
                                    {highlight.title}
                                </h3>
                                <p className="text-primary-800/80 text-lg leading-relaxed font-light">
                                    {highlight.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content - High Contrast Dark on Beige */}
            <section className="py-32 bg-[#F3E8D8] relative">
                <div className="container-custom max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 space-y-8 md:space-y-12"
                        >
                            <h2 className="text-5xl md:text-8xl font-serif font-bold text-primary-950 leading-[0.9]">
                                A Wilderness <br />Built <span className="italic font-light text-primary-700">on Kindness</span>
                            </h2>
                            <div className="space-y-8 text-primary-900/80 text-lg md:text-xl font-light leading-relaxed">
                                <p>
                                    We are thrilled to welcome the next generation of compassionate kids to our unique wilderness summer camp. At <strong>A KINDer World</strong> we strive to be as inclusive as possible, embracing children of all genders and backgrounds. However, for one special week each year, our camp is reserved exclusively for vegan children.
                                </p>
                                <p>
                                    This intimate, week-long experience offers like-minded young people the chance to connect with nature and enjoy the joys of summer camp—without the presence of fishing or animal consumption. Campers will enjoy delicious plant-based meals while having a blast in a fully peaceful and compassionate environment.
                                </p>
                                <p>
                                    Our A KINDer World Summer Camp takes place for one week in August. If a child you know is interested in joining, please reach out for more information!
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
                            <p className="text-primary-800/80 text-xl leading-relaxed mb-10 font-light font-sans tracking-tight">
                                For one special week each year, our camp is reserved exclusively for vegan children.
                                This intimate experience offers like-minded young people the chance to connect.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    'Compassionate Community',
                                    'Delicious Vegan Meals',
                                    'Canadian wilderness adventure',
                                    'Fully Unplugged - Tech Free'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 text-primary-950 font-medium text-lg">
                                        <div className="w-8 h-8 bg-primary-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Heart size={16} className="text-primary-600 fill-primary-600" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-16">
                                <Link to="/contact">
                                    <Button className="w-full bg-primary-600 hover:bg-primary-900 text-white py-6 md:py-8 rounded-3xl text-xl md:text-2xl font-bold shadow-2xl transition-all active:scale-95">
                                        Apply for 2026
                                    </Button>
                                </Link>
                                <p className="text-center text-primary-400 text-[10px] md:text-sm mt-6 tracking-widest font-bold uppercase">Limited Spaces Available</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Carousel Style */}
            <section className="py-24 bg-white border-t border-primary-100 overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-light italic text-primary-900 mb-4">
                            What our campers had to say
                        </h2>
                        <div className="h-1 w-20 bg-primary-200 mx-auto rounded-full" />
                    </motion.div>

                    <CampReviewsCarousel reviews={campTestimonials} />
                </div>
            </section>
        </div>
    );
};

// Component for the Camp reviews carousel
const CampReviewsCarousel = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const reviewsPerPage = 1; // Default for mobile
    const [displayPerPage, setDisplayPerPage] = React.useState(3);

    const maxIndex = Math.ceil(reviews.length / displayPerPage) - 1;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <div className="relative group px-4 md:px-12">
            <div className="overflow-hidden">
                <motion.div
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="flex"
                >
                    {[...Array(Math.ceil(reviews.length / displayPerPage))].map((_, pageIndex) => (
                        <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                            {reviews.slice(pageIndex * displayPerPage, (pageIndex + 1) * displayPerPage).map((review, idx) => (
                                <div
                                    key={idx}
                                    className="h-full"
                                >
                                    <div className="bg-primary-50/50 p-8 rounded-[2.5rem] h-full flex flex-col justify-between border border-primary-100/30 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
                                        <div>
                                            <div className="mb-6">
                                                <Heart size={24} className="text-primary-400 fill-primary-400 opacity-30" />
                                            </div>
                                            <p className="text-primary-900/80 text-lg leading-relaxed font-light italic mb-8">
                                                "{review.text}"
                                            </p>
                                        </div>
                                        <div className="pt-6 border-t border-primary-100/50">
                                            <p className="font-bold text-primary-900 tracking-tight">- {review.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            {maxIndex > 0 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl text-primary-900 hover:bg-primary-50 transition-all border border-primary-100 z-10 hidden md:flex"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl text-primary-900 hover:bg-primary-50 transition-all border border-primary-100 z-10 hidden md:flex"
                    >
                        <ChevronRight size={24} />
                    </button>

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
                </>
            )}
        </div>
    );
};

export default KidsCamp;
