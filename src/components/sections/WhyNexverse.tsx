import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const otherFirmFeatures = [
  {
    title: 'Generic Strategies',
    description: 'One-size-fits-all solutions that lack personalized insights and flexibility.'
  },
  {
    title: 'Limited Guidance',
    description: 'Clients are left to navigate complex challenges with minimal expert support.'
  },
  {
    title: 'Hidden Fees',
    description: 'Unexpected costs and additional charges that inflate your total investment.'
  }
];

const nexverseFeatures = [
  {
    title: 'Transparent Processes',
    description: 'Clear communication and open dialogue throughout every project phase, ensuring complete visibility into our methodologies.'
  },
  {
    title: 'Enterprise-Grade Solutions',
    description: 'Scalable, secure, and robust solutions designed to meet the complex needs of modern enterprises.'
  },
  {
    title: 'Certified Experts',
    description: 'Highly qualified professionals with industry-recognized certifications and extensive practical experience.'
  }
];

const tickColors = [
  'text-[#279ac4]', // sky blue
  'text-[#ff5e00]', // orange
  'text-[#0e254a]', // deep navy
];

const borderGradient =
  'linear-gradient(135deg, #0A192F, #64FFDA, #FF6B6B)';
const shadowGradient =
  '0 8px 48px 0 rgba(10,25,47,0.25), 0 4px 24px 0 rgba(100,255,218,0.18), 0 3px 12px 0 rgba(255,107,107,0.18)';

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

type Feature = {
  title: string;
  description: string;
};

interface CardProps {
  title: string;
  titleColor: string;
  features: Feature[];
}

const Card: React.FC<CardProps> = ({ title, titleColor, features }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 60, damping: 18 }}
      whileHover={{
        scale: 1.045,
      }}
      className="flex-1 bg-white p-8 transition-all duration-300 cursor-pointer"
      style={{
        borderRadius: '20px',
        boxShadow:
          '0 0 0 2px #fff, 0 0 8px 2px #ff5e00, 0 0 18px 8px #279ac4, 0 0 32px 12px #0e254a',
      }}
    >
      <h3 className={`text-xl font-bold mb-6 ${titleColor} transition-colors duration-200 group-hover:text-accent`}>{title}</h3>
      <motion.ul
        className="space-y-6"
        variants={listVariants}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {features.map((f: Feature, i: number) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 group transition-all duration-200"
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
          >
            <CheckCircleIcon className={`w-6 h-6 ${tickColors[i % tickColors.length]} mt-1 transition-colors duration-200 group-hover:text-accent`} />
            <div>
              <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">{f.title}</span>
              <div className="text-gray-600 text-sm transition-all duration-200">{f.description}</div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const WhyNexverse: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
          <Card title="Other Firms" titleColor="text-gray-900" features={otherFirmFeatures} />
          <Card title="With Nexverse" titleColor="text-primary" features={nexverseFeatures} />
        </div>
        {/* Testimonial Section */}
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="flex items-center mb-6">
            <span className="flex items-center mr-2">
              <svg width="0" height="0">
                <linearGradient id="star-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#21b6e6" />
                  <stop offset="100%" stopColor="#ffb300" />
                </linearGradient>
              </svg>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-7 h-7"
                  fill="url(#star-gradient)"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </span>
            <span className="text-lg font-medium text-gray-700">Rated 4.9/5</span>
          </div>
          <blockquote className="text-center text-3xl md:text-5xl font-serif text-gray-900 font-normal leading-tight max-w-4xl mb-10">
            Nexverse revolutionized our customer understanding, boosting retention like<br className="hidden md:block" /> never before.
          </blockquote>
          <div className="flex flex-col items-center">
            <img src="/assets/images/kb.jpg" alt="Brian Omondi" className="w-16 h-16 rounded-full object-cover shadow mb-2" />
            <div className="text-xl font-semibold text-gray-900">Brian Omondi</div>
            <div className="flex gap-2 mt-2">
              <span className="text-white text-sm font-semibold px-3 py-1 rounded-full shadow" style={{background: 'linear-gradient(90deg, #21b6e6 0%, #ffb300 100%)'}}>High conversion</span>
              <span className="text-white text-sm font-semibold px-3 py-1 rounded-full shadow" style={{background: 'linear-gradient(90deg, #21b6e6 0%, #ffb300 100%)'}}>2x sales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNexverse;