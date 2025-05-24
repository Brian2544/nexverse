import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on the homepage, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-white text-[#10163a] border-t border-gray-200">
      <div className="container mx-auto px-10 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Nexverse Consulting Group LTD"
                className="h-16 md:h-16 w-auto mb-4 cursor-pointer"
                style={{ maxHeight: '56px' }}
              />
            </Link>
            <p className="text-gray-600 mb-4 max-w-xs">
              Transforming businesses through innovative digital solutions and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com/company/nexverse-consulting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-[#009FE3] transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://twitter.com/nexverse"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-[#009FE3] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#10163a]">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-[#009FE3] transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('impact')} className="text-gray-600 hover:text-[#009FE3] transition-colors">Impact</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-[#009FE3] transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-[#009FE3] transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('process')} className="text-gray-600 hover:text-[#009FE3] transition-colors">Process</button></li>
              <li><button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-[#009FE3] transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-[#009FE3] transition-colors">FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-[#009FE3] transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#10163a]">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/training/digital-transformation" className="text-gray-600 hover:text-[#009FE3] transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services/strategy-consulting" className="text-gray-600 hover:text-[#009FE3] transition-colors">Business Strategy</Link></li>
              <li><Link to="/services/technology-consulting" className="text-gray-600 hover:text-[#009FE3] transition-colors">Technology Consulting</Link></li>
              <li><Link to="/services/business-consulting" className="text-gray-600 hover:text-[#009FE3] transition-colors">Business Consulting</Link></li>
              <li><Link to="/solutions/it-infrastructure" className="text-gray-600 hover:text-[#009FE3] transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/solutions/web-development" className="text-gray-600 hover:text-[#009FE3] transition-colors">Web Design & Development</Link></li>
              <li><Link to="/solutions/information-security" className="text-gray-600 hover:text-[#009FE3] transition-colors">Information Security</Link></li>
              <li><Link to="/training/project-management" className="text-gray-600 hover:text-[#009FE3] transition-colors">Project Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#10163a]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-600">
                  123 Central Wetlands<br />
                  Nairobi, Kenya<br />
                  EC1A 1BB
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:contact@nexverse.com" className="text-gray-600 hover:text-[#009FE3] transition-colors">
                  contact@nexverse.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+254720943968" className="text-gray-600 hover:text-[#009FE3] transition-colors">
                  +254 720943968
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {currentYear} Nexverse Consulting Group LTD. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal/privacy" className="text-gray-600 hover:text-[#009FE3] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="text-gray-600 hover:text-[#009FE3] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/legal/cookies" className="text-gray-600 hover:text-[#009FE3] text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 