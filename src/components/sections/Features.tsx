import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, ArrowPathIcon, GlobeAltIcon, ClipboardDocumentListIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />, 
    title: 'Unlimited consultations',
    desc: 'Schedule as many strategy sessions as needed to your business',
  },
  {
    icon: <ArrowPathIcon className="w-7 h-7 text-white" />, 
    title: 'Tailored solutions',
    desc: 'Get customized strategies designed to with your unique goals',
  },
  {
    icon: <GlobeAltIcon className="w-7 h-7 text-white" />, 
    title: 'Expert insights',
    desc: 'Leverage industry-leading expertise to drive informed decisions',
  },
  {
    icon: <ClipboardDocumentListIcon className="w-7 h-7 text-white" />, 
    title: 'Data strategies',
    desc: 'Make confident moves with insights backed by research & analytics.',
  },
  {
    icon: <PhoneIcon className="w-7 h-7 text-white" />, 
    title: 'Ongoing support',
    desc: 'Stay ahead with continuous guidance and recommendation',
  },
  {
    icon: <LinkIcon className="w-7 h-7 text-white" />, 
    title: 'Seamless execution',
    desc: 'From planning to implementation, we ensure a smooth & process',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white min-h-[400px] w-full z-0" style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">Features</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 leading-tight">
            Key benefits that set us apart<br className="hidden md:block" />
            from other firms
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              whileHover={{ scale: 1.045, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10), 0 4px 16px 0 rgba(255,165,0,0.10)' }}
            >
              <span className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] rounded-lg p-4 shadow flex items-center justify-center mb-2">
                {feature.icon}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 