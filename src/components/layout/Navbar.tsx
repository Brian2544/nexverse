import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  {
    label: 'Consulting Services',
    children: [
      { label: 'Strategy Consulting', href: '/services/strategy-consulting' },
      { label: 'Technology Consulting', href: '/services/technology-consulting' },
      { label: 'Business Consulting', href: '/services/business-consulting' },
    ],
  },
  {
    label: 'Corporate Solutions',
    children: [
      { label: 'IT Infrastructure', href: '/solutions/it-infrastructure' },
      { label: 'Web Design & Development', href: '/solutions/web-development' },
      { label: 'Information Security', href: '/solutions/information-security' },
      { label: 'Business Applications', href: '/solutions/business-applications' },
      { label: 'IT Service Management', href: '/solutions/it-service-management' },
    ],
  },
  {
    label: 'Corporate Training & Coaching',
    children: [
      { label: 'Strategy Planning & Execution', href: '/training/strategy-planning' },
      { label: 'Governance of Enterprise IT', href: '/training/governance-enterprise-it' },
      { label: 'Digital Transformation', href: '/training/digital-transformation' },
      { label: 'Project Management', href: '/training/project-management' },
      { label: 'Data Protection & Compliance', href: '/training/data-protection' },
    ],
  },
  {
    label: 'About Us',
    children: [
      { label: 'Our Vision', href: '/about/our-vision' },
      { label: 'Our Mission', href: '/about/our-mission' },
      { label: 'Our Core Values', href: '/about/our-core-values' },
    ],
  },
];

function useOnClickOutside(ref: any, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
}

const DropdownMenu = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 px-4 py-2 text-white hover:text-cyan-400 font-bold transition-colors focus:outline-none"
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={label}
        type="button"
      >
        {label}
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 mt-3 min-w-[220px] rounded-xl shadow-2xl bg-[#10163a] border border-[#1e2746] py-2 z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Logo component
const NexverseLogo = () => (
  <span className="flex items-center gap-2">
    <img src="/assets/images/logo.png" alt="Nexverse Logo" className="h-10 w-10 rounded-xl bg-white object-contain shadow" />
    <span className="font-serif text-2xl md:text-3xl font-semibold text-primary select-none tracking-tight">Nexverse</span>
  </span>
);

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'shadow-xl' : ''} bg-primary`}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="./public/assets/images/logo.png" className="flex items-center gap-2" aria-label="Nexverse Home">
          <NexverseLogo />
        </a>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <DropdownMenu label={item.label} key={item.label}>
              {item.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block px-5 py-2 text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:text-cyan-400 rounded-lg font-medium text-base transition-colors"
                  aria-label={child.label}
                >
                  {child.label}
                </a>
              ))}
            </DropdownMenu>
          ))}
          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.07, boxShadow: '0 0 0 4px #FFA50044' }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="ml-8 px-7 py-2 rounded-full font-bold bg-[#FFA500] text-[#0a0f2c] shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-base tracking-wide"
            aria-label="Get in Touch"
          >
            Get in Touch
          </motion.a>
        </div>
        {/* Hamburger */}
        <button
          className="lg:hidden text-white hover:text-orange-400 focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-[#0a0f2c] bg-opacity-95 backdrop-blur flex flex-col px-6 py-8 gap-4 lg:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <a href="/assets/images/logo.png" className="flex items-center gap-2" aria-label="Nexverse Home">
                <NexverseLogo />
              </a>
              <button
                className="text-white hover:text-orange-400 focus:outline-none"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
            </div>
            {navLinks.map((item) => (
              <div key={item.label} className="mb-2">
                <div className="flex items-center gap-2 text-white font-semibold text-lg">
                  {item.label}
                </div>
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-3 py-2 text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:text-cyan-400 rounded-lg font-medium text-base transition-colors"
                      aria-label={child.label}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <motion.a
              whileHover={{ scale: 1.07, boxShadow: '0 0 0 4px #FFA50044' }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="mt-6 px-6 py-3 rounded-full font-bold bg-[#FFA500] text-[#0a0f2c] shadow-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-base tracking-wide border-2 border-transparent hover:border-orange-400 text-center"
              aria-label="Get in Touch"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 