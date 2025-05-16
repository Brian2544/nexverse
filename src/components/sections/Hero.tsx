import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/assets/images/what_our_clients_say.jpg',
    title: 'Client Success',
    desc: 'Our clients achieve measurable results and lasting partnerships.'
  },
  {
    src: '/assets/images/office.jpg',
    title: 'Innovation',
    desc: 'Empowering your business with cutting-edge solutions for a digital future.'
  },
  {
    src: '/assets/images/it_infrastructure.jpg',
    title: 'IT Infrastructure',
    desc: 'Robust, scalable, and secure IT systems to support your growth.'
  },
  {
    src: '/assets/images/project_management.jpg',
    title: 'Project Management',
    desc: 'Delivering projects on time, on budget, and beyond expectations.'
  },
  {
    src: '/assets/images/strategy.jpg',
    title: 'Strategy',
    desc: 'Transformative strategies that drive sustainable business excellence.'
  },
];

const ANIMATION_DURATION = 1.2; // seconds for fade
const INTERVAL = 6000; // ms between slides

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Animated Backgrounds */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={images[index].src}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${images[index].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
            }}
          >
            {/* Constant cinematic slow zoom-in */}
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.18 }}
              transition={{ duration: INTERVAL / 1000, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay for darkening background for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
      </div>
      {/* Text Block */}
      <div className="relative z-20 w-full max-w-xl p-6 md:p-12 mb-12 md:mb-20 lg:mb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: ANIMATION_DURATION, ease: 'easeInOut' }}
            className="bg-black/40 rounded-2xl p-6 md:p-8 shadow-2xl max-w-lg"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-3">
              {images[index].title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 drop-shadow-md">
              {images[index].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Responsive positioning for text block */}
      <style>{`
        @media (min-width: 768px) {
          section > div.relative {
            margin-left: 2.5rem;
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 