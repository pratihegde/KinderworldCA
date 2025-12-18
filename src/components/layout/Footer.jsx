import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { siteInfo } from '../../data/content';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">A KINDer World</h3>
            <p className="text-primary-100 text-sm leading-relaxed">
              A peaceful sanctuary between Toronto and Montreal, where nature thrives and all beings are respected.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-primary-100 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Accommodations */}
          <div>
            <h4 className="font-semibold mb-4">Stay With Us</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/bunkie" className="text-primary-100 hover:text-white transition-colors">
                  The Bunkie
                </Link>
              </li>
              <li>
                <Link to="/glamp-site" className="text-primary-100 hover:text-white transition-colors">
                  Glamp Site
                </Link>
              </li>
              <li>
                <Link to="/kids-camp" className="text-primary-100 hover:text-white transition-colors">
                  Kids Camp
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-primary-100 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-100 text-sm">{siteInfo.location}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="text-primary-100 hover:text-white transition-colors text-sm break-all"
                >
                  {siteInfo.email}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href={siteInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200 text-sm">
          <p>© {new Date().getFullYear()} Kinder World Retreat & Rescue. All rights reserved.</p>
          <p className="mt-2">All photos credited to and © Julie O'Neill Photography</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
