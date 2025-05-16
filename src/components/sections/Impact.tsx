import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../common/OptimizedImage';

const statsLeft = [
  { label: 'Revenue', value: '$7M+' },
  { label: 'Growth', value: '72%' },
  { label: 'Skills', value: '65%' },
];
const statsRight = [
  { label: 'Impact', value: '78%' },
  { label: 'Designers', value: '1%' },
  { label: 'Consultants', value: '10+' },
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0F2D52] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0F2D52] inline-block"></span>
            <span className="text-[#0F2D52] text-lg font-bold">Impact</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
            Real results that drive lasting<br className="hidden md:block" />
            impact for everyone
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            We deliver tailored strategies, innovative solutions,<br />
            and dedicated support to drive lasting growth
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-3xl flex flex-col md:flex-row items-center justify-center">
            {/* Left Stats */}
            <div className="hidden md:flex flex-col gap-12 absolute left-0 top-1/2 -translate-y-1/2">
              {statsLeft.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-center gap-3 relative"
                >
                  {/* Line from stat to image */}
                  <span className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200" style={{ width: 'calc(100% + 48px)' }}></span>
                  <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white font-bold px-4 py-2 rounded-full text-base shadow">
                    {stat.value}
                  </span>
                  <span className="text-gray-700 text-base font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80, damping: 18 }}
              className="z-10"
              whileHover={{ scale: 1.04, rotate: 2, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.18), 0 4px 16px 0 rgba(255,165,0,0.12)' }}
            >
              <OptimizedImage
                src="/assets/images/ceo.jpg"
                alt="CEO"
                className="rounded-[32px] w-[320px] h-[360px] mx-auto shadow-lg"
                loading="lazy"
                fallbackColor="#F5F5F5"
              />
            </motion.div>
            {/* Right Stats */}
            <div className="hidden md:flex flex-col gap-12 absolute right-0 top-1/2 -translate-y-1/2">
              {statsRight.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-center gap-3 justify-end relative"
                >
                  <span className="text-gray-700 text-base font-medium">{stat.label}</span>
                  <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white font-bold px-4 py-2 rounded-full text-base shadow">
                    {stat.value}
                  </span>
                  {/* Line from stat to image */}
                  <span className="hidden md:block absolute right-full top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200" style={{ width: 'calc(100% + 48px)' }}></span>
                </motion.div>
              ))}
            </div>
            {/* Mobile Stats */}
            <div className="flex md:hidden flex-wrap justify-center gap-4 mt-6">
              {[...statsLeft, ...statsRight].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2"
                >
                  <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white font-bold px-4 py-2 rounded-full text-base shadow">
                    {stat.value}
                  </span>
                  <span className="text-gray-700 text-base font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact; 