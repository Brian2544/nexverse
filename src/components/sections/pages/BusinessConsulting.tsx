import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useVanta from '../../../components/common/useVanta';
import AboutSection from '../AboutSection';

const BusinessConsulting: React.FC = () => {
  // Hero Section Vanta background
  const heroRef = useRef(null);
  useVanta(heroRef, 'HALO', { color: 0x009FE3, amplitudeFactor: 2.6, size: 1.4 });

  // Social Proof Section Vanta background
  const socialProofRef = useRef(null);
  useVanta(socialProofRef, 'WAVES', { color: 0x009FE3, shininess: 59 });

  // Pain Point Section Vanta background
  const painPointRef = useRef(null);
  useVanta(painPointRef, 'FOG', { highlightColor: 0x009FE3, midtoneColor: 0x625fd1, lowlightColor: 0x120951 });

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-[60vh] text-white overflow-hidden">
        <div className="z-10 max-w-xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Business Growth with Expert Consulting
          </motion.h1>
          <ul className="mb-6 space-y-2 text-lg">
            <li>• Tailored strategies for your unique challenges</li>
            <li>• Proven frameworks for operational excellence</li>
            <li>• Change management & organizational development</li>
          </ul>
          <button className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">Get a Free Consultation</button>
        </div>
        <div className="z-10 mt-10 md:mt-0 md:ml-10 w-full max-w-md">
          <form className="bg-white/90 rounded-xl p-6 shadow-lg flex flex-col gap-4 text-gray-800">
            <h2 className="text-xl font-bold mb-2">Request a Callback</h2>
            <input className="p-2 rounded border" type="text" placeholder="Your Name" aria-label="Your Name" required />
            <input className="p-2 rounded border" type="email" placeholder="Your Email" aria-label="Your Email" required />
            <input className="p-2 rounded border" type="tel" placeholder="Phone Number" aria-label="Phone Number" />
            <button type="submit" className="bg-[#009FE3] text-white rounded py-2 font-semibold hover:bg-[#007bbd] transition">Submit</button>
          </form>
        </div>
        <img src="/assets/images/business_application1.png" alt="Business Consulting" className="absolute opacity-10 right-0 bottom-0 w-2/3 max-w-lg pointer-events-none select-none" loading="lazy" />
      </section>
      <AboutSection
        badgeText="ABOUT CONSULTING"
        title="Consulting That Drives Real Business Growth"
        subtitle="Our expert consultants partner with you to unlock new opportunities, streamline operations, and deliver measurable results. We blend industry experience with innovative thinking to help you achieve your goals."
        image="/assets/images/business_application1.png"
        imageAlt="Consulting Team"
        storyTitle="Our Approach"
        story="Founded by business leaders and strategists, NexVerse Consulting was created to help organizations overcome their toughest challenges. We believe in transparency, collaboration, and delivering value at every step."
        highlights={[{ color: 'bg-green-500', text: 'Results-driven & client-focused' }, { color: 'bg-blue-400', text: 'Tailored strategies for every client' }, { color: 'bg-indigo-400', text: 'Change management experts' }]}
        ctaText="Meet Our Consultants"
        ctaHref="#team"
        ctaSubText={<>Want to join us? <a href="#careers" className="text-blue-300 underline hover:text-blue-400">We&apos;re hiring</a></>}
      />

      {/* Social Proof Section */}
      <section ref={socialProofRef} className="py-16 px-4 bg-white/80">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-bold text-center text-[#009FE3] mb-8">Trusted by Leading Organizations</motion.h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <img src="/assets/images/what_our_clients_say.jpg" alt="Client Testimonials" className="w-40 h-20 object-contain rounded shadow" loading="lazy" />
          <img src="/assets/images/office.jpg" alt="Office" className="w-40 h-20 object-contain rounded shadow" loading="lazy" />
        </div>
        <div className="max-w-2xl mx-auto text-center text-lg text-gray-700">“NexVerse helped us streamline our operations and achieve measurable growth. Their expertise in business consulting is unmatched.”</div>
      </section>

      {/* Pain Point & Unique Benefit Section */}
      <section ref={painPointRef} className="py-16 px-4 flex flex-col md:flex-row items-center gap-10 bg-white/90">
        <div className="flex-1">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl font-bold mb-4 text-[#009FE3]">Is Your Business Stuck in the Old Way?</motion.h3>
          <p className="text-gray-700 mb-4">Many organizations struggle with outdated processes, unclear strategies, and resistance to change. At NexVerse, we bring a fresh perspective and proven methodologies to help you break through barriers and achieve sustainable growth.</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Process improvement for efficiency</li>
            <li>Change management for smooth transitions</li>
            <li>Organizational development for long-term success</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="/assets/images/business_application2.png" alt="Business Consulting Process" className="rounded-xl shadow-lg w-full max-w-xs" loading="lazy" />
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white">
        <div className="flex flex-col justify-center">
          <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-xl font-bold mb-2 text-[#009FE3]">Tailored Solutions</motion.h4>
          <p className="text-gray-700 mb-4">We don't believe in one-size-fits-all. Our consultants work closely with you to understand your unique challenges and craft strategies that deliver real results.</p>
          <button className="bg-[#009FE3] text-white rounded py-2 px-6 font-semibold hover:bg-[#007bbd] transition w-max">Start Your Transformation</button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/assets/images/business_application1.png" alt="Tailored Solutions" className="rounded-xl shadow-lg w-full max-w-xs" loading="lazy" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Book Your Free Consultation</button>
        </motion.div>
      </section>
    </div>
  );
};

export default BusinessConsulting; 