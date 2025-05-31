import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from '../AboutSection';

interface DigitalTransformationProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const LOGO_COLORS = {
  blue: '#009FE3',
  darkBlue: '#005fa3',
  yellow: '#FFA500',
  orange: '#FF6F61',
  white: '#fff',
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const painPoints = [
  {
    title: 'Legacy Systems',
    desc: 'Outdated technology slows growth and increases costs.',
    solution: 'We modernize your infrastructure for agility and innovation.',
    icon: (
      <svg className="w-8 h-8 text-[#009FE3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><circle cx="9" cy="7" r="4" /></svg>
    ),
  },
  {
    title: 'Siloed Data',
    desc: 'Disconnected systems make insights and collaboration difficult.',
    solution: 'We unify your data for real-time analytics and smarter decisions.',
    icon: (
      <svg className="w-8 h-8 text-[#FFA500]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" /></svg>
    ),
  },
  {
    title: 'Security Risks',
    desc: 'Cyber threats and compliance challenges put your business at risk.',
    solution: 'We implement enterprise-grade security and compliance.',
    icon: (
      <svg className="w-8 h-8 text-[#FF6F61]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3zm0 0c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3z" /></svg>
    ),
  },
  {
    title: 'Change Resistance',
    desc: 'Teams struggle to adapt to new tools and processes.',
    solution: 'We drive adoption with expert change management and training.',
    icon: (
      <svg className="w-8 h-8 text-[#005fa3]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16v-1a4 4 0 00-3-3.87M9 16v-1a4 4 0 013-3.87M12 12V8m0 0l-4 4m4-4l4 4" /></svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Jane M.',
    company: '',
    quote: 'NexVerse delivered a seamless digital transformation. Our efficiency soared and our clients noticed the difference immediately.',
    image: '/assets/images/hero_african_consulting.jpg',
  },
  {
    name: 'Samuel K.',
    company: '',
    quote: 'From legacy systems to cloud, NexVerse made the journey smooth and secure. Highly recommended!',
    image: '/assets/images/hero_african_team.jpg',
  },
  {
    name: 'Linda O.',
    company: '',
    quote: 'Their team understood our pain points and delivered real, measurable results. We are now truly digital-first.',
    image: '/assets/images/hero_african_business.jpg',
  },
];

const faqs = [
  {
    q: 'How long does digital transformation take?',
    a: 'Every business is unique, but our agile approach ensures you see value quickly—often in weeks, not months.'
  },
  {
    q: 'Is my data secure during the process?',
    a: 'Absolutely. We use enterprise-grade security and compliance at every step.'
  },
  {
    q: 'Will my team need training?',
    a: 'Yes, and we provide hands-on training and change management to ensure adoption and success.'
  },
  {
    q: 'What ROI can I expect?',
    a: 'Our clients typically see improved efficiency, reduced costs, and new revenue streams within the first year.'
  },
];

const solutionDetails: Record<string, string[]> = {
  'AI-Powered Analytics': [
    'Gain actionable insights from your data in real time.',
    'Make smarter, faster business decisions with predictive analytics.',
    'Visualize trends and opportunities with interactive dashboards.',
    'Empower every team with easy-to-understand reports.'
  ],
  'Seamless Integrations': [
    'Connect all your business tools and platforms effortlessly.',
    'Eliminate data silos and manual work with automated workflows.',
    'Ensure smooth data flow between departments and systems.',
    'Scale your operations without technical headaches.'
  ],
  'Enterprise Security': [
    'Protect your business with industry-leading encryption.',
    'Stay compliant with the latest regulations and standards.',
    'Detect and respond to threats before they impact your business.',
    'Safeguard sensitive data and build customer trust.'
  ],
  'Cloud Migration': [
    'Move your business to the cloud with zero disruption.',
    'Access your data and tools securely from anywhere, anytime.',
    'Reduce IT costs and increase flexibility.',
    'Benefit from automatic updates and world-class reliability.'
  ],
  'Change Management': [
    'Drive adoption of new tools and processes across your organization.',
    'Empower your team with hands-on training and support.',
    'Minimize resistance and maximize engagement.',
    'Ensure a smooth, positive transition for everyone.'
  ],
  'Continuous Support': [
    'Get 24/7 expert support for all your digital systems.',
    'Benefit from ongoing optimization and proactive monitoring.',
    'Resolve issues quickly before they impact your business.',
    'Focus on growth while we handle the technical details.'
  ],
};

const DigitalTransformation: React.FC<DigitalTransformationProps> = ({ openContactModal }) => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDetails, setModalDetails] = useState<string[]>([]);

  const openSolutionModal = (title: string) => {
    setModalTitle(title);
    setModalDetails(solutionDetails[title] || []);
    setModalOpen(true);
  };
  const closeSolutionModal = () => {
    setModalOpen(false);
    setModalTitle('');
    setModalDetails([]);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center px-6 py-24 min-h-[70vh] overflow-hidden bg-gradient-to-t from-[#1e293b] to-[#009FE3]">
        {/* Video background with slow zoom effect */}
        <motion.video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/images/digital_transformation1.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/hero_strategy.jpg"
          aria-label="Digital Transformation Hero Video Background"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 90, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true"></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
            <motion.div initial="hidden" animate="visible" variants={scaleIn} transition={{ duration: 0.7 }} className="inline-block px-3 py-1 bg-[#009FE3]/20 rounded-full text-[#009FE3] text-xs mb-4 font-semibold tracking-widest">DIGITAL TRANSFORMATION</motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Accelerate Your Digital Future
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 1.2 }} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Unlock growth, efficiency, and innovation with NexVerse—your partner for seamless, secure, and human-centered digital transformation.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 4px 32px #009FE3aa' }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:from-[#FFA500] hover:to-[#009FE3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFA500]/40"
              onClick={() => openContactModal()}
              aria-label="Start Your Transformation"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 1.1 }}
            >
              Start Your Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 2. PAIN POINTS & SOLUTIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#009FE3] mb-8 text-center">
            Solving Your Biggest Digital Challenges
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {painPoints.map((p, i) => (
              <motion.div
                key={p.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px #009FE3aa' }}
                className="bg-[#f6fafd] border border-[#eaf6fb] rounded-xl p-6 text-center shadow hover:shadow-lg transition-all"
              >
                <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 + i * 0.1 }} className="flex justify-center mb-4">{p.icon}</motion.div>
                <h3 className="text-lg font-bold text-[#181a2a] mb-2">{p.title}</h3>
                <p className="text-[#181a2a]/80 mb-2">{p.desc}</p>
                <div className="text-[#009FE3] font-semibold text-sm mb-2">How We Solve It</div>
                <p className="text-[#005fa3] text-sm">{p.solution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. OUR SOLUTIONS & SERVICES */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#009FE3]/10 via-[#f6fafd] to-[#FFA500]/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#181a2a] mb-8 text-center">
            Our Digital Transformation Solutions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'AI-Powered Analytics',
                desc: 'Gain real-time insights and make data-driven decisions with advanced analytics.',
                color: 'from-[#009FE3] to-[#005fa3]'
              },
              {
                title: 'Seamless Integrations',
                desc: 'Connect all your tools and platforms for a unified, efficient workflow.',
                color: 'from-[#FFA500] to-[#009FE3]'
              },
              {
                title: 'Enterprise Security',
                desc: 'Protect your business with end-to-end encryption and compliance.',
                color: 'from-[#FF6F61] to-[#FFA500]'
              },
              {
                title: 'Cloud Migration',
                desc: 'Move to the cloud with zero disruption and maximum agility.',
                color: 'from-[#009FE3] to-[#FFA500]'
              },
              {
                title: 'Change Management',
                desc: 'Drive adoption and empower your team with expert training and support.',
                color: 'from-[#005fa3] to-[#009FE3]'
              },
              {
                title: 'Continuous Support',
                desc: 'Ongoing optimization and 24/7 support for lasting results.',
                color: 'from-[#FFA500] to-[#FF6F61]'
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px #FFA500aa' }}
                className={`rounded-xl p-6 shadow-lg bg-gradient-to-br ${s.color} text-white flex flex-col items-start`}
              >
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-white/90 mb-4">{s.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.08, boxShadow: '0 4px 32px #009FE3aa' }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-auto bg-white text-[#009FE3] font-bold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
                  onClick={() => openSolutionModal(s.title)}
                  aria-label={`Learn more about ${s.title}`}
                  variants={scaleIn}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. NEW ABOUT/IMPACT SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#009FE3]/10 via-[#f6fafd] to-[#005fa3]/10 rounded-3xl max-w-5xl mx-auto my-12 shadow-xl border border-[#009FE3]/10">
        <motion.div className="max-w-3xl mx-auto text-center mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="inline-block px-4 py-1 bg-[#009FE3]/20 rounded-full text-[#009FE3] text-xs font-bold tracking-widest mb-4">IMPACT AT SCALE</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#181a2a] mb-4">Empowering Organizations to Lead in the Digital Age</h2>
          <p className="text-lg text-[#181a2a]/80 mb-6">At NexVerse, we don't just implement technology—we transform mindsets, processes, and outcomes. Our holistic approach ensures your business is future-ready, resilient, and positioned for sustainable growth.</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[{
            icon: <svg className="w-10 h-10 text-[#009FE3] mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: 'Business Resilience',
            desc: 'We future-proof your operations, ensuring you thrive in any market condition.',
            color: 'text-[#009FE3]'
          }, {
            icon: <svg className="w-10 h-10 text-[#FFA500] mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m-4-4v8" /></svg>,
            title: 'People-First Change',
            desc: 'We empower your teams with the skills, tools, and confidence to embrace change.',
            color: 'text-[#FFA500]'
          }, {
            icon: <svg className="w-10 h-10 text-[#005fa3] mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16v-1a4 4 0 00-3-3.87M9 16v-1a4 4 0 013-3.87M12 12V8m0 0l-4 4m4-4l4 4" /></svg>,
            title: 'Measurable Impact',
            desc: 'We deliver results you can see—higher efficiency, lower costs, and new revenue streams.',
            color: 'text-[#005fa3]'
          }].map((item, i) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px #009FE3aa' }}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
            >
              {item.icon}
              <h3 className={`font-bold text-lg mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-[#181a2a]/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. TESTIMONIALS / SUCCESS STORIES */}
      <section className="py-16 px-4 bg-[#f6fafd]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#009FE3] mb-8 text-center">
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.04, boxShadow: '0 8px 32px #009FE3aa' }}
                className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
              >
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-[#009FE3]/30"
                  loading="lazy"
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  transition={{ duration: 0.7 + i * 0.1 }}
                />
                <div className="text-lg font-bold text-[#181a2a] mb-1">{t.name}</div>
                <div className="text-sm text-[#009FE3] mb-2">{t.company}</div>
                <p className="text-[#181a2a]/80 italic">“{t.quote}”</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#009FE3] to-[#FFA500] flex flex-col items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Go Digital?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Book your free digital consultation and discover how NexVerse can accelerate your transformation journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 4px 32px #FFA500aa' }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            onClick={() => openContactModal()}
            aria-label="Book a Free Digital Consultation"
            variants={scaleIn}
          >
            Book a Free Digital Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* 7. FAQ / TRUST SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-[#009FE3] mb-8 text-center">
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} variants={scaleIn}>
                <motion.button
                  className="w-full text-left px-6 py-4 rounded-lg bg-[#f6fafd] border border-[#eaf6fb] font-semibold text-[#181a2a] focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 flex justify-between items-center"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  aria-expanded={faqOpen === i}
                  aria-controls={`faq-panel-${i}`}
                  whileHover={{ scale: 1.03, backgroundColor: '#eaf6fb' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{faq.q}</span>
                  <span className={`ml-4 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`}>▼</span>
                </motion.button>
                <motion.div
                  id={`faq-panel-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${faqOpen === i ? 'max-h-40 py-2 px-6' : 'max-h-0 py-0 px-6'}`}
                  aria-hidden={faqOpen !== i}
                  initial="hidden"
                  animate={faqOpen === i ? 'visible' : 'hidden'}
                  variants={fadeIn}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-[#005fa3] text-sm">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Details Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed left-1/2 top-1/2 z-[9999] w-[95vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="solution-modal-title"
          >
            <button
              onClick={closeSolutionModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-[#009FE3] transition-colors z-10"
              aria-label="Close modal"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h2 id="solution-modal-title" className="text-2xl font-bold text-[#009FE3] mb-2">{modalTitle}</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#181a2a] text-base mb-2">
              {modalDetails.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DigitalTransformation; 