import React from 'react';
import { motion } from 'framer-motion';

const TechnologyConsulting: React.FC = () => (
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
        <source src="/assets/images/consulting_hero_video.mp4" type="video/mp4" />
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
              Technology Consulting
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Empower your business with cutting-edge technology solutions. Our technology consulting services guide you through digital transformation, IT optimization, and innovation adoption for long-term success.
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#009FE3] mb-6">Innovate, Optimize, Transform</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At NexVerse, we help organizations harness the power of technology to drive innovation, streamline operations, and achieve strategic goals. Our technology consulting services cover everything from IT strategy and digital transformation to cloud adoption, cybersecurity, and process automation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-8"
          >
            <h3 className="text-xl font-bold text-[#009FE3] mb-3">Digital Transformation</h3>
            <p className="text-gray-700 mb-4">We guide your business through every stage of digital transformation, from strategy to implementation, ensuring you stay ahead in a rapidly evolving digital landscape.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• IT Strategy & Roadmap</li>
              <li>• Cloud Migration & Adoption</li>
              <li>• Business Process Automation</li>
              <li>• Change Management</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-8"
          >
            <h3 className="text-xl font-bold text-[#009FE3] mb-3">IT Optimization</h3>
            <p className="text-gray-700 mb-4">Optimize your IT infrastructure and operations for maximum efficiency, security, and scalability. We help you leverage the latest technologies to reduce costs and improve performance.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Infrastructure Assessment</li>
              <li>• Cybersecurity Solutions</li>
              <li>• IT Service Management</li>
              <li>• Performance Monitoring</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#009FE3] mb-6">Why Choose NexVerse?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Our team of certified technology consultants brings deep expertise and a proven track record of delivering results. We partner with you to understand your unique challenges and craft solutions that drive real business value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#009fe30a] rounded-xl">
              <h3 className="text-xl font-bold text-[#009FE3] mb-2">Expert Guidance</h3>
              <p className="text-gray-700">Access to industry-leading technology experts</p>
            </div>
            <div className="p-6 bg-[#009fe30a] rounded-xl">
              <h3 className="text-xl font-bold text-[#009FE3] mb-2">End-to-End Support</h3>
              <p className="text-gray-700">From strategy to execution, we're with you every step</p>
            </div>
            <div className="p-6 bg-[#009fe30a] rounded-xl">
              <h3 className="text-xl font-bold text-[#009FE3] mb-2">Proven Results</h3>
              <p className="text-gray-700">Demonstrated success across diverse industries</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default TechnologyConsulting; 