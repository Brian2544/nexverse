import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Service card data with icon, title, and description
const services = [
  {
    title: 'Digital Transformation',
    description: 'Leverage cutting-edge technology to modernize your business and stay ahead.',
    icon: (
      // Device Mobile (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="3" strokeWidth="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: 'Business Strategy',
    description: 'Develop winning strategies that drive growth and create sustainable advantages.',
    icon: (
      // Trending Up (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: 'Technology Consulting',
    description: 'Optimize operations and drive innovation with expert technology guidance.',
    icon: (
      // Cpu (Lucide)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    title: 'Innovation & R&D',
    description: 'Stay ahead of the curve with our research-driven approach to innovation.',
    icon: (
      // Light Bulb (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 00-7 7c0 2.386 1.053 4.507 2.75 5.75V19a2 2 0 002 2h2a2 2 0 002-2v-3.25C17.947 14.507 19 12.386 19 10a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.',
    icon: (
      // Bar Chart (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a4 4 0 014-4h2a4 4 0 014 4v2m0 0v2a4 4 0 01-4 4H7a4 4 0 01-4-4v-2m16 0v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-2" />
      </svg>
    ),
  },
  {
    title: 'Change Management',
    description: 'Navigate organizational change with confidence using proven methodologies.',
    icon: (
      // Refresh (Heroicons)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M4 20a9 9 0 0116-8.485M20 4a9 9 0 01-16 8.485" />
      </svg>
    ),
  },
  {
    title: 'Strategy Consulting',
    description: 'Expert advice to help you define and achieve your business goals.',
    icon: (
      // Target (Lucide)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'IT Infrastructure',
    description: 'Build a robust, scalable, and secure IT foundation for your business.',
    icon: (
      // Server (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="6" rx="2" />
        <rect x="3" y="15" width="18" height="6" rx="2" />
        <circle cx="7.5" cy="10" r="1" />
        <circle cx="7.5" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: 'Web Design & Development',
    description: 'Create stunning, user-friendly websites and applications that drive results.',
    icon: (
      // Code (Lucide)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Information Security',
    description: 'Protect your data and systems with advanced security solutions.',
    icon: (
      // Shield Check (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Business Applications',
    description: 'Streamline your operations with custom business software solutions.',
    icon: (
      // App Window (Lucide)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: 'IT Service Management',
    description: 'Deliver efficient IT services that align with your business objectives.',
    icon: (
      // Clipboard List (Heroicons)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="4" y="6" width="16" height="16" rx="2" />
        <path d="M9 10h6M9 14h6M9 18h2" />
      </svg>
    ),
  },
  {
    title: 'Strategy Planning & Execution',
    description: 'Turn your vision into reality with actionable, results-driven plans.',
    icon: (
      // Calendar Check (Lucide)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Governance of Enterprise IT',
    description: 'Ensure compliance and maximize value from your IT investments.',
    icon: (
      // Scale (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description: 'Deliver projects on time and within budget with expert management.',
    icon: (
      // Clipboard Check (Heroicons)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="4" y="6" width="16" height="16" rx="2" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Data Protection & Compliance',
    description: 'Safeguard sensitive information and meet regulatory requirements.',
    icon: (
      // Lock Closed (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="6" y="10" width="12" height="10" rx="2" />
        <path d="M12 16v2" />
        <path d="M8 10V7a4 4 0 118 0v3" />
      </svg>
    ),
  },
];

const CARD_WIDTH = 380;
const CARD_HEIGHT = 255;
const CARD_GAP = 4;
const VISIBLE_CARDS = 3;
const SCROLL_SPEED = 1.7; // px per frame, increased speed

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollStart, setDragScrollStart] = useState(0);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Continuous right-to-left scroll
  useEffect(() => {
    if (isHovered || dragging) return;
    let raf: number;
    const frame = () => {
      setScrollX(prev => {
        const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
        let next = prev + SCROLL_SPEED;
        if (next >= totalWidth) next -= totalWidth;
        return next;
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [isHovered, dragging]);

  // Mouse drag scroll (manual override)
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
    setDragScrollStart(scrollX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
    setScrollX((dragScrollStart - dx + totalWidth) % totalWidth);
  };
  const onMouseUp = () => setDragging(false);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragScrollStart(scrollX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - dragStartX;
    const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
    setScrollX((dragScrollStart - dx + totalWidth) % totalWidth);
  };
  const onTouchEnd = () => setDragging(false);

  // Manual scroll with arrows
  const scrollBy = (dir: number) => {
    const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
    setScrollX(prev => (prev - dir * (CARD_WIDTH + CARD_GAP) + totalWidth) % totalWidth);
  };

  // Responsive card count
  const [cardsToShow, setCardsToShow] = useState(VISIBLE_CARDS);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(VISIBLE_CARDS);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Duplicate cards for infinite loop
  const displayCards = [...services, ...services];
  const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;

  return (
    <section className="py-15 w-full min-h-[400px] z-0" style={{ background: 'linear-gradient(90deg, #0e254a 0%, #279ac4 60%, #ff5e00 100%)', contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <div className="container mx-auto px-1" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">Our Services</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif leading-tight">
            Expert consulting tailored to<br className="hidden md:block" />
            your business success
          </h2>
        </div>
        <div
          className="relative overflow-x-hidden overflow-y-hidden"
          onMouseLeave={() => setDragging(false)}
        >
          {/* Arrow buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-[#279ac4] hover:text-white transition hidden sm:block"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            style={{ left: 8 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hover:bg-[#279ac4] hover:text-white transition hidden sm:block"
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            style={{ right: 8 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <div
            ref={containerRef}
            className="flex items-stretch select-none cursor-grab active:cursor-grabbing overflow-x-hidden overflow-y-hidden scrollbar-none"
            style={{
              width: '100%',
              minHeight: CARD_HEIGHT,
              userSelect: dragging ? 'none' : 'auto',
              touchAction: 'pan-y',
              justifyContent: 'center',
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            tabIndex={0}
            role="list"
            aria-label="Service cards carousel"
          >
            {displayCards.map((card, i) => {
              // Calculate position for infinite scroll
              const baseOffset = i * (CARD_WIDTH + CARD_GAP);
              let x = baseOffset - scrollX;
              // Wrap cards for infinite effect
              if (x < -((CARD_WIDTH + CARD_GAP) * services.length) / 2) x += (CARD_WIDTH + CARD_GAP) * services.length * 2;
              if (x > ((CARD_WIDTH + CARD_GAP) * services.length) / 2) x -= (CARD_WIDTH + CARD_GAP) * services.length * 2;
              // Center card detection
              const center = Math.floor(cardsToShow / 2);
              const isCenter = Math.abs(x) < (CARD_WIDTH + CARD_GAP) / 2;
              // New: Hide cards that are far in the background (outside visible area)
              const visibleRange = ((CARD_WIDTH + CARD_GAP) * cardsToShow) / 2 + 40; // 40px buffer
              const isVisible = Math.abs(x) < visibleRange;
              return (
                <motion.div
                  key={card.title + i}
                  className="relative flex-shrink-0"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    marginRight: i !== displayCards.length - 1 ? CARD_GAP : 0,
                    zIndex: isCenter ? 2 : 1,
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    x,
                    scale: isCenter ? 1.09 : 1,
                    opacity: isVisible ? (isCenter ? 1 : 0.7) : 0,
                    filter: 'none',
                    boxShadow: isCenter ? '0 0 0 2px #fff, 0 0 8px 2px #ff5e00, 0 0 18px 8px #279ac4, 0 0 32px 12px #0e254a' : undefined,
                  }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  onMouseEnter={() => { setIsHovered(true); setActiveIdx(i % services.length); }}
                  onMouseLeave={() => { setIsHovered(false); setActiveIdx(null); }}
                  onTouchStart={() => { setIsHovered(true); setActiveIdx(i % services.length); }}
                  onTouchEnd={() => { setIsHovered(false); setActiveIdx(null); }}
                  tabIndex={0}
                  role="listitem"
                  aria-label={card.title}
                >
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center items-center transition-all duration-300 shadow-lg border border-[#e5e7eb]">
                    <div className="mb-4">{card.icon}</div>
                    <div className="text-2xl font-extrabold text-[#0e254a] mb-2 text-center">{card.title}</div>
                    <div className="text-[#10163a] text-center text-sm font-normal leading-relaxed tracking-normal">{card.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 