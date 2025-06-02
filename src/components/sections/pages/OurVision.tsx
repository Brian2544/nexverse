import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const flowData = [
  {
    title: 'Simple Booking',
    image: '/assets/images/office.jpg',
    alt: 'Simple Booking',
    short: `At the heart of our consultancy agency lies a bold and ambitious vision: to be the leading partner for consulting services. We are committed to offering exceptional solutions that not only solve today's challenges but also position organizations for long-term success. Through a personalized, client-focused approach, we guide institutions across industries toward measurable improvements.`,
    full: `At the heart of our consultancy agency lies a bold and ambitious vision: to be the leading partner for consulting services. We are committed to offering exceptional solutions that not only solve today's challenges but also position organizations for long-term success. Through a personalized, client-focused approach, we guide institutions across industries toward measurable improvements. Our team believes that transformative consulting is not just about processes—it's about empowering people. With every strategy we implement, we aim to unlock the potential of individuals and teams. By doing so, we bring our clients closer to their goals while cultivating a culture of continuous improvement.`
  },
  {
    title: 'Tailored Strategy',
    image: '/assets/images/strategy.jpg',
    alt: 'Tailored Strategy',
    short: `We envision a future where businesses thrive through innovation, collaboration, and resilience—fueled by expert consulting support. Our mission is to drive efficiency within organizations, ensuring that every resource is optimized and every process refined. Whether it's through digital transformation, operational audits, or leadership training, our services are designed to create meaningful impact.`,
    full: `We envision a future where businesses thrive through innovation, collaboration, and resilience—fueled by expert consulting support. Our mission is to drive efficiency within organizations, ensuring that every resource is optimized and every process refined. Whether it's through digital transformation, operational audits, or leadership training, our services are designed to create meaningful impact. We work side by side with decision-makers, offering insights backed by data and industry expertise. Each project we take on is a step toward our greater goal of being the trusted catalyst for change. As we help organizations grow, we ensure their people grow with them.`
  },
  {
    title: 'Seamless Execution',
    image: '/assets/images/project_management.jpg',
    alt: 'Seamless Execution',
    short: `Transformation is at the core of everything we do. We believe that by challenging the status quo and embracing strategic change, companies can redefine what's possible. Our consulting practice focuses on enabling this transformation through carefully crafted solutions tailored to each client's unique context.`,
    full: `Transformation is at the core of everything we do. We believe that by challenging the status quo and embracing strategic change, companies can redefine what's possible. Our consulting practice focuses on enabling this transformation through carefully crafted solutions tailored to each client's unique context. We bring clarity to complexity and structure to chaos, helping businesses find direction and achieve sustainable success. Beyond business performance, our vision extends to enriching the lives and aspirations of people within those organizations. We measure our success not just by results, but by the positive, lasting change we leave behind.`
  },
  {
    title: 'Continuous Support',
    image: '/assets/images/support.jpg',
    alt: 'Continuous Support',
    short: `To become the leading partner in consulting, we continuously invest in innovation, professional development, and client relationships. Our consultants are equipped with cutting-edge tools and frameworks that enable them to respond to dynamic business environments. Each engagement is approached with integrity, empathy, and a relentless drive for excellence.`,
    full: `To become the leading partner in consulting, we continuously invest in innovation, professional development, and client relationships. Our consultants are equipped with cutting-edge tools and frameworks that enable them to respond to dynamic business environments. Each engagement is approached with integrity, empathy, and a relentless drive for excellence. We believe that a well-supported team can spark transformative ideas, and that organizations flourish when their people are empowered. That's why we prioritize not only business metrics but also individual growth, employee well-being, and organizational culture. This human-centered philosophy is what sets us apart in the consulting landscape.`
  }
];

const brandColors = ['#2B2A7F', '#F9B233', '#009FE3']; // deep blue, orange, light blue

function splitToBullets(text: string): string[] {
  // Split by period, question mark, or exclamation mark followed by space or end of string
  return text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map(s => s.trim()).filter(Boolean) || [text];
}

// Add ModalProps type
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal = ({ open, onClose, title, content }: ModalProps) => {
  if (!open) return null;
  const bullets = splitToBullets(content);
  // Close modal on outside click
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

// Carousel images for About NexVerse
const aboutImages = [
  {
    src: '/assets/images/strategy.jpg',
    alt: 'Strategy Meeting',
  },
  {
    src: '/assets/images/office.jpg',
    alt: 'Office Boardroom',
  },
  {
    src: '/assets/images/project_management.jpg',
    alt: 'Project Management',
  },
];

interface OurVisionProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const OurVision: React.FC<OurVisionProps> = ({ openContactModal }) => {
  const [modal, setModal] = useState({ open: false, title: '', content: '' });
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <OptimizedImage
          src="/assets/images/our_vision1.jpg"
          alt="Vision Hero"
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
                Our Vision
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                To be the leading partner for consulting services that continuously transform organizations to improve efficiency while enriching people's lives and aspirations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <div className="relative flex flex-col gap-10 md:gap-16">
            {flowData.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row${idx % 2 === 1 ? '-reverse' : ''} items-stretch bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100`}
              >
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-2/5 flex items-center justify-center bg-gray-50 ${idx % 2 === 0 ? 'rounded-tl-2xl rounded-br-2xl' : 'rounded-tr-2xl rounded-bl-2xl'} overflow-hidden`}
                  style={{ minHeight: undefined, maxHeight: undefined, ...(window.innerWidth >= 768 ? { minHeight: '200px', maxHeight: '320px' } : {}) }}
                >
                  <OptimizedImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 rounded-[inherit]"
                    loading="lazy"
                    quality={85}
                  />
                </motion.div>
                <div className="w-full md:w-3/5 flex flex-col justify-center px-4 py-6 md:py-0 md:px-8" style={window.innerWidth >= 768 ? { minHeight: '200px' } : {}}>
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

export default OurVision; 