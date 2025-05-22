import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const OurVision: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <OptimizedImage
          src="/assets/images/our_vision1.jpg"
          alt="Vision Hero"
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
                Our Vision
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                To be the leading partner for consulting services that continuously transform organizations to improve efficiency while enriching people's lives and aspirations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#009FE3] mb-6">About NexVerse</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              NexVerse Consulting Group comprises of a team of highly skilled professionals who are dedicated to providing effective Consulting Solutions for Small and Medium-sized Enterprises, as well as Corporate Organizations in the region. The team at NexVerse has many years of combined experience in assisting organizations realize operational efficiency and competitive advantage.
            </p>
          </motion.div>

          {/* Vision Images Grid */}
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
                  src={`/assets/images/our_vision${num}.jpg`}
                  alt={`Vision ${num}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </motion.div>
            ))}
          </div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              At NexVerse, we endeavor to create long-term partnerships with organizations, with clear value propositions in offering solutions that enable organizations achieve long-term strategic objectives. We specialize in business and technology strategy consulting, and business transformational solutions for all industries. We incorporate organizational coaching and corporate trainings to ensure continuous business efficiency in all organizational levels. We deliver the highest quality services for today, and for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurVision; 