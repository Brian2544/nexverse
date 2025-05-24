import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How does your consulting process work?',
    answer:
      'We begin with a detailed consultation to understand your needs, followed by tailored strategies and ongoing support to drive measurable results.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      "We work across various industries, including finance, healthcare, technology, and startups, offering insights tailored to each sector's unique challenges.",
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Timelines vary depending on the scope of your project, but most clients see noticeable improvements within a few months of implementation.',
  },
  {
    question: 'Do you offer one-time consultations?',
    answer:
      'Yes! We provide both one-time strategic consultations and long-term advisory services, depending on your business needs.',
  },
  {
    question: 'Can small businesses afford your services?',
    answer:
      'Absolutely! We offer flexible pricing plans designed to accommodate businesses of all sizes, ensuring accessibility without compromising quality.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Simply reach out through our contact form, and we'll schedule an initial consultation to explore how we can support your business goal.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenIndex(idx);
  };

  const handleMouseLeave = (idx: number) => {
    closeTimeout.current = setTimeout(() => {
      setOpenIndex((current) => (current === idx ? null : current));
    }, 3000);
  };

  const handleClick = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="section bg-white min-h-[400px] w-full z-0 scroll-mt-20" style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold uppercase">FAQ</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
            Answers to your most<br className="hidden md:block" />common questions
          </h2>
          <p className="subheading max-w-2xl mx-auto text-secondary-light">
            Find answers to common questions about our consulting services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto grid gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ boxShadow: '0 1px 4px 0 rgba(16,30,54,0.04)' }}
              whileHover={{ boxShadow: '0 4px 24px 0 rgba(0,159,227,0.10), 0 2px 8px 0 rgba(255,165,0,0.10)', borderColor: '#009FE3', backgroundColor: '#F7F8FA' }}
              animate={{ borderColor: openIndex === index ? '#009FE3' : '#F0F1F3', backgroundColor: openIndex === index ? '#F7F8FA' : '#fff' }}
              transition={{ duration: 0.3 }}
              className={`transition-colors duration-300 border border-[#F0F1F3] bg-white rounded-2xl shadow-sm overflow-hidden relative`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <button
                className="flex w-full justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left text-base sm:text-lg font-semibold text-primary hover:bg-[#F7F8FA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009FE3] transition relative z-10"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                onClick={() => handleClick(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0e254a]"
                  animate={{ rotate: openIndex === index ? 180 : 0, backgroundColor: openIndex === index ? '#009FE3' : '#0e254a' }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronUpIcon
                    className={`h-6 w-6 text-white transition-transform`}
                  />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div
                      id={`faq-panel-${index}`}
                      className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-sm sm:text-base text-gray-700 relative z-10"
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 