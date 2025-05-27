import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from '../../modals/ContactModal';

const LOGO_COLORS = {
  blue: '#009FE3',
  darkBlue: '#005fa3',
  orange: '#FF694B',
  purple: '#625fd1',
  dark: '#181a2a',
  white: '#fff',
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface BusinessApplicationsProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const BusinessApplications: React.FC<BusinessApplicationsProps> = ({ openContactModal }) => {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState<'navbar' | 'process'>('process');

  // Open modal handler
  const openModal = (source: 'navbar' | 'process' = 'process') => {
    setModalSource(source);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  // 1. HERO SECTION
  // 2. WHY NEXVERSE (TRUST)
  // 3. OUR CONSULTING APPROACH
  // 4. SERVICES GRID
  // 5. CLIENT SUCCESS/TESTIMONIALS
  // 6. INDUSTRY EXPERTISE & TECH
  // 7. FINAL CTA

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 min-h-[70vh] overflow-hidden bg-white">
        {/* Hero background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/images/business_application_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Business Application Hero Video Background"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#fff] leading-tight">
                <span className="bg-gradient-to-r from-[#009FE3] via-[#FF694B] to-[#009FE3] bg-clip-text text-transparent">Business Application Consulting</span>
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Transform your business with custom applications, expert strategy, and world-class consultancy. Nexverse delivers innovation, security, and measurable results—every time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="glow-button bg-[#009FE3] hover:bg-[#005fa3] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF694B]/40"
                onClick={() => openModal('process')}
                aria-label="Start Free Consultation"
              >
                Start Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                onClick={() => openModal('process')}
                aria-label="Book a Demo"
              >
                Book a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY NEXVERSE (TRUST) */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-[#f6fafd] to-[#eaf6fb]">
        <div className="max-w-5xl mx-auto text-center">
          <img src="/assets/images/business_application1.jpg" alt="Trusted Business Consulting" className="mx-auto mb-8 rounded-xl shadow-lg w-full max-w-md object-cover" />
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#181a2a] mb-4">
            Why Top Businesses Trust Nexverse
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-[#181a2a]/80 mb-10 max-w-3xl mx-auto">
            We combine deep industry expertise, cutting-edge technology, and a relentless focus on measurable value. Our consultants are trusted by leading organizations to deliver secure, scalable, and future-ready business applications.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div whileHover={{ y: -8, boxShadow: '0 8px 32px #009FE3aa' }} className="bg-[#f6fafd] border border-[#eaf6fb] rounded-xl p-6 transition-all">
              <div className="w-12 h-12 bg-[#009FE3]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-[#009FE3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#181a2a] mb-2">Proven Results</h3>
              <p className="text-[#181a2a]/70">98% client retention. 100+ successful digital transformations. Tangible ROI, every project.</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, boxShadow: '0 8px 32px #FF694Baa' }} className="bg-[#f6fafd] border border-[#eaf6fb] rounded-xl p-6 transition-all">
              <div className="w-12 h-12 bg-[#FF694B]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-[#FF694B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#181a2a] mb-2">Unmatched Security</h3>
              <p className="text-[#181a2a]/70">Enterprise-grade security, compliance, and data privacy. Your business, protected.</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, boxShadow: '0 8px 32px #625fd1aa' }} className="bg-[#f6fafd] border border-[#eaf6fb] rounded-xl p-6 transition-all">
              <div className="w-12 h-12 bg-[#625fd1]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-[#625fd1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#181a2a] mb-2">Trusted Experts</h3>
              <p className="text-[#181a2a]/70">Certified consultants, global experience, and a passion for your success.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR CONSULTING APPROACH */}
      <section className="py-16 px-4 bg-[#f6fafd]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#181a2a] mb-4">Our Proven Consulting Approach</h2>
            <ul className="space-y-4 text-[#181a2a]/80 text-lg">
              <li><span className="font-bold text-[#009FE3]">1. Discovery & Strategy:</span> We listen, analyze, and co-create a roadmap tailored to your business goals.</li>
              <li><span className="font-bold text-[#FF694B]">2. Agile Implementation:</span> Rapid prototyping, iterative delivery, and continuous feedback for maximum impact.</li>
              <li><span className="font-bold text-[#625fd1]">3. Value Realization:</span> We measure, optimize, and ensure you see real, lasting results.</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-gradient-to-r from-[#009FE3] to-[#FF694B] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:from-[#FF694B] hover:to-[#009FE3] transition-colors"
              onClick={() => openModal('process')}
              aria-label="Talk to a Consultant"
            >
              Talk to a Consultant
            </motion.button>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2, duration: 0.7 }} className="order-1 md:order-2 flex justify-center">
            <img src="/images/transformations/techcorp.jpg" alt="Consulting Approach - Tech Transformation" className="h-64 w-auto rounded-xl shadow-xl border-4 border-[#009FE3]/30 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="py-16 px-4 bg-[#f6fafd]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#181a2a] mb-8 text-center">
            Our Business Application Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Application Development',
                desc: 'Tailored web, mobile, and cloud solutions for your unique business needs.',
                img: '/assets/images/business_application.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#009FE3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" /></svg>
                ),
              },
              {
                title: 'Business Process Automation',
                desc: 'Streamline workflows, reduce costs, and boost productivity with intelligent automation.',
                img: '/assets/images/business_application7.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#FF694B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" /></svg>
                ),
              },
              {
                title: 'Data Analytics & Insights',
                desc: 'Unlock actionable insights with real-time analytics, dashboards, and reporting.',
                img: '/assets/images/business_application5.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#625fd1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                ),
              },
              {
                title: 'Cloud Migration & Integration',
                desc: 'Seamlessly move to the cloud and integrate with your existing systems for agility.',
                img: '/assets/images/business_application10.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#009FE3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16v-1a4 4 0 00-3-3.87M9 16v-1a4 4 0 013-3.87M12 12V8m0 0l-4 4m4-4l4 4" /></svg>
                ),
              },
              {
                title: 'Cybersecurity & Compliance',
                desc: 'Protect your data and ensure compliance with the latest security standards.',
                img: '/assets/images/business_application8.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#FF694B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3z" /></svg>
                ),
              },
              {
                title: 'Legacy Modernization',
                desc: 'Upgrade outdated systems to modern, scalable, and secure platforms.',
                img: '/assets/images/business_application9.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#625fd1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" /></svg>
                ),
              },
              {
                title: 'Ongoing Support & Optimization',
                desc: 'Continuous improvement, monitoring, and support for your business applications.',
                img: '/assets/images/headphones.jpg',
                icon: (
                  <svg className="h-7 w-7 text-[#009FE3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                ),
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8, boxShadow: `0 8px 32px ${i % 2 === 0 ? LOGO_COLORS.blue : LOGO_COLORS.orange}22` }}
                className="bg-[#f6fafd] border border-[#eaf6fb] rounded-xl p-6 transition-all flex flex-col items-center text-center"
              >
                <img src={service.img} alt={service.title + ' illustration'} className="w-full h-32 object-cover rounded-lg mb-4" />
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-[#009FE3]/20 via-[#FF694B]/10 to-[#625fd1]/20">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#181a2a] mb-2">{service.title}</h3>
                <p className="text-[#181a2a]/70 text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT SUCCESS/TESTIMONIALS */}
      <section className="py-16 px-4 bg-[#f6fafd]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#181a2a] mb-8">
            Client Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'Nexverse delivered a custom analytics platform that transformed our decision-making. Their expertise and dedication are unmatched.',
                name: 'Sarah M.',
                company: 'COO, FinTech Leader',
                img: '/images/testimonials/sarah.jpg'
              },
              {
                quote: 'We trusted Nexverse with our cloud migration. The process was seamless, secure, and exceeded our expectations.',
                name: 'James K.',
                company: 'CTO, Retail Group',
                img: '/images/testimonials/michael.jpg'
              },
              {
                quote: 'Their consultants are true partners—responsive, innovative, and always focused on our business goals.',
                name: 'Priya S.',
                company: 'Head of IT, Healthcare',
                img: '/images/testimonials/emma.jpg'
              },
              {
                quote: 'From legacy modernization to ongoing support, Nexverse is the best consultancy we have worked with.',
                name: 'David L.',
                company: 'CIO, Manufacturing',
                img: '/images/impact/profile.jpg'
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="bg-white border border-[#eaf6fb] rounded-xl p-6 mb-2 text-left shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.img} alt={t.name + ' testimonial'} className="w-14 h-14 rounded-full object-cover border-2 border-[#009FE3]/30" />
                  <div>
                    <div className="text-[#181a2a] font-semibold text-base">{t.name}</div>
                    <div className="text-[#6b7280] text-xs">{t.company}</div>
                  </div>
                </div>
                <p className="text-[#181a2a] text-lg mb-2 italic">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY EXPERTISE & TECH */}
      <section className="py-16 px-4 bg-[#f6fafd]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#181a2a] mb-4">Industry Expertise & Modern Technology</h2>
            <ul className="space-y-3 text-[#181a2a]/80 text-lg mb-6">
              <li><span className="font-bold text-[#009FE3]">• Multi-sector Experience:</span> <span className="text-[#181a2a]/80">Finance, Healthcare, Retail, Manufacturing, and more.</span></li>
              <li><span className="font-bold text-[#FF694B]">• AI & Data-Driven:</span> <span className="text-[#181a2a]/80">We leverage AI, analytics, and automation for smarter solutions.</span></li>
              <li><span className="font-bold text-[#625fd1]">• Secure & Compliant:</span> <span className="text-[#181a2a]/80">We meet the highest standards in security and regulatory compliance.</span></li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#009FE3] to-[#FF694B] text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:from-[#FF694B] hover:to-[#009FE3] transition-colors"
              onClick={() => openModal('process')}
              aria-label="Get Industry Insights"
            >
              Get Industry Insights
            </motion.button>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-wrap gap-4 justify-center md:justify-end">
            {[
              { src: '/images/industries/finance.jpg', alt: 'Finance' },
              { src: '/images/industries/healthcare.jpg', alt: 'Healthcare' },
              { src: '/images/industries/manufacturing.jpg', alt: 'Manufacturing' },
              { src: '/images/industries/tech.jpg', alt: 'Tech' },
            ].map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className="h-16 w-16 rounded-lg shadow border-2 border-[#009FE3]/30 bg-white/10 object-cover" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#eaf6fb] to-[#f6fafd] flex flex-col items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#181a2a] mb-4">Ready to Transform Your Business?</h2>
          <p className="text-[#181a2a]/90 mb-6 max-w-xl mx-auto">
            Book your free consultation or demo with Nexverse's top consultants. Let's build your future together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#009FE3] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#005fa3] transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            onClick={() => openModal('process')}
            aria-label="Book My Free Consultation"
          >
            Book My Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <ContactModal isOpen={modalOpen} onClose={closeModal} source={modalSource} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessApplications; 