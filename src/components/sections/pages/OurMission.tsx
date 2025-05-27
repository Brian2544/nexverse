import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const missionData = [
  {
    title: 'Enduring Partnerships',
    image: '/assets/images/our_mission1.jpg',
    alt: 'Partnership Meeting',
    short: `At Nexverse Consultancy Ltd, our mission is to foster enduring partnerships that provide real, lasting value in today's fast-changing business world. We understand that every organization has unique goals, which is why we tailor our consulting approach to match your specific needs.`,
    full: `At Nexverse Consultancy Ltd, our mission is to foster enduring partnerships that provide real, lasting value in today's fast-changing business world. We understand that every organization has unique goals, which is why we tailor our consulting approach to match your specific needs. Our team is dedicated to helping you navigate challenges and uncover opportunities for growth. We believe in working alongside you—not just advising from a distance—to ensure strategies are actionable and impactful. This hands-on partnership approach ensures deeper understanding, greater results, and long-term trust. We exist to empower your business to evolve confidently and intelligently.`
  },
  {
    title: 'Forward-Thinking Solutions',
    image: '/assets/images/our_mission2.jpg',
    alt: 'Strategic Planning',
    short: `We are committed to helping organizations thrive by continuously adding value through relevant, forward-thinking solutions. Our consultants bring a blend of industry expertise, analytical insight, and real-world experience to every engagement.`,
    full: `We are committed to helping organizations thrive by continuously adding value through relevant, forward-thinking solutions. Our consultants bring a blend of industry expertise, analytical insight, and real-world experience to every engagement. At Nexverse, we don't believe in one-size-fits-all answers—we craft customized strategies that reflect your company's mission and vision. In an unpredictable market, our goal is to provide clarity and stability while fueling innovation. We guide you in transforming your operations, enhancing efficiency, and unlocking new growth avenues. Your success defines the purpose of our work.`
  },
  {
    title: 'Strategic Partnership',
    image: '/assets/images/hero_strategy.jpg',
    alt: 'Strategy',
    short: `Our mission extends beyond providing expert advice—we aim to be a strategic partner invested in your long-term success. Through collaboration, we learn what drives your organization and align our solutions to your goals.`,
    full: `Our mission extends beyond providing expert advice—we aim to be a strategic partner invested in your long-term success. Through collaboration, we learn what drives your organization and align our solutions to your goals. With deep market awareness and an adaptive mindset, we help you stay competitive in a constantly shifting business environment. Each client relationship is built on transparency, accountability, and mutual respect. We go beyond surface-level fixes, working to create foundational improvements that endure. Every step we take is toward building a stronger, more resilient organization.`
  },
  {
    title: 'Catalysts for Change',
    image: '/assets/images/our_mission3.jpg',
    alt: 'Business Transformation',
    short: `At Nexverse, we see ourselves not just as consultants, but as catalysts for meaningful change within your organization. Our mission compels us to create environments where innovation, efficiency, and purpose thrive together.`,
    full: `At Nexverse, we see ourselves not just as consultants, but as catalysts for meaningful change within your organization. Our mission compels us to create environments where innovation, efficiency, and purpose thrive together. We help companies modernize, optimize, and transform with confidence and strategic direction. By forming strong partnerships, we ensure that the value we bring lasts well beyond the duration of our projects. Our support continues as your business evolves, reinforcing our commitment to lasting results. With Nexverse by your side, you gain more than a service—you gain a partner for sustainable success.`
  }
];

const brandColors = ['#2B2A7F', '#F9B233', '#009FE3']; // deep blue, orange, light blue

function splitToBullets(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map(s => s.trim()).filter(Boolean) || [text];
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal = ({ open, onClose, title, content }: ModalProps) => {
  if (!open) return null;
  const bullets = splitToBullets(content);
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-6 relative border-2 border-[#009FE3] max-h-[80vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-[#009FE3] focus:outline-none focus:ring-2 focus:ring-[#009FE3] rounded-full p-1"
          aria-label="Close modal"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h2 className="text-lg sm:text-xl font-bold text-[#009FE3] mb-3 text-center">{title}</h2>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <span
                className="mt-1 inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                style={{ background: brandColors[i % brandColors.length] }}
                aria-hidden
              ></span>
              <span className="text-gray-700 leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

interface OurMissionProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const OurMission: React.FC<OurMissionProps> = ({ openContactModal }) => {
  const [modal, setModal] = useState({ open: false, title: '', content: '' });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <OptimizedImage
          src="/assets/images/our_mission1.jpg"
          alt="Mission Hero"
          className="w-full h-full object-cover"
          loading="eager"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                To foster enduring partnerships that provide real, lasting value in today's fast-changing business world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Sections */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <div className="relative flex flex-col gap-10 md:gap-16">
            {missionData.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch gap-0 md:gap-0 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100`}
                style={{ minHeight: '200px', maxHeight: '320px' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.03, boxShadow: '0 4px 16px 0 rgba(43,42,127,0.12)' }}
                  className={`w-full md:w-2/5 flex items-center justify-center bg-gray-50 ${idx % 2 === 0 ? 'rounded-tl-2xl rounded-br-2xl' : 'rounded-tr-2xl rounded-bl-2xl'}`}
                  style={{ minHeight: '200px', maxHeight: '320px' }}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 rounded-[inherit]"
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
                <div className="w-full md:w-3/5 flex flex-col justify-center px-4 py-6 md:py-0 md:px-8" style={{ minHeight: '200px' }}>
                  <div className="flex items-center mb-1">
                    <span className="bg-[#009FE3] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 text-base shadow-md">{(idx+1).toString().padStart(2, '0')}</span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 font-medium">{item.short}</p>
                  <button
                    onClick={() => setModal({ open: true, title: item.title, content: item.full })}
                    className="text-[#009FE3] font-semibold text-base flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-[#009FE3] rounded transition-colors"
                    aria-label={`Discover more about ${item.title}`}
                  >
                    Discover More <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal open={modal.open} onClose={() => setModal({ open: false, title: '', content: '' })} title={modal.title} content={modal.content} />
      </section>
    </div>
  );
};

export default OurMission; 