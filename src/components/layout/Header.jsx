import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAccommodations, setShowAccommodations] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
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
    setShowActivities(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Accommodations',
      hasDropdown: true,
      links: [
        { name: 'The Bunkie', path: '/bunkie' },
        { name: 'Glamp Site', path: '/glamp-site' },
        { name: 'Kids Camp', path: '/kids-camp' }
      ]
    },
    {
      name: 'Activities',
      path: '/activities'
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-gray-200/50 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <nav className="container-custom px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Kinder World Logo" 
              className="h-16 md:h-20 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary-600">
                A KINDer World
              </span>
              <span className="text-xs md:text-sm text-primary-500 tracking-wider">
                RETREAT & RESCUE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-primary-600 transition-colors">
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.links.map((sublink) => (
                        <Link
                          key={sublink.path}
                          to={sublink.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="py-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setShowAccommodations(!showAccommodations)}
                          className="w-full px-4 py-3 text-left flex justify-between items-center text-gray-700 hover:bg-primary-50"
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform ${
                              showAccommodations ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {showAccommodations && (
                          <div className="bg-gray-50 pl-8">
                            {link.links.map((sublink) => (
                              <Link
                                key={sublink.path}
                                to={sublink.path}
                                className="block px-4 py-2 text-gray-600 hover:text-primary-600"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link to="/contact" className="btn-primary w-full text-center block">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;