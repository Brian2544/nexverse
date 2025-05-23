import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import { 
  CloudArrowUpIcon, 
  ShieldCheckIcon, 
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const TechnologyConsulting: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal disruption',
      icon: CloudArrowUpIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: ShieldCheckIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with cutting-edge technology solutions',
      icon: CpuChipIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Infrastructure Management',
      description: 'Optimize and maintain your IT infrastructure for peak performance',
      icon: ServerIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet your unique business needs',
      icon: CodeBracketIcon,
      color: 'bg-red-500'
    },
    {
      title: 'DevOps Implementation',
      description: 'Streamline development and operations with modern DevOps practices',
      icon: CommandLineIcon,
      color: 'bg-indigo-500'
    }
  ];

  const testimonials = [
    {
      quote: "Their technology consulting transformed our business operations completely. The cloud migration was seamless and our efficiency has increased by 40%.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      image: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "The cybersecurity implementation was comprehensive and professional. We feel much more secure now.",
      author: "Michael Chen",
      role: "Security Director, Global Finance",
      image: "/images/testimonials/michael.jpg"
    },
    {
      quote: "Their DevOps expertise helped us reduce deployment time by 60%. Outstanding results!",
      author: "Emma Rodriguez",
      role: "Lead Developer, InnovateTech",
      image: "/images/testimonials/emma.jpg"
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      description: "Successfully migrated a Fortune 500 company's infrastructure to AWS",
      metrics: "40% cost reduction, 99.99% uptime",
      image: "/images/case-studies/cloud-migration.jpg"
    },
    {
      title: "Cybersecurity Overhaul",
      description: "Implemented comprehensive security measures for a financial institution",
      metrics: "Zero security breaches, 100% compliance",
      image: "/images/case-studies/security.jpg"
    },
    {
      title: "Digital Transformation",
      description: "Modernized legacy systems for a manufacturing giant",
      metrics: "50% efficiency increase, 30% revenue growth",
      image: "/images/case-studies/digital-transform.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/tech-consulting-hero.jpg"
            alt="Technology Consulting"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#009FE3]/90 to-[#009FE3]/70" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Technology Consulting
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology solutions and expert guidance
          </p>
        </motion.div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology consulting services to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#009FE3] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <OptimizedImage
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our technology consulting success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <OptimizedImage
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {caseStudy.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium text-[#009FE3]">{caseStudy.metrics}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyConsulting; 