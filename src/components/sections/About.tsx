import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            <p className="text-gray-700 text-lg mb-6">
              NexVerse Consulting Group comprises of a team of highly skilled professionals who are dedicated to providing effective Consulting Solutions for Small and Medium-sized Enterprises, as well as Corporate Organizations in the region. The team at NexVerse has many years of combined experience in assisting organizations realize operational efficiency and competitive advantage.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              At NexVerse, we endavour to create long-term partnerships with organizations, with clear value propositions in offering solutions that enable organizations achieve long-term strategic objectives. We specialize in business and technology strategy consulting, and business transformational solutions for all industries. We incorporate organizational coaching and corporate trainings to ensure continuous business efficiency in all organizational levels. We deliver the highest quality services for today, and for tomorrow.
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0e254a] mb-2">Our Vision</h3>
              <p className="text-gray-700 text-base">To be the leading partner for consulting services that continuously transform organizations to improve efficiency while enriching people's lives and aspirations.</p>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0e254a] mb-2">Our Mission</h3>
              <p className="text-gray-700 text-base">Committed to forming lasting partnerships with organizations that will continuously add value in the ever-dynamic business environment.</p>
            </div>
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
            <div className="flex justify-center mb-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 