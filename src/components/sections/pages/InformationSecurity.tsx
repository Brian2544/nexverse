import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageWithFallback from '../../common/ImageWithFallback';
import ContactModal from '../../modals/ContactModal';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  KeyIcon,
  DocumentCheckIcon,
  ShieldExclamationIcon,
  ServerIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  UserIcon,
  DocumentTextIcon,
  CloudArrowDownIcon,
  LinkIcon,
  CurrencyDollarIcon,
  MagnifyingGlassCircleIcon,
  EyeIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const infoImages = [
  '/assets/images/information_security1.jpg',
  '/assets/images/information_security2.jpg',
  '/assets/images/information_security3.jpg',
  '/assets/images/information_security4.jpg',
  '/assets/images/information_security5.jpg',
];

const brandGradient = 'bg-gradient-to-r from-[#009FE3] to-[#FFA500]';
const brandText = 'text-[#009FE3]';
const orangeText = 'text-[#FFA500]';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const sections = [
  // Section definitions for navigation/scrolling if needed
];

const painPoints = [
  {
    title: 'Rising Cyber Threats',
    desc: 'Malware, ransomware, phishing, and zero-day attacks are more frequent and sophisticated than ever.',
    icon: <ShieldExclamationIcon className="w-8 h-8 text-[#009FE3]" aria-hidden="true" />,
  },
  {
    title: 'Human Error',
    desc: 'Over 80% of breaches are caused by simple mistakes—weak passwords, phishing, or misconfigurations.',
    icon: <UserIcon className="w-8 h-8 text-[#FFA500]" aria-hidden="true" />,
  },
  {
    title: 'Compliance Complexity',
    desc: 'GDPR, HIPAA, PCI DSS, ISO 27001—regulations are tough to keep up with and mistakes are costly.',
    icon: <DocumentTextIcon className="w-8 h-8 text-[#009FE3]" aria-hidden="true" />,
  },
  {
    title: 'Downtime & Data Loss',
    desc: 'Attacks can cripple your operations, cause data loss, and damage your reputation.',
    icon: <CloudArrowDownIcon className="w-8 h-8 text-[#FFA500]" aria-hidden="true" />,
  },
  {
    title: 'Vendor & Supply Chain Risks',
    desc: 'Third-party software and partners can introduce vulnerabilities you don\'t even see coming.',
    icon: <LinkIcon className="w-8 h-8 text-[#009FE3]" aria-hidden="true" />,
  },
  {
    title: 'Resource Constraints',
    desc: 'Most businesses lack the expertise or budget for robust security—until now.',
    icon: <CurrencyDollarIcon className="w-8 h-8 text-[#FFA500]" aria-hidden="true" />,
  },
];

const solutions = [
  {
    title: 'Comprehensive Assessments',
    desc: 'We identify every vulnerability before attackers do, with deep scans and expert analysis.',
    icon: <MagnifyingGlassCircleIcon className="w-8 h-8 text-[#009FE3]" aria-hidden="true" />,
  },
  {
    title: '24/7 Threat Monitoring',
    desc: 'Our real-time intelligence and rapid response keep you protected around the clock.',
    icon: <EyeIcon className="w-8 h-8 text-[#FFA500]" aria-hidden="true" />,
  },
  {
    title: 'Layered Defense',
    desc: 'Firewalls, WAFs, endpoint protection, encryption, and secure coding—defense in depth.',
    icon: <ShieldCheckIcon className="w-8 h-8 text-[#009FE3]" aria-hidden="true" />,
  },
  {
    title: 'Employee Training',
    desc: 'We turn your team into your first line of defense with engaging, up-to-date training.',
    icon: <AcademicCapIcon className="w-8 h-8 text-[#FFA500]" aria-hidden="true" />,
  },
  {
    title: 'Compliance Management',
    desc: 'Automated tools and expert guidance to keep you audit-ready and penalty-free.',
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#009FE3]" aria-hidden="true" />,
  },
  {
    title: 'Incident Response',
    desc: 'If the worst happens, we contain, investigate, and recover—fast.',
    icon: <BoltIcon className="w-8 h-8 text-[#FFA500]" aria-hidden="true" />,
  },
];

const complianceBadges = [
  {
    name: 'ISO 27001',
    icon: '/images/compliance/iso27001.svg',
  },
  {
    name: 'SOC 2',
    icon: '/images/compliance/soc2.svg',
  },
  {
    name: 'GDPR',
    icon: '/images/compliance/gdpr.svg',
  },
  {
    name: 'HIPAA',
    icon: '/images/compliance/hipaa.svg',
  },
];

const testimonials = [
  {
    quote: 'Nexverse transformed our security posture. We sleep better at night knowing they have our back.',
    name: 'CIO, Fintech Company',
  },
  {
    quote: 'Their rapid response saved us from a ransomware disaster. True professionals.',
    name: 'IT Director, Healthcare Provider',
  },
  {
    quote: 'Compliance used to be a nightmare. Now it\'s a breeze with Nexverse.',
    name: 'COO, E-commerce Brand',
  },
];

const threatStats = [
  { label: 'Threats Blocked', value: '2.1M+' },
  { label: 'Avg. Response Time', value: '<10 min' },
  { label: 'Client Satisfaction', value: '99.7%' },
  { label: 'Compliance Audits Passed', value: '100%' },
];

const faqs = [
  {
    q: 'How quickly can you respond to a security incident?',
    a: 'Our team is on call 24/7 and can begin incident response within minutes of detection.',
  },
  {
    q: 'What industries do you serve?',
    a: 'We protect clients in finance, healthcare, e-commerce, government, and more.',
  },
  {
    q: 'Can you help with compliance?',
    a: 'Absolutely. We guide you through GDPR, HIPAA, PCI DSS, ISO 27001, and more.',
  },
];

const painPointSolutions = [
  {
    title: 'Rising Cyber Threats',
    steps: [
      'Conduct a comprehensive risk assessment to identify vulnerabilities.',
      'Implement multi-layered security: firewalls, endpoint protection, and email filtering.',
      'Keep all systems and software up to date with the latest patches.',
      'Educate employees on phishing and social engineering tactics.',
      'Monitor networks 24/7 for suspicious activity and respond rapidly to incidents.'
    ]
  },
  {
    title: 'Human Error',
    steps: [
      'Deploy strong password policies and multi-factor authentication.',
      'Provide regular, engaging security awareness training for all staff.',
      'Simulate phishing attacks to test and reinforce learning.',
      'Automate backups and critical security tasks to reduce manual mistakes.',
      'Review and update user access rights regularly.'
    ]
  },
  {
    title: 'Compliance Complexity',
    steps: [
      'Map out all applicable regulations (GDPR, HIPAA, PCI DSS, ISO 27001, etc.).',
      'Perform a compliance gap analysis to identify areas of risk.',
      'Automate compliance tasks with specialized tools and checklists.',
      'Train staff on compliance requirements and best practices.',
      'Schedule regular audits and reviews to stay ahead of changes.'
    ]
  },
  {
    title: 'Downtime & Data Loss',
    steps: [
      'Implement automated, encrypted backups with regular testing.',
      'Develop and test a disaster recovery and business continuity plan.',
      'Use redundant systems and cloud solutions to minimize single points of failure.',
      'Monitor infrastructure health and performance proactively.',
      'Respond quickly to incidents with a clear escalation process.'
    ]
  },
  {
    title: 'Vendor & Supply Chain Risks',
    steps: [
      'Vet all vendors and partners for security and compliance.',
      'Require third parties to follow your security standards.',
      'Monitor vendor access and activity continuously.',
      'Include supply chain risks in your incident response plan.',
      'Review contracts and SLAs for security obligations.'
    ]
  },
  {
    title: 'Resource Constraints',
    steps: [
      'Prioritize security investments based on risk and impact.',
      'Leverage managed security services for 24/7 protection.',
      'Automate routine security tasks to save time and money.',
      'Train internal staff to handle basic security hygiene.',
      'Apply for grants or incentives for cybersecurity improvements.'
    ]
  },
];

const solutionDetails = [
  {
    title: 'Comprehensive Assessments',
    summary: 'Our experts perform in-depth vulnerability scans, penetration testing, and risk assessments to uncover every weakness in your environment. You receive a prioritized action plan and clear, jargon-free reporting.'
  },
  {
    title: '24/7 Threat Monitoring',
    summary: 'We deploy advanced monitoring tools and a dedicated security operations team to watch over your systems around the clock. You get instant alerts, rapid response, and peace of mind knowing threats are stopped before they cause harm.'
  },
  {
    title: 'Layered Defense',
    summary: 'We build a multi-layered security architecture: firewalls, web application firewalls, endpoint protection, encryption, and secure coding practices. This defense-in-depth approach ensures attackers have multiple barriers to overcome.'
  },
  {
    title: 'Employee Training',
    summary: 'We deliver interactive, up-to-date training sessions and phishing simulations to turn your team into a human firewall. Employees learn to spot threats and respond appropriately, reducing your risk dramatically.'
  },
  {
    title: 'Compliance Management',
    summary: 'Our compliance experts guide you through every step: gap analysis, policy creation, staff training, and audit preparation. Automated tools keep you on track and audit-ready, minimizing penalties and stress.'
  },
  {
    title: 'Incident Response',
    summary: 'If an incident occurs, our rapid response team jumps in to contain, investigate, and remediate. We minimize damage, communicate clearly, and help you recover quickly—while learning lessons to prevent future issues.'
  },
];

interface InformationSecurityProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const InformationSecurity: React.FC<InformationSecurityProps> = ({ openContactModal }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('navbar');
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [customModal, setCustomModal] = useState<{ type: 'painpoint' | 'solution' | null, index: number | null }>({ type: null, index: null });

  const openModal = (source = 'navbar') => {
    setModalSource(source);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const openCustomModal = (type: 'painpoint' | 'solution', index: number) => {
    setCustomModal({ type, index });
  };

  const closeCustomModal = () => setCustomModal({ type: null, index: null });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={infoImages[0]}
            alt="Information Security Hero"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#009FE3]/90 to-[#FFA500]/70" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Your Digital Fortress Starts Here
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-6">
            Nexverse protects your business from today's most advanced cyber threats.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openModal('hero')}
            ref={anchorRef}
            className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#009FE3] to-[#FFA500] shadow-lg hover:from-[#FFA500] hover:to-[#009FE3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-lg"
          >
            Get a Free Security Assessment
          </motion.button>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Security Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are you prepared for the threats facing your business today?
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <motion.div
              key={point.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#009FE3] flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-4xl mb-4">{point.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.desc}</p>
              <button
                className="mt-4 text-[#009FE3] font-bold underline hover:text-[#FFA500] transition-colors"
                onClick={() => openCustomModal('painpoint', idx)}
              >
                See How We Solve This
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Nexverse Solves It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-layered approach keeps you safe, compliant, and ahead of attackers.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <motion.div
                key={sol.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#FFA500] flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl mb-4">{sol.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sol.title}</h3>
                <p className="text-gray-600">{sol.desc}</p>
                <button
                  className="mt-4 text-[#FFA500] font-bold underline hover:text-[#009FE3] transition-colors"
                  onClick={() => openCustomModal('solution', idx)}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexverse Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Nexverse?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another security vendor. We're your partner in resilience.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {threatStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border-b-4 border-[#009FE3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-3xl font-bold text-[#009FE3] mb-2">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openModal('why')}
            className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#009FE3] to-[#FFA500] shadow-lg hover:from-[#FFA500] hover:to-[#009FE3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-lg"
          >
            Talk to a Security Expert
          </motion.button>
        </div>
      </section>

      {/* Compliance & Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified. Audited. Trusted by industry leaders.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {complianceBadges.map((badge, idx) => (
              <motion.div
                key={badge.name}
                className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center w-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ImageWithFallback
                  src={badge.icon}
                  alt={badge.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <div className="font-bold text-gray-900 text-lg mb-1">{badge.name}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openModal('compliance')}
              className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#009FE3] to-[#FFA500] shadow-lg hover:from-[#FFA500] hover:to-[#009FE3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-lg"
            >
              Request Compliance Support
            </motion.button>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours stay secure.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border-l-4 border-[#FFA500]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-5xl mb-4 text-[#FFA500]">"</div>
              <p className="text-gray-700 mb-4 italic">{t.quote}</p>
              <div className="font-bold text-gray-900">{t.name}</div>
              <button
                className="mt-4 text-[#009FE3] font-bold underline hover:text-[#FFA500] transition-colors"
                onClick={() => openModal('testimonial')}
              >
                Get Your Success Story Started
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Threat Intelligence Dashboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Threat Intelligence Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of cyber criminals with Nexverse's 24/7 threat intelligence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border-t-4 border-[#009FE3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ImageWithFallback
                src={infoImages[1]}
                alt="Threat Intelligence"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-4 w-full">
                {threatStats.map((stat, idx) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#009FE3]">{stat.value}</div>
                    <div className="text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openModal('dashboard')}
                className="mt-8 inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#009FE3] to-[#FFA500] shadow-lg hover:from-[#FFA500] hover:to-[#009FE3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-lg"
              >
                Get a Live Demo
              </motion.button>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center border-t-4 border-[#FFA500]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ImageWithFallback
                src={infoImages[2]}
                alt="Security Monitoring"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="text-lg text-gray-700 mb-4">
                Real-time monitoring, instant alerts, and actionable insights—so you're always one step ahead.
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openModal('monitoring')}
                className="inline-block px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#009FE3] to-[#FFA500] shadow-lg hover:from-[#FFA500] hover:to-[#009FE3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-lg"
              >
                Request a Security Review
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Security Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Security Insights & FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Still have questions? Let's talk.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              className="mb-6 bg-white rounded-xl shadow p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="font-bold text-gray-900 mb-2">{faq.q}</div>
              <div className="text-gray-700">{faq.a}</div>
              <button
                className="mt-2 text-[#009FE3] font-bold underline hover:text-[#FFA500] transition-colors"
                onClick={() => openModal('faq')}
              >
                Ask Us Directly
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <footer className="py-16 bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to secure your business?</h2>
        <p className="text-lg mb-8">Let's connect and build your digital fortress together.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => openModal('footer')}
          className="inline-block px-8 py-3 rounded-lg font-bold text-[#101A2A] bg-white shadow-lg hover:bg-[#FFA500] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 text-lg"
        >
          Contact Us Now
        </motion.button>
        <div className="mt-8 flex flex-col items-center gap-2">
          <span className="text-sm">Nexverse Consulting Group Ltd</span>
          <span className="text-sm">034 Business Avenue, Westlands, Nairobi, Kenya</span>
          <span className="text-sm">+254 720943968 | drmuchiriconsulting@gmail.com</span>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {modalOpen && (
          <ContactModal isOpen={modalOpen} onClose={closeModal} source={modalSource as any} />
        )}
      </AnimatePresence>

      {/* Custom Modal */}
      <AnimatePresence>
        {customModal.type && customModal.index !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-2"
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
            onClick={closeCustomModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 border-t-8 border-[#009FE3] max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeCustomModal}
                className="absolute top-3 right-3 text-gray-400 hover:text-[#009FE3] focus:outline-none focus:ring-2 focus:ring-[#009FE3] rounded-full p-1"
                aria-label="Close modal"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              {customModal.type === 'painpoint' && customModal.index !== null && (
                <>
                  <h2 className="text-2xl font-bold text-[#009FE3] mb-4 flex items-center gap-2">
                    {painPoints[customModal.index].icon} {painPoints[customModal.index].title}
                  </h2>
                  <p className="mb-4 text-gray-700">Step-by-step solution to address this challenge:</p>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-800">
                    {painPointSolutions[customModal.index].steps.map((step, i) => (
                      <li key={i} className="bg-[#F3FAFF] border-l-4 border-[#FFA500] rounded-r-lg px-3 py-2 shadow-sm">
                        {step}
                      </li>
                    ))}
                  </ol>
                </>
              )}
              {customModal.type === 'solution' && customModal.index !== null && (
                <>
                  <h2 className="text-2xl font-bold text-[#FFA500] mb-4 flex items-center gap-2">
                    {solutions[customModal.index].icon} {solutions[customModal.index].title}
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed mb-2">
                    {solutionDetails[customModal.index].summary}
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InformationSecurity; 