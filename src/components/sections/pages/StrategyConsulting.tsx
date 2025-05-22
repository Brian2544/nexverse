import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const StrategyConsulting: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Business Strategy Development',
      description: 'We help organizations develop comprehensive business strategies that align with their vision and market opportunities.',
      icon: '🎯',
      image: '/assets/images/strategy/business-strategy.jpg',
      features: ['Market Analysis', 'Competitive Positioning', 'Growth Strategy', 'Resource Allocation']
    },
    {
      title: 'Market Analysis & Research',
      description: 'Deep dive into market trends, competitor analysis, and customer insights to inform strategic decisions.',
      icon: '📊',
      image: '/assets/images/strategy/market-analysis.jpg',
      features: ['Market Size Assessment', 'Competitor Analysis', 'Customer Segmentation', 'Trend Analysis']
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Guide your organization through digital transformation with a clear roadmap and implementation plan.',
      icon: '💡',
      image: '/assets/images/strategy/digital-transformation.jpg',
      features: ['Technology Assessment', 'Digital Roadmap', 'Change Management', 'Implementation Planning']
    },
    {
      title: 'Growth Strategy',
      description: 'Develop sustainable growth strategies that balance short-term gains with long-term success.',
      icon: '📈',
      image: '/assets/images/strategy/growth-strategy.jpg',
      features: ['Market Expansion', 'Product Development', 'Strategic Partnerships', 'Revenue Optimization']
    }
  ];

  const caseStudies = [
    {
      title: 'Financial Services Transformation',
      description: 'Helped a leading bank achieve 40% growth through digital transformation.',
      image: '/assets/images/strategy/case-study-1.jpg'
    },
    {
      title: 'Retail Expansion Strategy',
      description: 'Developed and executed a successful market entry strategy for a retail chain.',
      image: '/assets/images/strategy/case-study-2.jpg'
    },
    {
      title: 'Technology Innovation',
      description: 'Guided a tech startup through rapid scaling and market penetration.',
      image: '/assets/images/strategy/case-study-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/strategy-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Strategy Consulting
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Transform your business with data-driven strategies that drive sustainable growth and competitive advantage.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#009FE3] mb-6">Strategic Excellence</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At NexVerse, we combine deep industry expertise with innovative thinking to help organizations navigate complex challenges and seize new opportunities. Our strategy consulting services are designed to deliver measurable results and sustainable competitive advantage.
            </p>
          </motion.div>

          {/* Services Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#009FE3] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-[#009FE3] mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <OptimizedImage
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#009FE3] mb-2">{study.title}</h3>
                    <p className="text-gray-700">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#009FE3] mb-6">Why Choose NexVerse?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With our headquarters in Westlands, Nairobi, we bring a unique blend of local expertise and global best practices. Our team of seasoned consultants has helped numerous organizations across East Africa achieve their strategic objectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#009fe30a] rounded-xl">
                <h3 className="text-xl font-bold text-[#009FE3] mb-2">Local Expertise</h3>
                <p className="text-gray-700">Deep understanding of the East African business landscape</p>
              </div>
              <div className="p-6 bg-[#009fe30a] rounded-xl">
                <h3 className="text-xl font-bold text-[#009FE3] mb-2">Proven Results</h3>
                <p className="text-gray-700">Track record of successful strategy implementations</p>
              </div>
              <div className="p-6 bg-[#009fe30a] rounded-xl">
                <h3 className="text-xl font-bold text-[#009FE3] mb-2">Customized Approach</h3>
                <p className="text-gray-700">Tailored solutions for your unique challenges</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategyConsulting; 