import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ContactModal from '../modals/ContactModal';
import OptimizedImage from '../common/OptimizedImage';

const steps = [
  {
    title: 'Simple Booking',
    description:
      'Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.',
    image: '/assets/images/hero5.jpg',
    cta: 'Discover More',
  },
  {
    title: 'Tailored Strategy',
    description:
      'We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.',
    image: '/assets/images/hero_strategy.jpg',
    cta: 'Discover More',
  },
  {
    title: 'Continuous Support',
    description:
      'From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you and you business with stratex.',
    image: '/assets/images/headphones.jpg',
    cta: 'Discover More',
  },
];

const Process = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const getInTouchBtnRef = useRef<HTMLButtonElement>(null);

  const openContactModal = () => {
    if (getInTouchBtnRef.current) {
      setButtonRect(getInTouchBtnRef.current.getBoundingClientRect());
    }
    setIsContactModalOpen(true);
  };

  return (
    <section id="process" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">How it works</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif leading-tight">
            A proven process to achieve<br className="hidden md:block" />
            your biggest goals
          </h2>
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <button
              ref={getInTouchBtnRef}
              onClick={openContactModal}
              className="group flex items-center px-3 py-1.5 rounded-full font-bold bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-sm min-w-[90px] max-w-[150px]"
              aria-label="Get in Touch"
            >
              <span className="mr-2">Get in touch</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#009FE3] group-hover:bg-gradient-to-r group-hover:from-[#FFA500] group-hover:to-[#009FE3] group-hover:text-white transition-all">
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#009FE3] to-[#FFA500] z-0" style={{transform: 'translateX(-50%)'}} />
          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center md:items-stretch md:gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.06 }}
                  className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-8 md:pl-0 mb-6 md:mb-0 rounded-[20px] transition-all duration-300 overflow-hidden"
                >
                  <OptimizedImage
                    src={step.image}
                    alt={step.title}
                    className="rounded-[20px] w-[320px] h-[200px]"
                    loading="lazy"
                  />
                </motion.div>
                {/* Timeline number */}
                <div className="hidden md:flex flex-col items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#009FE3] flex items-center justify-center text-[#009FE3] font-semibold text-base shadow" style={{marginTop: idx === 0 ? '0' : '-1.25rem'}}>
                    {`0${idx + 1}`}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gradient-to-b from-[#009FE3] to-[#FFA500]" style={{minHeight: '60px'}}></div>
                  )}
                </div>
                {/* Text */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/2 flex flex-col justify-center md:justify-start md:pl-8 md:pr-0"
                >
                  <h3 className="text-xl font-semibold text-[#232323] mb-2">{step.title}</h3>
                  <p className="text-[#232323] text-base mb-4">{step.description}</p>
                  <a href="#contact" className="text-[#009FE3] text-base font-medium flex items-center gap-1 hover:underline">
                    {step.cta} <span>→</span>
                  </a>
                </motion.div>
                {/* Mobile number badge */}
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-[#009FE3] flex items-center justify-center text-[#009FE3] font-semibold text-base shadow">
                    {`0${idx + 1}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        anchorRect={buttonRect}
        source="process"
      />
    </section>
  );
};

export default Process; 