import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useVanta from '../../../components/common/useVanta';
import AboutSection from '../AboutSection';

const DataProtection: React.FC = () => {
  const heroRef = useRef(null);
  useVanta(heroRef, 'HALO', { color: 0x009FE3, amplitudeFactor: 2.6, size: 1.4 });
  const socialProofRef = useRef(null);
  useVanta(socialProofRef, 'WAVES', { color: 0x009FE3, shininess: 59 });
  const painPointRef = useRef(null);
  useVanta(painPointRef, 'FOG', { highlightColor: 0x009FE3, midtoneColor: 0x625fd1, lowlightColor: 0x120951 });

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-[60vh] text-white overflow-hidden">
        <div className="z-10 max-w-xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-4">
            Data Protection & Compliance
          </motion.h1>
          <ul className="mb-6 space-y-2 text-lg">
            <li>• Safeguard sensitive information</li>
            <li>• Ensure regulatory compliance</li>
            <li>• Policies, controls, and training</li>
          </ul>
          <button className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">Get a Compliance Assessment</button>
        </div>
        <div className="z-10 mt-10 md:mt-0 md:ml-10 w-full max-w-md">
          <form className="bg-white/90 rounded-xl p-6 shadow-lg flex flex-col gap-4 text-gray-800">
            <h2 className="text-xl font-bold mb-2">Request a Consultation</h2>
            <input className="p-2 rounded border" type="text" placeholder="Your Name" aria-label="Your Name" required />
            <input className="p-2 rounded border" type="email" placeholder="Your Email" aria-label="Your Email" required />
            <input className="p-2 rounded border" type="tel" placeholder="Phone Number" aria-label="Phone Number" />
            <button type="submit" className="bg-[#009FE3] text-white rounded py-2 font-semibold hover:bg-[#007bbd] transition">Submit</button>
          </form>
        </div>
        <img src="/assets/images/office.jpg" alt="Data Protection" className="absolute opacity-10 right-0 bottom-0 w-2/3 max-w-lg pointer-events-none select-none" loading="lazy" />
      </section>
      <AboutSection
        badgeText="ABOUT DATA PROTECTION"
        title="Protecting Your Data, Empowering Your Business"
        subtitle="We help organizations safeguard sensitive information, ensure compliance, and build a culture of security. Our team brings deep expertise in risk management, policy development, and employee training."
        image="/assets/images/office.jpg"
        imageAlt="Data Protection Team"
        storyTitle="Our Mission"
        story="NexVerse was founded to address the growing need for robust data protection in a digital world. We are committed to helping clients stay ahead of threats and regulations, with a focus on practical, sustainable solutions."
        highlights={[{ color: 'bg-green-500', text: 'Compliance & risk experts' }, { color: 'bg-blue-400', text: 'Continuous monitoring & support' }, { color: 'bg-indigo-400', text: 'Employee training & awareness' }]}
        ctaText="Learn About Our Approach"
        ctaHref="#approach"
        ctaSubText={<>Want to join us? <a href="#careers" className="text-blue-300 underline hover:text-blue-400">We&apos;re hiring</a></>}
      />

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Protect Your Data Today</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Request a Compliance Review</button>
        </motion.div>
      </section>
  </div>
);
};

export default DataProtection; 