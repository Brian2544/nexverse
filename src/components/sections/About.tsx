import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">About Us</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif leading-tight">
            NexVerse Consulting LTD
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-[#0e254a] text-8xl font-bold leading-none mr-2 float-left select-none dropcap-N"
                style={{
                  lineHeight: '0.8',
                  shapeOutside: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  float: 'left',
                  marginRight: '18px',
                  marginBottom: '8px',
                  display: 'inline-block',
                }}
              >
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  N
                </motion.span>
              </span>
              <span className="text-gray-700 text-lg text-justify leading-normal block">
                exVerse helps organizations unlock efficiency and growth through expert consulting for SMEs and corporates. Our team delivers practical, results-driven solutions for operational efficiency and competitive advantage. We are committed to building trusted relationships and delivering measurable value for every client.
              </span>
            </motion.div>

            <motion.div
              className="mb-8 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex flex-col items-center">
                <p
                  className="text-gray-700 text-lg text-center max-w-2xl leading-relaxed"
                >
                  We partner with clients<br />
                  to shape strategies and implement change,<br />
                  specializing in business transformation.<br />
                  We create long-term partnerships<br />
                  for lasting impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span
                className="text-[#0e254a] text-8xl font-bold leading-none mr-2 float-left select-none dropcap-W"
                style={{
                  lineHeight: '0.8',
                  shapeOutside: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  float: 'left',
                  marginRight: '18px',
                  marginBottom: '8px',
                  display: 'inline-block',
                }}
              >
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  W
                </motion.span>
              </span>
              <span className="text-gray-700 text-lg text-justify leading-normal block">
                e provide coaching and training to ensure business efficiency at all levels, helping organizations thrive today and adapt for tomorrow. We believe in empowering people and fostering a culture of continuous improvement.
              </span>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-[#0e254a] mb-2">Our Vision</h3>
              <p className="text-gray-700 text-base">To be the leading partner for consulting services that continuously transform organizations to improve efficiency while enriching people's lives and aspirations.</p>
            </motion.div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#0e254a] mb-2">Our Mission</h3>
              <p className="text-gray-700 text-base">Committed to forming lasting partnerships with organizations that will continuously add value in the ever-dynamic business environment.</p>
            </motion.div>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0e254a] mb-4">Our Values</h3>
              <ul className="space-y-4 text-gray-700 text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[#21b6e6] inline-block"></span>
                  <span><b>Respect:</b> We cultivate the highest level of dignity and respect for our customers and colleagues. We value every idea from anyone we collaborate with; respect is enshrined in our culture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[#ffb300] inline-block"></span>
                  <span><b>Innovation:</b> We embrace a culture of continuous improvement as we help our customers identify and leverage the best and most effective innovations for business efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[#0e254a] inline-block"></span>
                  <span><b>Integrity:</b> We conduct ourselves, and our business affairs, with utmost honesty and integrity, with high levels of ethical behavior.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[#279ac4] inline-block"></span>
                  <span><b>Collaboration:</b> We cultivate high levels of teamwork. We recognize the importance of constant collaboration in yielding optimal performance and business excellence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-3 h-3 rounded-full bg-[#ff5e00] inline-block"></span>
                  <span><b>Accountability:</b> We are highly committed to what we do. Our organizational success highly depends on our culture of accountability and commitment to deliver what we promise, without failure.</span>
                </li>
              </ul>
            </div>
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.img
                src="/assets/images/our_goal.png"
                alt="Our Goal - Target and Darts"
                className="h-84 w-auto"
                style={{ maxHeight: '336px' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 