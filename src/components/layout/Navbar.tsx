import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';

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

const DropdownMenu = ({ label, children, active }: { label: string; children: React.ReactNode; active?: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (open && (e.key === 'Escape' || e.key === 'Esc')) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Dismiss on scroll
  useEffect(() => {
    if (!open) return;
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref} onMouseLeave={() => setOpen(false)}>
      <button
        ref={buttonRef}
        className={`flex items-center gap-1 px-4 py-2 font-bold transition-colors focus:outline-none rounded-xl ${active ? 'text-[#009FE3] border-b-2 border-[#009FE3] bg-[#009fe30a]' : 'text-[#10163a] hover:text-[#009FE3]'} `}
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={label}
        type="button"
      >
        {label}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? 'rotate-180 text-[#009FE3]' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.22 }}
            className="absolute left-0 mt-3 min-w-[220px] rounded-xl shadow-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 py-2 z-50 backdrop-blur-md"
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Logo component
const NexverseLogo = () => (
  <img
    src="/assets/images/logo.png"
    alt="Nexverse Consulting Group LTD"
    className="h-16 md:h-16 w-auto"
    style={{ maxHeight: '56px' }}
  />
);

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Helper to check if a nav group is active
  const isGroupActive = (children: { href: string }[]) =>
    children.some((child) => location.pathname.startsWith(child.href));

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" aria-label="Nexverse Home">
          <NexverseLogo />
        </NavLink>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <DropdownMenu label={item.label} key={item.label} active={isGroupActive(item.children)}>
              {item.children.map((child, idx) => (
                <motion.div
                  key={child.label}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <NavLink
                    to={child.href}
                    className={({ isActive }: { isActive: boolean }) =>
                      `flex items-center gap-2 px-5 py-2 font-medium text-base rounded-lg transition-colors border-l-2 ${
                        isActive
                          ? 'text-[#009FE3] border-[#009FE3] bg-[#009fe30a]'
                          : 'text-[#10163a] border-transparent hover:text-[#009FE3] hover:bg-gray-100/10'
                      }`
                    }
                    aria-label={child.label}
                  >
                    {/* Optional: <Icon className="w-4 h-4" /> */}
                    {child.label}
                  </NavLink>
                </motion.div>
              ))}
            </DropdownMenu>
          ))}
          <motion.a
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="ml-6 px-6 py-2 rounded-full font-bold bg-[#009FE3] text-white shadow hover:bg-[#007bb5] transition-all"
            aria-label="Get in Touch"
          >
            Get in Touch
          </motion.a>
        </div>
        {/* Hamburger */}
        <button
          className="lg:hidden text-[#10163a] hover:text-[#009FE3] focus:outline-none"
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
            className="fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur flex flex-col px-6 py-8 gap-4 lg:hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <NavLink to="/" className="flex items-center" aria-label="Nexverse Home">
                <NexverseLogo />
              </NavLink>
              <button
                className="text-[#10163a] hover:text-[#009FE3] focus:outline-none"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
            </div>
            {navLinks.map((item) => (
              <div key={item.label} className="mb-2">
                <div className="flex items-center gap-2 text-[#10163a] font-semibold text-lg">
                  {item.label}
                </div>
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.href}
                      className="block px-3 py-2 text-[#10163a] hover:text-[#009FE3] border-b-2 border-transparent hover:border-[#009FE3] rounded-lg font-medium text-base transition-colors"
                      aria-label={child.label}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="mt-6 px-6 py-3 rounded-full font-bold bg-[#009FE3] text-white shadow hover:bg-[#007bb5] transition-all text-base tracking-wide border-2 border-transparent text-center"
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