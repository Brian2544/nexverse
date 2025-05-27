import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import useVanta from '../../../components/common/useVanta';
import { FaClipboardList, FaDraftingCompass, FaCode, FaRocket, FaChartLine, FaUsers, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import AboutSection from '../AboutSection';

interface ProjectManagementProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } }
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

// Animated count-up hook
function useCountUp(end, duration = 1.5, decimals = 0, startWhen = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startWhen) return;
    let start = 0;
    let startTime = null;
    function animateCountUp(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = start + (end - start) * progress;
      setValue(Number(current.toFixed(decimals)));
      if (progress < 1) {
        requestAnimationFrame(animateCountUp);
      } else {
        setValue(end);
      }
    }
    requestAnimationFrame(animateCountUp);
    // eslint-disable-next-line
  }, [end, duration, decimals, startWhen]);
  return value;
}

const ProjectManagement: React.FC<ProjectManagementProps> = ({ openContactModal }) => {
  const heroRef = useRef(null);
  const haloRef = useRef(null);
  useVanta(heroRef, 'WAVES', { color: 0x009FE3, shininess: 59 });
  useVanta(haloRef, 'HALO', { color: 0x009FE3, amplitudeFactor: 2.6, size: 1.4 });

  const projectPhases = [
    {
      icon: <FaClipboardList className="text-3xl text-[#009FE3]" />,
      title: 'Discovery & Planning',
      desc: 'We begin by understanding your project goals, requirements, and constraints. Our planning ensures a roadmap for success.'
    },
    {
      icon: <FaDraftingCompass className="text-3xl text-[#009FE3]" />,
      title: 'Design & Prototyping',
      desc: 'Our team creates clear project designs and prototypes, gathering your feedback early to ensure alignment.'
    },
    {
      icon: <FaCode className="text-3xl text-[#009FE3]" />,
      title: 'Execution & Monitoring',
      desc: 'We execute with precision, using agile methods and continuous monitoring to keep your project on track.'
    },
    {
      icon: <FaRocket className="text-3xl text-[#009FE3]" />,
      title: 'Delivery & Launch',
      desc: 'We ensure a seamless launch, with post-delivery support and optimization for lasting impact.'
    }
  ];

  const methodologies = [
    {
      title: 'Agile',
      description: 'Flexible, iterative approach for rapid delivery and continuous improvement',
      icon: <FaChartLine className="text-2xl text-[#009FE3]" />,
      benefits: ['Quick adaptation to changes', 'Regular stakeholder feedback', 'Continuous delivery']
    },
    {
      title: 'Waterfall',
      description: 'Structured, sequential approach for well-defined projects',
      icon: <FaShieldAlt className="text-2xl text-[#009FE3]" />,
      benefits: ['Clear project phases', 'Detailed documentation', 'Predictable outcomes']
    },
    {
      title: 'Hybrid',
      description: 'Combined approach leveraging the best of both worlds',
      icon: <FaLightbulb className="text-2xl text-[#009FE3]" />,
      benefits: ['Flexible planning', 'Structured execution', 'Balanced approach']
    }
  ];

  const successMetrics = [
    { metric: 'On-Time Delivery', value: '98%' },
    { metric: 'Budget Adherence', value: '95%' },
    { metric: 'Client Satisfaction', value: '4.9/5' },
    { metric: 'Project Success Rate', value: '96%' }
  ];

  const sectionRefs = Array.from({ length: 8 }, () => useRef(null));

  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: '-100px' });
  const animatedMetrics = [
    useCountUp(metricsInView ? 98 : 0, 1.2, 0, metricsInView),
    useCountUp(metricsInView ? 95 : 0, 1.2, 0, metricsInView),
    useCountUp(metricsInView ? 4.9 : 0, 1.2, 1, metricsInView),
    useCountUp(metricsInView ? 96 : 0, 1.2, 0, metricsInView),
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#23246D]">
      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col md:flex-row items-center justify-between px-0 md:px-6 py-0 md:py-20 min-h-[80vh] h-[80vh] text-white overflow-hidden bg-gradient-to-br from-[#23246D] via-[#009FE3] to-[#00AEEF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[0]}
      >
        {/* Background Video */}
        <video 
          src="/assets/images/project_management.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 min-h-full min-w-full max-h-none max-w-none" 
          aria-label="Project Management Video"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#23246D]/80 via-[#009FE3]/60 to-[#00AEEF]/60 z-0" />
        <motion.div className="z-10 max-w-xl px-6 py-20 md:py-0 md:px-0" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#009FE3] to-[#00AEEF] bg-clip-text text-transparent"
          >
            Transform Your Vision Into Reality
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-white/90 text-lg mb-6"
          >
            Expert project management that delivers results. We combine proven methodologies with cutting-edge tools to ensure your project's success.
          </motion.p>
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openContactModal()}
            className="bg-gradient-to-r from-[#FFA500] to-[#FFD700] text-[#23246D] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Project Phases Section */}
      <motion.section
        className="py-20 px-4 bg-[#23246D]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[1]}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#009FE3] to-[#00AEEF] bg-clip-text text-transparent mb-4">Our Project Management Process</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#E0E7FF] text-lg max-w-3xl mx-auto">A proven methodology that ensures successful project delivery every time</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer}>
          {projectPhases.map((phase, index) => (
            <motion.div
              key={phase.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
              className="bg-gradient-to-br from-[#23246D] to-[#009FE3] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFA500]"
            >
              <div className="mb-4 text-[#FFA500]">{phase.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-[#E0E7FF]">{phase.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Methodologies Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-[#E0F7FF] to-[#B3E6FF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[2]}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#009FE3] to-[#00AEEF] bg-clip-text text-transparent mb-4">Our Methodologies</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#23246D] text-lg max-w-3xl mx-auto">Choose the approach that best fits your project needs</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer}>
          {methodologies.map((method, index) => (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#00AEEF]"
            >
              <div className="mb-4 text-[#009FE3]">{method.icon}</div>
              <h3 className="text-xl font-bold text-[#23246D] mb-2">{method.title}</h3>
              <p className="text-[#23246D] mb-4">{method.description}</p>
              <ul className="space-y-2">
                {method.benefits.map((benefit, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center text-[#009FE3]">
                    <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-2" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Success Metrics Section */}
      <motion.section
        className="py-20 px-4 bg-[#23246D]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[3]}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#009FE3] to-[#00AEEF] bg-clip-text text-transparent mb-4">Our Success Metrics</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#E0E7FF] text-lg max-w-3xl mx-auto">Proven results that speak for themselves</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer} ref={metricsRef}>
          {successMetrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              variants={fadeInUp}
              whileHover={{ scale: 1.07 }}
              className="bg-gradient-to-br from-[#009FE3] to-[#00AEEF] rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#FFA500]"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.15, type: 'spring', stiffness: 180 }}
                className="text-3xl font-bold text-[#23246D] mb-2 flex items-center justify-center"
              >
                {index === 2 ? (
                  <>
                    {animatedMetrics[index]}
                    <span className="ml-1 text-xl">/5</span>
                  </>
                ) : (
                  <>
                    {animatedMetrics[index]}
                    {metric.value.replace(/^[\d.]+/, '')}
                  </>
                )}
              </motion.div>
              <div className="text-white/90">{metric.metric}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-[#E0F7FF] to-[#B3E6FF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[4]}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#009FE3] to-[#00AEEF] bg-clip-text text-transparent mb-4">Our Expert Team</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#23246D] text-lg max-w-3xl mx-auto">Certified professionals with years of industry experience</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer}>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#009FE3]"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaUsers className="text-3xl text-[#FFA500]" />
              <div>
                <h3 className="text-xl font-bold text-[#23246D]">Project Managers</h3>
                <p className="text-[#009FE3]">PMP Certified Experts</p>
              </div>
            </div>
            <p className="text-[#23246D]">Our project managers bring years of experience in delivering complex projects across various industries.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#00AEEF]"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaChartLine className="text-3xl text-[#009FE3]" />
              <div>
                <h3 className="text-xl font-bold text-[#23246D]">Analysts</h3>
                <p className="text-[#00AEEF]">Data-Driven Experts</p>
              </div>
            </div>
            <p className="text-[#23246D]">Our analysts ensure data-driven decision making and continuous improvement throughout the project lifecycle.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#FFA500]"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaShieldAlt className="text-3xl text-[#FFD700]" />
              <div>
                <h3 className="text-xl font-bold text-[#23246D]">Quality Assurance</h3>
                <p className="text-[#FFA500]">Quality Experts</p>
              </div>
            </div>
            <p className="text-[#23246D]">Our QA team ensures the highest standards of quality and compliance throughout the project.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Tools & Technology Section */}
      <motion.section
        className="py-20 px-4 bg-[#23246D]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[5]}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#009FE3] to-[#00AEEF] bg-clip-text text-transparent mb-4">Our Tools & Technology</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#E0E7FF] text-lg max-w-3xl mx-auto">State-of-the-art tools for efficient project management</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={staggerContainer}>
          {['Jira', 'Confluence', 'Microsoft Project', 'Slack'].map((tool, index) => (
            <motion.div
              key={tool}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
              className="bg-gradient-to-br from-[#009FE3] to-[#00AEEF] rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFA500]"
            >
              <div className="text-xl font-bold text-[#23246D] mb-2">{tool}</div>
              <p className="text-white/90">Enterprise-grade project management tools</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-br from-[#23246D] to-[#009FE3]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[6]}
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mb-4">Client Success Stories</motion.h2>
          <motion.p variants={fadeInUp} className="text-[#E0E7FF] text-lg max-w-3xl mx-auto">What our clients say about working with us</motion.p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
          {[
            {
              quote: "NexVerse delivered our project on time and within budget. Their project management expertise was invaluable.",
              author: "John Smith",
              role: "CTO, TechCorp"
            },
            {
              quote: "The team's attention to detail and communication throughout the project was exceptional.",
              author: "Sarah Johnson",
              role: "Project Director, Innovate Inc"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(0,174,239,0.12)' }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#FFA500]"
            >
              <p className="text-[#23246D] text-lg mb-4">"{testimonial.quote}"</p>
              <div>
                <div className="font-bold text-[#009FE3]">{testimonial.author}</div>
                <div className="text-[#00AEEF]">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-[#009FE3] to-[#00AEEF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        ref={sectionRefs[7]}
      >
        <motion.div variants={fadeIn} className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</motion.h2>
          <motion.p variants={fadeInUp} className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">Let's discuss how we can help you achieve your project goals</motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openContactModal()}
            className="bg-gradient-to-r from-[#FFA500] to-[#FFD700] text-[#23246D] font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ProjectManagement; 