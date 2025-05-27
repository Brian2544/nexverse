import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface OurCoreValuesProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const coreValues = [
  {
    title: 'Respect',
    description: 'We cultivate the highest level of dignity and respect for our customers and colleagues. We value every idea from anyone we collaborate with; respect is enshrined in our culture.',
    icon: <CheckCircleIcon className="w-8 h-8 text-[#009FE3]" />
  },
  {
    title: 'Innovation',
    description: 'We embrace a culture of continuous improvement as we help our customers identify and leverage the best and most effective innovations for business efficiency.',
    icon: <CheckCircleIcon className="w-8 h-8 text-[#009FE3]" />
  },
  {
    title: 'Integrity',
    description: 'We conduct ourselves, and our business affairs, with utmost honesty and integrity, with high levels of ethical behavior.',
    icon: <CheckCircleIcon className="w-8 h-8 text-[#009FE3]" />
  },
  {
    title: 'Collaboration',
    description: 'We cultivate high levels of teamwork. We recognize the importance of constant collaboration in yielding optimal performance and business excellence.',
    icon: <CheckCircleIcon className="w-8 h-8 text-[#009FE3]" />
  },
  {
    title: 'Accountability',
    description: 'We are highly committed to what we do. Our organizational success highly depends on our culture of accountability and commitment to deliver what we promise, without failure.',
    icon: <CheckCircleIcon className="w-8 h-8 text-[#009FE3]" />
  }
];

const OurCoreValues: React.FC<OurCoreValuesProps> = ({ openContactModal }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <OptimizedImage
          src="/assets/images/core_values1.jpg"
          alt="Core Values Hero"
          className="w-full h-full object-cover"
          loading="eager"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Core Values
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                The principles that guide our daily operations and set the standard for how we work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consulting Partner & Mission Section */}
      <section className="relative z-10 bg-gradient-to-br from-[#2B2A7F]/90 via-[#009FE3]/80 to-[#F9B233]/10 py-20 px-4 md:px-0 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#009FE3]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F9B233]/20 rounded-full blur-2xl" />
        </div>
        <div className="container mx-auto relative z-10 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-6"
          >
            The leading partner for consulting services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-lg md:text-xl text-white/90 text-center mb-10"
          >
            that continuously transform organizations to improve efficiency while enriching people's lives and aspirations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 mb-12 shadow-xl border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#F9B233] mb-4 text-center">Mastery</h3>
            <p className="text-lg md:text-xl text-white/90 text-center">
            We strive to consistently deliver outstanding consulting solutions that drive excellence, efficiency, and lasting impact in a rapidly changing world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-6xl"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#009FE3] mb-8 text-center">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Respect */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group bg-gradient-to-br from-[#2B2A7F]/80 to-[#009FE3]/30 border border-[#009FE3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-[#F9B233]" aria-hidden="true" />
                  <h4 className="text-xl font-bold text-white">Respect</h4>
                </div>
                <p className="text-white/90">We cultivate the highest level of dignity and respect for our customers and colleagues. We value every idea from anyone we collaborate with; respect is enshrined in our culture.</p>
              </motion.div>
              {/* Innovation */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group bg-gradient-to-br from-[#009FE3]/80 to-[#2B2A7F]/30 border border-[#009FE3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-[#F9B233]" aria-hidden="true" />
                  <h4 className="text-xl font-bold text-white">Innovation</h4>
                </div>
                <p className="text-white/90">We embrace a culture of continuous improvement as we help our customers identify and leverage the best and most effective innovations for business efficiency.</p>
              </motion.div>
              {/* Integrity */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group bg-gradient-to-br from-[#2B2A7F]/80 to-[#F9B233]/20 border border-[#009FE3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-[#F9B233]" aria-hidden="true" />
                  <h4 className="text-xl font-bold text-white">Integrity</h4>
                </div>
                <p className="text-white/90">We conduct ourselves, and our business affairs, with utmost honesty and integrity, with high levels of ethical behavior.</p>
              </motion.div>
              {/* Collaboration */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group bg-gradient-to-br from-[#009FE3]/80 to-[#2B2A7F]/30 border border-[#009FE3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-[#F9B233]" aria-hidden="true" />
                  <h4 className="text-xl font-bold text-white">Collaboration</h4>
                </div>
                <p className="text-white/90">We cultivate high levels of teamwork. We recognize the importance of constant collaboration in yielding optimal performance and business excellence.</p>
              </motion.div>
              {/* Accountability */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="group bg-gradient-to-br from-[#2B2A7F]/80 to-[#009FE3]/30 border border-[#009FE3]/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-[#F9B233]" aria-hidden="true" />
                  <h4 className="text-xl font-bold text-white">Accountability</h4>
                </div>
                <p className="text-white/90">We are highly committed to what we do. Our organizational success highly depends on our culture of accountability and commitment to deliver what we promise, without failure.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreValues; 