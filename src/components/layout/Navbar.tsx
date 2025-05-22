import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';
import ContactModal from '../modals/ContactModal';

// Memoize navLinks to prevent unnecessary re-renders
const navLinks = [
  {
    label: 'About Us',
    children: [
      { label: 'Our Vision', href: '/about/our-vision' },
      { label: 'Our Mission', href: '/about/our-mission' },
      { label: 'Our Core Values', href: '/about/our-core-values' },
    ],
  },
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
];

// Memoized Logo component
const NexverseLogo = React.memo(() => (
  <img
    src="/assets/images/logo.png"
    alt="Nexverse Consulting Group LTD"
    className="h-16 md:h-16 w-auto mb-4"
    style={{ maxHeight: '56px' }}
    loading="eager"
  />
));

// Memoized DropdownMenu component
const DropdownMenu = React.memo(({ label, children, active }: { label: string; children: React.ReactNode; active?: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Simplified click handler - immediate response
  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

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
    <div
      className="relative"
      ref={ref}
    >
      <button
        ref={buttonRef}
        className={`flex items-center gap-1 px-4 py-1.5 font-medium transition-colors focus:outline-none rounded-xl ${active ? 'text-[#009FE3] border-b-2 border-[#009FE3] bg-[#009fe30a]' : 'text-[#10163a] hover:text-[#009FE3]'} `}
        onClick={handleClick}
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 min-w-[220px] rounded-xl shadow-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 py-2 z-50 backdrop-blur-md"
            style={{ backdropFilter: 'blur(12px)' }}
            >
              {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// Memoized NavLink component
const MemoizedNavLink = React.memo(({ to, children, className, onClick }: { 
  to: string; 
  children: React.ReactNode; 
  className: string | (({ isActive }: { isActive: boolean }) => string); 
  onClick?: () => void;
}) => (
  <NavLink
    to={to}
    className={className}
    onClick={onClick}
    aria-label={typeof children === 'string' ? children : undefined}
  >
    {children}
  </NavLink>
));

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

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const location = useLocation();
  const getInTouchBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Memoize active state check
  const isGroupActive = useCallback((children: { href: string }[]) =>
    children.some((child) => location.pathname.startsWith(child.href)),
    [location.pathname]
  );

  // Memoize contact modal open handler
  const openContactModal = useCallback(() => {
    if (getInTouchBtnRef.current) {
      setButtonRect(getInTouchBtnRef.current.getBoundingClientRect());
    }
    setIsContactModalOpen(true);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="flex items-center justify-between px-4 py-2 flex-nowrap w-full">
        {/* Logo */}
        <MemoizedNavLink to="/" className="flex items-center" aria-label="Nexverse Home">
          <NexverseLogo />
        </MemoizedNavLink>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-0.5 flex-nowrap flex-shrink min-w-0 w-full justify-center">
          {navLinks.map((item) => (
            <DropdownMenu label={item.label} key={item.label} active={isGroupActive(item.children)}>
              {item.children.map((child) => (
                <MemoizedNavLink
                  key={child.label}
                    to={child.href}
                    className={({ isActive }: { isActive: boolean }) =>
                    `block px-4 py-2 text-[14px] rounded-lg transition-colors ${
                        isActive
                        ? 'text-[#009FE3] bg-[#009fe30a]'
                        : 'text-[#10163a] hover:text-[#009FE3] hover:bg-gray-100/10'
                      }`
                    }
                  >
                    {child.label}
                </MemoizedNavLink>
              ))}
            </DropdownMenu>
          ))}
          
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="ml-1 flex-shrink-0 max-w-[150px]"
          >
            <button
              ref={getInTouchBtnRef}
              onClick={openContactModal}
              className="group flex items-center px-3 py-1.5 rounded-full font-bold bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-sm min-w-[90px] max-w-[150px]"
              aria-label="Get in Touch"
              style={{ whiteSpace: 'nowrap' }}
            >
              <span className="mr-2">Get in touch</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#009FE3] group-hover:bg-gradient-to-r group-hover:from-[#FFA500] group-hover:to-[#009FE3] group-hover:text-white transition-all">
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#10163a] hover:text-[#009FE3] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setMobileOpen(false)}
            />
            {/* Modal */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed right-0 top-0 z-[101] w-[85vw] h-full bg-white shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <NexverseLogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-[#009FE3] transition-colors p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto py-6">
                {navLinks.map((item) => (
                  <div key={item.label} className="px-6 py-3">
                    <div className="font-semibold text-[#10163a] text-lg mb-3">{item.label}</div>
                    <div className="pl-4 space-y-3">
                      {item.children.map((child) => (
                        <MemoizedNavLink
                          key={child.label}
                          to={child.href}
                          className={({ isActive }) =>
                            `block py-2 text-base rounded-lg transition-colors ${
                              isActive
                                ? 'text-[#009FE3] bg-[#009fe30a]'
                                : 'text-[#10163a] hover:text-[#009FE3] hover:bg-gray-100/10'
                            }`
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </MemoizedNavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openContactModal();
                  }}
                  className="w-full flex items-center justify-center px-6 py-3 rounded-full font-bold bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40"
                >
                  <span className="mr-2">Get in touch</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        anchorRect={buttonRect}
      />
    </nav>
  );
};

export default React.memo(Navbar); 