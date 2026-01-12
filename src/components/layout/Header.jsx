import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '../../utils/getAssetUrl';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccommodations, setShowAccommodations] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowAccommodations(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Stay with us',
      hasDropdown: true,
      links: [
        { name: 'Bunkie', path: '/bunkie' },
        { name: 'Glampsite', path: '/glamp-site' }
      ]
    },
    { name: 'Kids Camp', path: '/kids-camp' },
    {
      name: 'Activities',
      hasDropdown: true,
      links: [
        { name: 'Workshops & Retreats', path: '/activities#workshops' },
        { name: 'Sauna', path: '/activities#sauna' },
        { name: 'Forest Bathing', path: '/activities#forest-bathing' },
        { name: 'Hiking', path: '/activities#hiking' },
        { name: 'Paddleboarding', path: '/activities#paddleboarding' }
      ]
    },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="fixed w-full top-0 z-50 transition-all duration-500">
        {/* Main Navigation - Green Section */}
        <nav className={`transition-all duration-500 ${isScrolled ? 'py-1 shadow-xl' : 'py-2 md:py-3'} overflow-visible relative items-center flex`} style={{ backgroundColor: '#5E6D55' }}>
          <div className="container mx-auto max-w-[1920px] px-6 lg:px-12 w-full">
            <div className="flex justify-between items-center relative">
              {/* Logo - Left Side - Fitted to nav */}
              <Link to="/" className="flex items-center space-x-3 md:space-x-5 group">
                <div className="relative flex-shrink-0">
                  <img
                    src={getAssetUrl('images/logo.jpg')}
                    alt="Kinder World Logo"
                    className={`transition-all duration-500 rounded-full ${isScrolled ? 'h-14 w-14' : 'h-16 w-16 md:h-20 md:w-20'
                      } object-contain border-2 border-white/20 shadow-xl`}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`font-sans leading-none text-white transition-all duration-500 ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                    }`}>
                    A <span className="font-bold">KIND</span>er World
                  </span>
                  <span className={`text-accent-100 font-sans tracking-[0.1em] transition-all duration-500 ${isScrolled ? 'text-[10px]' : 'text-xs'
                    }`}>
                    Retreat & Rescue
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group/nav">
                    {link.hasDropdown ? (
                      <>
                        <button className="flex items-center space-x-1 text-sm font-semibold text-white/90 hover:text-white uppercase tracking-widest transition-colors py-2 whitespace-nowrap">
                          <span>{link.name}</span>
                          <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl py-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 border border-gray-100">
                          {link.links.map((sublink) => (
                            <Link
                              key={sublink.path}
                              to={sublink.path}
                              className="block px-6 py-4 text-sm font-bold text-gray-800 hover:bg-primary-50 hover:text-primary-700 transition-all uppercase tracking-wider whitespace-nowrap"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm font-semibold text-white/90 hover:text-white uppercase tracking-widest transition-colors py-2 px-2 whitespace-nowrap"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Changed to Come Visit Button */}
                <Link
                  to="/contact"
                  className="bg-accent-100 hover:bg-white text-primary-900 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
                >
                  Come Visit
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white hover:text-accent-100 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden bg-primary-700 border-t border-white/10 overflow-hidden"
                >
                  <div className="container-custom px-4 py-8 space-y-6">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-4">
                        {link.hasDropdown ? (
                          <>
                            <div className="text-xs font-bold text-accent-100 uppercase tracking-widest px-2">
                              {link.name}
                            </div>
                            <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-white/10">
                              {link.links.map((sublink) => (
                                <Link
                                  key={sublink.path}
                                  to={sublink.path}
                                  className="text-lg font-medium text-white/90 hover:text-white"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            className="block text-xl font-bold text-white hover:text-accent-100 px-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>

      {/* Floating CTA - Light Organic Green - Show only on Home Page */}
      {location.pathname === '/' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-10 md:right-10 z-[60] w-max max-w-[90vw]"
        >
          <Link
            to="/kids-camp"
            className="bg-[#FFD700] hover:bg-[#FFC700] text-primary-950 px-6 py-4 md:px-10 md:py-6 rounded-full font-black text-xs md:text-base uppercase tracking-[0.1em] shadow-[0_15_50px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-3 border-2 border-white/40"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-900 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-900"></span>
            </span>
            <span>Apply for 2026 Kids Camp</span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Header;