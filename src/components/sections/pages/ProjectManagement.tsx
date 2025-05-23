import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useVanta from '../../../components/common/useVanta';
import { FaClipboardList, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';
import AboutSection from '../AboutSection';

const ProjectManagement: React.FC = () => {
  const heroRef = useRef(null);
  const haloRef = useRef(null);
  // Layer both WAVES and HALO for a 3D animated effect
  useVanta(heroRef, 'WAVES', { color: 0x009FE3, shininess: 59 });
  useVanta(haloRef, 'HALO', { color: 0x009FE3, amplitudeFactor: 2.6, size: 1.4 });

  const steps = [
    {
      icon: <FaClipboardList className="text-3xl text-[#009FE3]" />, title: 'Discovery & Planning',
      desc: 'We begin by understanding your project goals, requirements, and constraints. Our planning ensures a roadmap for success.'
    },
    {
      icon: <FaDraftingCompass className="text-3xl text-[#009FE3]" />, title: 'Design & Prototyping',
      desc: 'Our team creates clear project designs and prototypes, gathering your feedback early to ensure alignment.'
    },
    {
      icon: <FaCode className="text-3xl text-[#009FE3]" />, title: 'Execution & Monitoring',
      desc: 'We execute with precision, using agile methods and continuous monitoring to keep your project on track.'
    },
    {
      icon: <FaRocket className="text-3xl text-[#009FE3]" />, title: 'Delivery & Launch',
      desc: 'We ensure a seamless launch, with post-delivery support and optimization for lasting impact.'
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#0f172a]">
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-[60vh] text-white overflow-hidden bg-gradient-to-t from-[#1e293b] to-[#009FE3] rounded-b-3xl shadow-xl">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/images/consultancy_hero2.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-0" />
        <div className="z-10 max-w-xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-4">
            Deliver Projects On Time, Every Time
          </motion.h1>
          <p className="text-white/90 text-lg mb-6">Expert planning, execution, and monitoring for project success. Partner with NexVerse for results-driven project management.</p>
          <button className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">Book a Project Consultation</button>
        </div>
      </section>
      <AboutSection
        badgeText="ABOUT PROJECT MANAGEMENT"
        title="Project Management for the Modern Enterprise"
        subtitle="Our certified project managers and industry specialists deliver projects on time, on budget, and beyond expectations. We combine proven methodologies with transparent communication and end-to-end support."
        image="/assets/images/project_management.jpg"
        imageAlt="Project Management Team"
        storyTitle="Our Philosophy"
        story="NexVerse Project Management was born from a passion for helping organizations achieve their goals through effective planning, execution, and optimization. We believe in proactive risk management and continuous improvement."
        highlights={[{ color: 'bg-green-500', text: 'Certified project managers' }, { color: 'bg-blue-400', text: 'Agile & hybrid methodologies' }, { color: 'bg-indigo-400', text: 'Transparent reporting' }]}
        ctaText="Meet Our PM Team"
        ctaHref="#team"
        ctaSubText={<>Want to join us? <a href="#careers" className="text-blue-300 underline hover:text-blue-400">We&apos;re hiring</a></>}
      />

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#18162a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-[#009FE3] mb-4">Why NexVerse for Project Management?</motion.h2>
            <ul className="space-y-4 text-white/80">
              <li><span className="font-bold text-[#009FE3]">• Proven Methodologies:</span> Agile, Waterfall, and hybrid approaches tailored to your needs.</li>
              <li><span className="font-bold text-[#009FE3]">• Transparent Reporting:</span> Real-time dashboards and clear communication at every stage.</li>
              <li><span className="font-bold text-[#009FE3]">• Risk Mitigation:</span> Proactive identification and management of project risks.</li>
              <li><span className="font-bold text-[#009FE3]">• End-to-End Support:</span> From kickoff to post-launch optimization.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232046] rounded-xl p-6 shadow flex items-center gap-4">
              <img src="/assets/images/project_management.jpg" alt="Project Management" className="w-20 h-20 object-cover rounded-lg" loading="lazy" />
              <div>
                <div className="font-bold text-[#009FE3]">Expert Teams</div>
                <div className="text-white/70 text-sm">Certified project managers and industry specialists.</div>
              </div>
            </div>
            <div className="bg-[#232046] rounded-xl p-6 shadow flex items-center gap-4">
              <img src="/assets/images/support.jpg" alt="Support" className="w-20 h-20 object-cover rounded-lg" loading="lazy" />
              <div>
                <div className="font-bold text-[#009FE3]">Continuous Support</div>
                <div className="text-white/70 text-sm">Ongoing optimization and support for lasting results.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Deliver Your Next Project?</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Book a Free Project Consultation</button>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectManagement; 