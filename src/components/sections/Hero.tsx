import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.THREE = THREE;
}

// Add this at the top of the file or in a separate global.d.ts file:
// declare module 'vanta/dist/vanta.globe.min';

const stats = [
  {
    label: 'Faster Project Delivery',
    value: 97,
    suffix: '%',
    desc: 'Accelerated timelines, no compromise on quality.'
  },
  {
    label: 'Issues Resolved',
    value: 12000,
    suffix: '+',
    desc: 'Technical roadblocks cleared for our clients.'
  },
  {
    label: '24/7 Expert Support',
    value: 24,
    suffix: '/7',
    desc: 'Always-on assistance, whenever you need it.'
  },
  {
    label: 'Uptime Guarantee',
    value: 99.98,
    suffix: '%',
    desc: 'Your business, always online and secure.'
  },
];

const heroGradient =
  'bg-gradient-to-tr from-[#1e3a8a] via-[#06b6d4] to-[#f59e42]'; // blue, cyan, orange

const glassClass =
  'bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl';

const contrastGradient =
  'bg-gradient-to-r from-[#1e3a8a] via-[#06b6d4] to-[#f59e42] bg-clip-text text-transparent';

function useCountUp(to: number, duration = 1.6, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    let raf: number;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (to - start) * progress;
      setValue(Number(current.toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, decimals]);
  return value;
}

const VANTA_COLORS = {
  color: 0x1e3a8a, // blue from logo
  color2: 0xf59e42, // orange accent from logo
  backgroundColor: 0x000000,
  backgroundAlpha: 1.0,
  points: 12.0,
  maxDistance: 22.0,
  spacing: 18.0,
  showLines: true,
  lineColor: 0x06b6d4, // cyan lines
};

interface HeroProps {
  openContactModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openContactModal }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let cleanup = () => {};
    import('vanta/dist/vanta.globe.min').then((module) => {
      const GLOBE = module.default;
      if (vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: VANTA_COLORS.color,
          color2: VANTA_COLORS.color2,
          backgroundColor: VANTA_COLORS.backgroundColor,
          points: VANTA_COLORS.points,
          maxDistance: VANTA_COLORS.maxDistance,
          spacing: VANTA_COLORS.spacing,
          showLines: VANTA_COLORS.showLines,
          lineColor: VANTA_COLORS.lineColor,
          size: 1.5,
        });
        cleanup = () => {
          if (vantaEffect.current) {
            vantaEffect.current.destroy();
            vantaEffect.current = null;
          }
        };
      }
    });
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      cleanup();
    };
  }, []);

  const statValues = [
    useCountUp(stats[0].value, 1.4, 0),
    useCountUp(stats[1].value, 1.7, 0),
    useCountUp(stats[2].value, 1.2, 0),
    useCountUp(stats[3].value, 1.5, 2),
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex flex-col justify-center items-center w-full overflow-hidden bg-black text-white font-inter scroll-mt-20"
      aria-label="Nexverse Hero Section"
    >
      {/* Vanta Globe 3D Animation Background */}
      <div
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* Hero Content - left aligned on desktop, centered on mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-bold tracking-tight mb-6 leading-tight"
          >
            <span className={contrastGradient}>Empowering Your Business Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="text-[#06b6d4] text-lg md:text-xl mb-4 max-w-2xl font-inter font-light tracking-normal"
          >
            Partner with Nexverse Consulting for expert guidance, tailored strategies, and measurable results.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            className="text-[#06b6d4] text-base md:text-lg mb-8 max-w-2xl font-inter font-light tracking-normal"
          >
            Unlock your company's full potential with a trusted consultancy partner. We listen, strategize, and deliver solutions that drive growth, efficiency, and lasting value. Let's build your future—together.
          </motion.p>
          <div className="flex justify-center md:justify-start mb-8 w-full">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-block ${glassClass} text-white font-inter font-semibold text-base rounded-md px-10 py-4 bg-gradient-to-r from-[#1e3a8a] via-[#06b6d4] to-[#f59e42] hover:from-[#06b6d4] hover:to-[#1e3a8a] transition-all focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:ring-offset-2 shadow-lg`}
              tabIndex={0}
              aria-label="Get in Touch with Nexverse Today"
              onClick={openContactModal}
            >
              Get in Touch Today
            </motion.button>
          </div>
        </div>
        {/* Optionally, you can add a right-side illustration or leave empty for now */}
        <div className="hidden md:block w-2/5" />
      </div>
      {/* Animated Stats */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
              className={`text-center rounded-xl p-6 ${glassClass} shadow-lg`}
              tabIndex={0}
              aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}
            >
              <span className="text-4xl md:text-5xl font-jakarta font-semibold mb-2 tracking-tight flex items-center justify-center">
                {statValues[i]}
                <span className="ml-1 text-2xl md:text-3xl font-bold text-[#06b6d4]">{stat.suffix}</span>
              </span>
              <p className="text-[#06b6d4] font-inter text-base font-medium mt-2">{stat.label}</p>
              <p className="text-[#06b6d4]/80 font-inter text-sm font-light mt-1">{stat.desc}</p>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 