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
    { name: 'Our Story', path: '/our-story' },
    {
      name: 'Accommodations',
      hasDropdown: true,
      links: [
        { name: 'Bunkie', path: '/bunkie' },
        { name: 'Glampsite', path: '/glamp-site' }
      ]
    },
    { name: 'Kids Camp', path: '/kids-camp' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-500">
      {/* Top Bar - Beige Section */}
      <div style={{ backgroundColor: '#F3E8D8' }}>
        <div className="container-custom px-4 py-1.5">
          <div className="flex justify-end items-center">
            <Link
              to="/kids-camp"
              className="bg-red-600 hover:bg-black text-white px-5 py-1 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Enroll for 2026 Kids Camp
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Green Section */}
      <nav className={`transition-all duration-500 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`} style={{ backgroundColor: '#5E6D55' }}>
        <div className="container-custom px-4">
          <div className="flex justify-between items-center">
            {/* Logo - Left Side */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <img
                  src={getAssetUrl('images/logo.jpg')}
                  alt="Kinder World Logo"
                  className={`transition-all duration-500 rounded-full border border-white/20 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
                    } w-auto`}
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
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group/nav">
                  {link.hasDropdown ? (
                    <>
                      <button className="flex items-center space-x-1 text-sm font-semibold text-white/90 hover:text-white uppercase tracking-widest transition-colors py-2">
                        <span>{link.name}</span>
                        <ChevronDown size={14} />
                      </button>
                      <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-3 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 border border-gray-50">
                        {link.links.map((sublink) => (
                          <Link
                            key={sublink.path}
                            to={sublink.path}
                            className="block px-6 py-2.5 text-xs font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm font-semibold text-white/90 hover:text-white uppercase tracking-widest transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
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
                  <div className="px-4 pt-4 border-t">
                    <Link
                      to="/kids-camp"
                      className="block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded font-semibold text-sm uppercase tracking-wide transition-colors"
                    >
                      Enroll Now for 2026
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;