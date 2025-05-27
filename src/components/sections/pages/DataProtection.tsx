import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  DocumentCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CloudIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

interface DataProtectionProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const DataProtection: React.FC<DataProtectionProps> = ({ openContactModal }) => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const stats = [
    { label: 'Data Breaches Prevented', value: '1000+' },
    { label: 'Compliance Standards', value: '15+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Response Time', value: '< 1hr' },
  ];

  const painPoints = [
    {
      icon: <ExclamationTriangleIcon className="w-8 h-8 text-[#009FE3]" />,
      title: 'Data Breaches',
      desc: 'Increasingly sophisticated cyber threats and data breaches costing millions in damages.'
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8 text-[#FFA500]" />,
      title: 'Compliance Complexity',
      desc: 'Navigating complex and evolving data protection regulations across jurisdictions.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-[#1e2761]" />,
      title: 'Human Error',
      desc: 'Employee mistakes and lack of awareness leading to security vulnerabilities.'
    },
    {
      icon: <CloudIcon className="w-8 h-8 text-[#009FE3]" />,
      title: 'Cloud Security',
      desc: 'Securing data across multiple cloud platforms and hybrid environments.'
    }
  ];

  const solutions = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-[#009FE3]" />,
      title: 'Advanced Threat Protection',
      desc: 'Multi-layered security with AI-powered threat detection and prevention.',
      features: ['Real-time monitoring', 'Automated response', 'Threat intelligence']
    },
    {
      icon: <LockClosedIcon className="w-8 h-8 text-[#FFA500]" />,
      title: 'Compliance Management',
      desc: 'Comprehensive compliance frameworks for GDPR, CCPA, HIPAA, and more.',
      features: ['Regulatory mapping', 'Audit trails', 'Policy management']
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-[#1e2761]" />,
      title: 'Security Training',
      desc: 'Employee awareness programs and security best practices training.',
      features: ['Phishing simulations', 'Compliance training', 'Security awareness']
    },
    {
      icon: <CloudIcon className="w-8 h-8 text-[#009FE3]" />,
      title: 'Cloud Security',
      desc: 'End-to-end protection for cloud infrastructure and applications.',
      features: ['Cloud access security', 'Data encryption', 'Secure configurations']
    }
  ];

  const complianceStandards = [
    { name: 'GDPR', icon: '🇪🇺' },
    { name: 'CCPA', icon: '🇺🇸' },
    { name: 'HIPAA', icon: '🏥' },
    { name: 'ISO 27001', icon: '📋' },
    { name: 'PCI DSS', icon: '💳' },
    { name: 'SOC 2', icon: '🔒' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 px-4 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src="/assets/images/office.jpg" 
            alt="Data Protection Background" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e2761]/95 via-[#1e2761]/85 to-[#009FE3]/90" />
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.png')] opacity-10" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative"
            >
              <motion.div
                className="absolute -left-4 -top-4 w-24 h-24 bg-[#FFA500]/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-white relative"
                variants={itemAnimation}
              >
                Enterprise Data Protection & Compliance
          </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-white/90 relative"
                variants={itemAnimation}
              >
                Secure your data, ensure compliance, and build trust with comprehensive protection solutions.
              </motion.p>
              <motion.button
                variants={itemAnimation}
                onClick={() => openContactModal()}
                className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get a Security Assessment</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -right-4 -top-4 w-32 h-32 bg-[#009FE3]/20 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <h3 className="text-xl font-semibold mb-4 text-white relative">Key Security Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 rounded-lg p-4 relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#FFA500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="text-2xl font-bold text-[#FFA500] relative">{stat.value}</div>
                      <div className="text-sm text-white/80 relative">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Data Protection Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern organizations face complex security challenges that require expert solutions.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Protection Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our enterprise-grade solutions address your security challenges head-on.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {solution.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.desc}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-[#009FE3] mr-2" />
                      {feature}
                    </motion.li>
                  ))}
          </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Standards We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with global and industry-specific regulations.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="text-4xl mb-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {standard.icon}
                </motion.div>
                <div className="font-semibold text-gray-900">{standard.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to securing your data and ensuring compliance.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Assessment',
                desc: 'Evaluate current security posture and compliance status'
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'Develop comprehensive protection and compliance strategy'
              },
              {
                step: '03',
                title: 'Implementation',
                desc: 'Deploy security solutions and compliance frameworks'
              },
              {
                step: '04',
                title: 'Monitoring',
                desc: 'Continuous monitoring and improvement'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="text-4xl font-bold text-[#009FE3] mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped organizations achieve their security goals.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "NexVerse's data protection solutions helped us achieve GDPR compliance and significantly reduce our security risks.",
                author: "Sarah Johnson",
                role: "CISO, TechCorp",
                company: "Enterprise Technology"
              },
              {
                quote: "Their comprehensive approach to security and compliance has been instrumental in our digital transformation journey.",
                author: "Michael Chen",
                role: "IT Director",
                company: "Global Finance"
              },
              {
                quote: "The team's expertise in data protection and their proactive approach to security has been invaluable.",
                author: "Emma Rodriguez",
                role: "Compliance Officer",
                company: "Healthcare Plus"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div 
                  className="text-4xl text-[#009FE3] mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  "
                </motion.div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-[#009FE3]">{testimonial.role}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1e2761] to-[#009FE3] text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemAnimation}
            >
              Ready to Secure Your Data?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/90 max-w-3xl mx-auto"
              variants={itemAnimation}
            >
              Get in touch with our experts for a comprehensive security assessment and tailored protection strategy.
            </motion.p>
            <motion.button
              variants={itemAnimation}
              onClick={() => openContactModal()}
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
        </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataProtection; 