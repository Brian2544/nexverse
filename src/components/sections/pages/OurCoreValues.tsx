import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

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

const OurCoreValues: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <OptimizedImage
          src="/assets/images/core_values1.jpg"
          alt="Core Values Hero"
          className="w-full h-full object-cover"
          loading="eager"
          sizes="100vw"
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Values Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#009FE3] mb-6">What We Stand For</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At NexVerse, our values serve as the principles that guide our daily operations. They set the standard for how we work; it is what we expect of ourselves; it is who we are.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold text-[#009FE3]">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Values Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-xl"
              >
                <OptimizedImage
                  src={`/assets/images/core_values${num}.jpg`}
                  alt={`Core Values ${num}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreValues; 