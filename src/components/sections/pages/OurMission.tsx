import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const OurMission: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <OptimizedImage
          src="/assets/images/our_mission1.jpg"
          alt="Mission Hero"
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
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Committed to forming lasting partnerships with organizations that will continuously add value in the ever-dynamic business environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#009FE3] mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At NexVerse, we are dedicated to providing effective consulting solutions for Small and Medium-sized Enterprises, as well as Corporate Organizations. Our team brings years of combined experience in helping organizations achieve operational efficiency and competitive advantage.
            </p>
          </motion.div>

          {/* Mission Images Grid */}
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
                  src={`/assets/images/our_mission${num}.jpg`}
                  alt={`Mission ${num}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                />
              </motion.div>
            ))}
          </div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in business and technology strategy consulting, and business transformational solutions for all industries. Our approach incorporates organizational coaching and corporate trainings to ensure continuous business efficiency at all levels.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurMission; 