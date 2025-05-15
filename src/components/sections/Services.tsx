import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Service card data with icon, title, and description
const services = [
  {
    title: 'Digital Transformation',
    description: 'Leverage cutting-edge technology to modernize your business and stay ahead.',
    icon: (
      <svg className="w-14 h-14 text-[#279ac4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Business Strategy',
    description: 'Develop winning strategies that drive growth and create sustainable advantages.',
    icon: (
      <svg className="w-14 h-14 text-[#ff5e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Technology Consulting',
    description: 'Optimize operations and drive innovation with expert technology guidance.',
    icon: (
      <svg className="w-14 h-14 text-[#0e254a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Innovation & R&D',
    description: 'Stay ahead of the curve with our research-driven approach to innovation.',
    icon: (
      <svg className="w-14 h-14 text-[#279ac4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.',
    icon: (
      <svg className="w-14 h-14 text-[#ff5e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Change Management',
    description: 'Navigate organizational change with confidence using proven methodologies.',
    icon: (
      <svg className="w-14 h-14 text-[#0e254a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Strategy Consulting',
    description: 'Expert advice to help you define and achieve your business goals.',
    icon: (
      <svg className="w-14 h-14 text-[#279ac4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'IT Infrastructure',
    description: 'Build a robust, scalable, and secure IT foundation for your business.',
    icon: (
      <svg className="w-14 h-14 text-[#ff5e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    title: 'Web Design & Development',
    description: 'Create stunning, user-friendly websites and applications that drive results.',
    icon: (
      <svg className="w-14 h-14 text-[#0e254a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'Information Security',
    description: 'Protect your data and systems with advanced security solutions.',
    icon: (
      <svg className="w-14 h-14 text-[#279ac4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v.01M7 10v2a5 5 0 0010 0v-2a5 5 0 00-10 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Applications',
    description: 'Streamline your operations with custom business software solutions.',
    icon: (
      <svg className="w-14 h-14 text-[#ff5e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    title: 'IT Service Management',
    description: 'Deliver efficient IT services that align with your business objectives.',
    icon: (
      <svg className="w-14 h-14 text-[#0e254a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Strategy Planning & Execution',
    description: 'Turn your vision into reality with actionable, results-driven plans.',
    icon: (
      <svg className="w-14 h-14 text-[#279ac4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Governance of Enterprise IT',
    description: 'Ensure compliance and maximize value from your IT investments.',
    icon: (
      <svg className="w-14 h-14 text-[#ff5e00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description: 'Deliver projects on time and within budget with expert management.',
    icon: (
      <svg className="w-14 h-14 text-[#0e254a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Data Protection & Compliance',
    description: 'Safeguard sensitive information and meet regulatory requirements.',
    icon: (
      <svg className="w-14 h-14 text-[#279ac4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v.01M7 10v2a5 5 0 0010 0v-2a5 5 0 00-10 0z" />
      </svg>
    ),
  },
];

const CARD_WIDTH = 380;
const CARD_HEIGHT = 340;
const CARD_GAP = 5; // 50% reduced gap
const VISIBLE_CARDS = 3;
const SCROLL_SPEED = 1.2; // px per frame, adjust for desired speed

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
    <section className="py-20 w-full" style={{ background: 'linear-gradient(90deg, #0e254a 0%, #279ac4 60%, #ff5e00 100%)' }}>
      <div className="container mx-auto px-1">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">Why choose us</span>
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
                  <div className="bg-white rounded-2xl p-14 h-full flex flex-col justify-center items-center transition-all duration-300 shadow-lg border border-[#e5e7eb]">
                    <div className="mb-7">{card.icon}</div>
                    <div className="text-3xl font-extrabold text-[#0e254a] mb-4 text-center">{card.title}</div>
                    <div className="text-[#10163a] text-center text-base font-normal leading-relaxed tracking-normal">{card.description}</div>
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