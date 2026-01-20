import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/common/Button';
import { getAssetUrl } from '../utils/getAssetUrl';
import { Flame, Trees, Mountain, Anchor, Users, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode='popLayout'>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Activity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

const Activities = () => {
  const { hash } = useLocation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const activities = [
    {
      id: "sauna",
      title: "Wood-Burning Sauna",
      subtitle: "Rejuvenate, Detox, Restore",
      icon: <Flame size={24} />,
      content: (
        <>
          <p>
            Step into the warmth of our traditional wood-burning sauna while over looking the tranquil lake. The soothing heat invites you to unwind, detoxify, and reconnect with your body and mind. This timeless wellness ritual offers countless benefits—relieving stress, improving circulation, easing muscle tension, and promoting deep relaxation.
          </p>
          <p>
            For the ultimate invigorating experience, follow the cycle our guests love most: immerse yourself in the sauna’s heat, then take a refreshing plunge into the cool, pristine lake. The contrast awakens your senses, boosts circulation, and leaves you feeling rejuvenated, refreshed, and completely alive.
          </p>
          <p>
            Whether you seek a moment of solitude, a mindful wellness practice, or a shared experience with friends, our wood-burning sauna is here to elevate your stay at A KINDer World.
          </p>
        </>
      ),
      images: [
        getAssetUrl('images/activities/sauna1.jpg'),
        getAssetUrl('images/activities/sauna2.jpg')
      ],
      features: ['Traditional Wood-Fired Heat', 'Lake Views', 'Cold Plunge Access', 'Detox & Relax']
    },
    {
      id: "forest-bathing",
      title: "Forest Bathing",
      subtitle: "Reconnect, Restore, Rewild",
      icon: <Trees size={24} />,
      content: (
        <>
          <p>
            Step into the embrace of the forest and awaken your senses. Forest bathing—known as Shinrin-Yoku in Japan—is the practice of immersing yourself in nature, mindfully absorbing the sights, sounds, and scents of the wild. More than just a walk in the woods, it is a deeply restorative experience that soothes the mind, reduces stress, and rekindles a connection to the natural world.
          </p>
          <p>
            At A KINDer World, we will be offering Forest Bathing Therapy Sessions, inviting you to slow down, breathe deeply, and let the forest work its quiet magic. You’ll move at an unhurried pace, pausing to observe the sunlight filtering through the trees, feel the textures of bark and moss, and listen to the gentle whispers of the wind. This practice is about being, not doing—a moment to exist in harmony with the land, without demands or distractions.
          </p>
          <p className="font-serif italic text-xl text-primary-800">
            Let the forest heal you.
          </p>
          <p className="font-bold text-sm uppercase tracking-wide text-primary-600 mt-4">
            Coming soon – Stay tuned for session details!
          </p>
        </>
      ),
      images: [
        getAssetUrl('images/activities/forestbathing1.jpg'),
        getAssetUrl('images/activities/forestbathing2.jpg'),
        getAssetUrl('images/activities/forestbathing3.jpg'),
        getAssetUrl('images/activities/forestbathing4.jpg'),
        getAssetUrl('images/activities/forestbathing5.jpg')
      ],
      features: ['Mindful Immersion', 'Stress Reduction', 'Nature Connection', 'Guided Sessions Soon']
    },
    {
      id: "hiking",
      title: "Hiking Trails",
      subtitle: "Hike Through Our Forest Trails",
      icon: <Mountain size={24} />,
      content: (
        <>
          <p>
            Step onto our private hiking trails and leave the noise of the world behind. The trails at A KINDer World wind through dense forests of maple, oak, and white pine, while climbing rugged granite outcrops of the Canadian Shield. Spend hours wandering through our wilderness trail without another human for miles around.
          </p>
          <p>
            Breathe in the pine filled air as you watch for wildlife, admire beaver dams, and immerse yourself in nature’s quiet magic. Along the way, you’ll discover hidden clearings, mossy rock formations, and viewpoints - perfect spots to pause, reflect, meditate, or go for a swim.
          </p>
          <p>
            Our trails are more than just a walk through the woods—they’re an invitation to slow down, reconnect with the earth, and experience the beauty of a world untouched by harm. We invite you to explore, tread lightly, and embrace the stillness.
          </p>
          <p className="font-medium text-primary-900 mt-4">
            Ready to set out on your journey? The trails are waiting.
          </p>
        </>
      ),
      images: [
        getAssetUrl('images/activities/hiking1.jpg'),
        getAssetUrl('images/activities/hiking2.jpg'),
        getAssetUrl('images/activities/hiking3.jpg'),
        getAssetUrl('images/activities/hiking4.jpg'),
        getAssetUrl('images/activities/hiking5.jpg'),
        getAssetUrl('images/activities/hiking6.jpg')
      ],
      features: ['Private Wilderness Trails', 'Canadian Shield Terrain', 'Wildlife Viewing', 'Scenic Viewpoints']
    },
    {
      id: "paddleboarding",
      title: "Paddleboarding",
      subtitle: "Glide, Balance, Play",
      icon: <Anchor size={24} />,
      content: (
        <>
          <p>
            Drift across the tranquil waters and experience the lake from an entirely new perspective. Paddleboarding at A KINDer World is more than just an activity—it’s a chance to immerse yourself in nature, build balance, and embrace the present moment.
          </p>
          <p>
            Whether you're a first-timer or a seasoned paddler, our serene, private lake offers the perfect setting to explore at your own pace. For guests staying at the Bunkie or Glamp site, paddleboards are available to enhance your retreat—whether for a peaceful solo paddle at sunrise or an adventurous afternoon on the water.
          </p>
          <p>
            Looking for something more interactive? Our team-building paddleboard workshops introduce playful challenges and paddleboard games, making it a fun and dynamic way to connect, laugh, and grow together.
          </p>
          <p className="font-bold text-sm uppercase tracking-wide text-primary-600 mt-4">
            Coming soon – Stay tuned for details on guided paddleboard sessions and workshops!
          </p>
        </>
      ),
      images: [
        getAssetUrl('images/activities/paddle1.jpg'),
        getAssetUrl('images/activities/paddle2.jpg'),
        getAssetUrl('images/activities/paddle3.jpg'),
        getAssetUrl('images/activities/paddle4.jpg'),
        getAssetUrl('images/activities/paddle5.jpg'),
        getAssetUrl('images/activities/paddle6.jpg'),
        getAssetUrl('images/activities/paddle7.jpg'),
        getAssetUrl('images/activities/paddle8.jpg')
      ],
      features: ['Private Lake Access', 'Equipment Included', 'Sunrise Paddles', 'Team Building']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={getAssetUrl('images/hero/hero3.jpg')}
            alt="Activities at Kinder World"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif font-light mb-4"
          >
            Wellness <span className="italic font-light">& Wild</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto"
          >
            Moments in nature, made meaningful
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 text-center container-custom max-w-4xl">
        <p className="text-xl md:text-2xl font-serif text-primary-900 leading-relaxed italic">
          "Nature is not a place to visit. It is home."
        </p>
      </section>

      {/* Activity Tiles */}
      <section className="pb-24">
        <div className="container-custom max-w-6xl space-y-24 md:space-y-32">
          {activities.map((activity, index) => (
            <motion.div
              id={activity.id}
              key={activity.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`scroll-mt-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              {/* Image Side - Now with Slideshow */}
              <div className={`relative group ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] border-8 border-white relative z-10">
                  <Slideshow images={activity.images} />
                </div>
                {/* Decorative blob */}
                <div className={`absolute -bottom-10 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -z-10 ${index % 2 === 1 ? '-left-10' : '-right-10'}`} />
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div className="flex items-center space-x-3 text-primary-600 mb-4">
                  <div className="p-3 bg-primary-50 rounded-full">
                    {activity.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">{activity.subtitle}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                  {activity.title}
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                  {activity.content}
                </div>

                <div className="pt-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activity.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm font-bold text-primary-900 bg-accent-100/50 px-4 py-3 rounded-xl border border-accent-200/50">
                        <div className="p-1 rounded-full bg-accent-300 text-white">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workshops & Retreats Section - Different Style */}
      <section id="workshops" className="py-24 bg-[#5E6D55] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container-custom max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="flex items-center space-x-3 text-accent-100 mb-6">
                <Users size={24} />
                <span className="text-sm font-bold uppercase tracking-widest">Experience Nature with Purpose</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
                Workshops & <br /> <span className="italic font-light text-primary-200">Retreats</span>
              </h2>
              <div className="space-y-6 text-lg text-white/90 font-light leading-relaxed">
                <p>
                  Escape to our Glamp Site, where nature, community, and purpose come together. Whether you're hosting a Yoga/Meditation Retreat, SUP workshop, or Team Training, our serene, eco-conscious setting provides the perfect space to grow, connect, and inspire change.
                </p>
                <p>
                  Surrounded by pristine forests and tranquil waters, our unique space offers complete privacy in the untamed outdoors. A KINDer World is an ideal setting for deep reflection, dynamic workshops, and unforgettable group experiences.
                </p>
                <p className="font-medium text-white pt-4">
                  If your mission aligns with well-being, nature, activism, or environmental consciousness, we invite you to host your retreat with us. To create something meaningful in nature, contact us.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-10 md:p-12 border border-white/20">
              <h3 className="text-2xl font-serif italic mb-8 text-center text-accent-100">A Sustainable Retreat Space</h3>
              <ul className="space-y-6">
                {[
                  { title: 'Screened-in kitchen', desc: 'Cook and share meals in a communal, nature-immersed setting.' },
                  { title: 'Cozy sleeping arrangements', desc: 'Experience tent camping under a canopy of stars.' },
                  { title: 'Eco-friendly amenities', desc: 'Including compost toilets for a low-impact stay.' },
                  { title: 'Direct lake access', desc: 'Swim, paddle, or simply soak in the serenity.' },
                  { title: 'Yoga on the lake', desc: "Flow with the sunrise, grounded by the water's energy" },
                  { title: 'Workshops in the wild', desc: 'Engage in transformative sessions inside our gazebo common area or beneath the open sky.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent-200 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white block mb-1">{item.title}</span>
                      <span className="text-sm text-white/70 font-light leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 text-center">
                <Link to="/contact">
                  <Button className="bg-white text-primary-900 border-none hover:bg-accent-100">Host Your Retreat</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workshop & Retreat Slideshow */}
        <div className="container-custom max-w-6xl mt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-serif italic mb-2 text-primary-200">Workshop & Retreat Gallery</h3>
            <div className="h-0.5 w-16 bg-accent-100 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Slideshow Side */}
            <div className="relative group">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] border-8 border-white relative z-10">
                <Slideshow images={[
                  getAssetUrl('images/activities/workshop1.jpg'),
                  getAssetUrl('images/activities/workshop2.jpg'),
                  getAssetUrl('images/activities/workshop3.jpg'),
                  getAssetUrl('images/activities/retreat1 (1).jpg'),
                  getAssetUrl('images/activities/retreat1 (4).jpg'),
                  getAssetUrl('images/kidscamp/boards.jpg')
                ]} />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -z-10" />
            </div>

            {/* Description Side */}
            <div className="space-y-6 text-white/90 font-light leading-relaxed">
              <p className="text-lg">
                Our workshops and retreats bring together communities focused on wellness, mindfulness, and connection with nature. From yoga sessions on the dock to paddleboard workshops and team-building activities, each experience is designed to inspire and rejuvenate.
              </p>
              <p className="text-lg">
                Whether you're hosting a meditation retreat, a wellness workshop, or a nature-based team training, our sanctuary provides the perfect backdrop for transformation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
