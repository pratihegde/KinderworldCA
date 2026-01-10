import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { siteInfo } from '../../data/content';

const Footer = () => {
  return (
    <footer className="text-white pt-20 pb-10" style={{ backgroundColor: '#7A746C' }}>
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <h3 className="font-sans text-3xl font-light tracking-tight text-white hover:text-white/90 transition-colors">
                A <span className="font-bold">KIND</span>er World
              </h3>
            </Link>
            <p className="text-white/70 text-base leading-relaxed max-w-xs">
              A private 300-acre wilderness sanctuary between Toronto and Montreal,
              connecting children and adults with the magic of the woods.
            </p>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-accent-100 text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-base font-medium">
                <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/our-story" className="text-white/80 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/gallery" className="text-white/80 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent-100 text-sm font-bold uppercase tracking-widest mb-6">Stay</h4>
              <ul className="space-y-4 text-base font-medium">
                <li><Link to="/bunkie" className="text-white/80 hover:text-white transition-colors">The Bunkie</Link></li>
                <li><Link to="/glamp-site" className="text-white/80 hover:text-white transition-colors">Glamp Site</Link></li>
                <li><Link to="/kids-camp" className="text-white/80 hover:text-white transition-colors">Kids Camp</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-accent-100 text-sm font-bold uppercase tracking-widest mb-6">Connect</h4>
            <div className="space-y-4">
              <a href={`mailto:${siteInfo.email}`} className="flex items-center space-x-3 text-base text-white/80 hover:text-white transition-colors">
                <Mail size={18} className="text-accent-100" />
                <span>{siteInfo.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-base text-white/80">
                <MapPin size={18} className="text-accent-100 flex-shrink-0" />
                <span>Private Property, ON Canada</span>
              </div>
            </div>
            <div className="flex space-x-5 pt-4">
              <a href={siteInfo.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-white/40 font-medium uppercase tracking-[0.2em] space-y-4 md:space-y-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} Kinder World Retreat & Rescue. All rights reserved.</p>
          <p>Photography by Julie O'Neill</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
