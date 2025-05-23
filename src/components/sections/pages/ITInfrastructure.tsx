import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../AboutSection';

const ITInfrastructure: React.FC = () => {
  const oceanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ocean wave animation from provided HTML sample
    const ocean = oceanRef.current;
    if (!ocean) return;
    ocean.innerHTML = '';
    const waveWidth = 10;
    const waveCount = Math.floor(ocean.offsetWidth / waveWidth);
    const docFrag = document.createDocumentFragment();
    for (let i = 0; i < waveCount; i++) {
      const wave = document.createElement('div');
      wave.className = 'wave';
      wave.style.left = i * waveWidth + 'px';
      wave.style.animationDelay = (i / 100) + 's';
      docFrag.appendChild(wave);
    }
    ocean.appendChild(docFrag);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-blue-50">
      {/* Hero Section with Ocean Animation */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-[60vh] overflow-hidden rounded-b-3xl shadow-xl bg-gradient-to-t from-blue-900 to-blue-400">
        <div ref={oceanRef} id="ocean" className="absolute inset-0"></div>
        <div className="relative z-10 max-w-xl">
          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs mb-4">IT INFRASTRUCTURE</div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Build a Robust, Scalable IT Foundation
          </motion.h1>
          <p className="text-white/90 text-lg mb-6">Empower your business with secure, high-performance IT infrastructure designed for growth, reliability, and innovation.</p>
          <button className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition text-white">Get a Free IT Assessment</button>
        </div>
        <div className="relative z-10 mt-10 md:mt-0 md:ml-10 w-full max-w-md">
          <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-light text-white">99.99%</div>
              <div className="text-xs text-white/80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-white">24/7</div>
              <div className="text-xs text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-white">1000+</div>
              <div className="text-xs text-white/80">Devices Managed</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-white">15+</div>
              <div className="text-xs text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
        <style>{`
          #ocean {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to top, #1e3a8a, #3b82f6);
            overflow: hidden;
          }
          .wave {
            background: #bfdbfe;
            display: inline-block;
            height: 60%;
            width: 10px;
            position: absolute;
            animation-name: dostuff;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            transition-timing-function: ease-in-out;
          }
          @keyframes dostuff {
            0% { height: 60%; }
            50% { height: 40%; }
            100% { height: 60%; }
          }
        `}</style>
      </section>
      <AboutSection
        badgeText="ABOUT IT INFRASTRUCTURE"
        title="Building the Backbone of Modern Business"
        subtitle="Our IT infrastructure experts design, implement, and support secure, scalable systems that power your growth. We focus on reliability, performance, and future-proofing your technology."
        image="/assets/images/it_infrastructure.jpg"
        imageAlt="IT Infrastructure Team"
        storyTitle="Our Commitment"
        story="NexVerse IT Infrastructure was created to help organizations navigate the complexities of modern technology. We are dedicated to delivering solutions that are robust, secure, and tailored to your needs."
        highlights={[{ color: 'bg-green-500', text: 'Cloud & hybrid solutions' }, { color: 'bg-blue-400', text: 'Proactive support' }, { color: 'bg-indigo-400', text: 'Enterprise-grade security' }]}
        ctaText="Explore Our IT Services"
        ctaHref="#services"
        ctaSubText={<>Want to join us? <a href="#careers" className="text-blue-300 underline hover:text-blue-400">We&apos;re hiring</a></>}
      />

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Upgrade Your IT?</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Book a Free IT Consultation</button>
        </motion.div>
      </section>
    </div>
  );
};

export default ITInfrastructure; 