import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../common/OptimizedImage';

const caseStudies = [
  {
    title: 'Digital Transformation for Global Retailer',
    description: 'Helped a leading retail chain implement a comprehensive digital strategy, resulting in 40% increase in online sales.',
    image: '/assets/images/case-studies/retail.avif',
    category: 'Digital Transformation',
  },
  {
    title: 'AI Implementation in Healthcare',
    description: 'Developed and implemented AI solutions for a healthcare provider, improving patient care efficiency by 35%.',
    image: '/assets/images/case-studies/healthcare.avif',
    category: 'Technology',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Optimized supply chain operations for a manufacturing company, reducing costs by 25% and improving delivery times.',
    image: '/assets/images/case-studies/supply-chain.avif',
    category: 'Operations',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-black font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped organizations across various industries achieve their goals and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full"
                  loading="lazy"
                  fallbackColor="#F5F5F5"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Read Case Study →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
          >
            View All Case Studies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies; 