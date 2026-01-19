import { NavLink, Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { siteInfo } from '../../data/content';

const Footer = () => {
  const activeStyle = "text-accent-100 font-bold";
  const baseStyle = "text-white/80 hover:text-white transition-colors duration-300 flex items-center";

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
              A private 300 acre wilderness reserve and sanctuary built on kindness and respect for all.
            </p>
            <p className="text-white/60 text-sm italic mt-2">
              Hunt Camp Turns Vegan Retreat
            </p>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-accent-100 text-sm font-bold uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-base font-medium">
                <li><NavLink to="/" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>Home</NavLink></li>
                <li><NavLink to="/our-story" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>Our Story</NavLink></li>
                <li><NavLink to="/gallery" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>Gallery</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>Contact</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent-100 text-sm font-bold uppercase tracking-widest mb-6">Stay</h4>
              <ul className="space-y-4 text-base font-medium">
                <li><NavLink to="/bunkie" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>The Bunkie</NavLink></li>
                <li><NavLink to="/glamp-site" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>Glamp Site</NavLink></li>
                <li><NavLink to="/kids-camp" className={({ isActive }) => isActive ? `${baseStyle} ${activeStyle}` : baseStyle}>Kids Camp</NavLink></li>
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
                <span>Private property situated conveniently between Toronto and Montreal.</span>
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
