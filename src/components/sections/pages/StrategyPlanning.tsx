import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from '../../common/ImageWithFallback';
import { 
  ChartBarIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

interface StrategyPlanningProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const painPoints = [
  {
    icon: QuestionMarkCircleIcon,
    text: 'Lack of clear direction and alignment across teams',
  },
  {
    icon: PresentationChartLineIcon,
    text: 'Slow, costly execution and missed deadlines',
  },
  {
    icon: UserGroupIcon,
    text: 'Siloed teams and poor communication',
  },
  {
    icon: ChartBarIcon,
    text: 'Inability to measure ROI or impact',
  },
  {
    icon: ShieldCheckIcon,
    text: 'Resistance to change and low buy-in',
  },
];

const processSteps = [
  {
    title: 'Discovery & Alignment',
    desc: 'We listen, analyze, and align with your vision and goals.',
    icon: LightBulbIcon,
  },
  {
    title: 'Strategic Roadmap',
    desc: 'We co-create a clear, actionable plan tailored to your needs.',
    icon: DocumentCheckIcon,
  },
  {
    title: 'Execution Support',
    desc: 'We guide, coach, and drive implementation for real results.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Measurement & Optimization',
    desc: 'We track KPIs and continuously optimize for sustained growth.',
    icon: ChartBarIcon,
  },
];

const solutions = [
    {
      title: 'Strategic Analysis',
    desc: 'Deep market and internal analysis to uncover growth opportunities.',
      icon: ChartBarIcon,
    },
    {
    title: 'Innovation & Digital Transformation',
    desc: 'Modernize your business with future-ready strategies.',
      icon: LightBulbIcon,
  },
  {
    title: 'Change Management',
    desc: 'Drive adoption and engagement with proven change frameworks.',
    icon: UserGroupIcon,
  },
  {
    title: 'Performance Metrics & KPIs',
    desc: 'Set, track, and achieve measurable business outcomes.',
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Team Alignment Workshops',
    desc: 'Unite your teams around a shared vision and actionable goals.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Implementation Roadmaps',
    desc: 'Step-by-step plans for seamless execution and accountability.',
      icon: DocumentCheckIcon,
  },
  ];

const proofStats = [
    {
      icon: CurrencyDollarIcon,
    value: '$7M+',
    label: 'Revenue Generated',
    color: 'from-[#009FE3] to-[#FFA500]'
    },
    {
      icon: ChartBarIcon,
    value: '72%',
    label: 'Avg. Client Growth',
    color: 'from-[#009FE3] to-[#FFA500]'
    },
    {
      icon: UserGroupIcon,
    value: '98%',
    label: 'Client Satisfaction',
    color: 'from-[#009FE3] to-[#FFA500]'
    },
    {
      icon: GlobeAltIcon,
    value: '25+',
    label: 'Countries Served',
    color: 'from-[#009FE3] to-[#FFA500]'
  },
];

const testimonials = [
  {
    quote: 'Nexverse helped us double our market share in 12 months. Their process is clear, collaborative, and delivers real results.',
    name: 'Sarah M.',
    company: 'TechCorp',
  },
  {
    quote: 'Their roadmap made execution seamless and measurable. We saw ROI within the first quarter.',
    name: 'James K.',
    company: 'HealthPlus',
  },
];

const caseStudies = [
  {
    client: 'TechCorp',
    challenge: 'Legacy systems hindering growth',
    solution: 'Implemented a cloud-first strategy and agile transformation.',
    results: [
      '60% reduction in operational costs',
      '40% increase in customer engagement',
      '50% faster time-to-market',
    ],
    image: '/assets/images/business_application.jpg',
  },
  {
    client: 'MediCare',
    challenge: 'Outdated patient management',
    solution: 'Modern healthcare platform and process automation.',
    results: [
      '70% improved patient satisfaction',
      '45% reduction in wait times',
      '30% increase in operational efficiency',
    ],
    image: '/assets/images/healthcare.jpg',
  },
];

const whyChoose = [
  {
    icon: CheckCircleIcon,
    title: 'Proven, repeatable frameworks',
    desc: 'Our methods are trusted by industry leaders worldwide.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Certified, experienced experts',
    desc: 'Work with a team of seasoned professionals.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global experience, local insight',
    desc: 'We blend international best practices with local expertise.'
  },
  {
    icon: UserGroupIcon,
    title: 'Personalized, hands-on support',
    desc: "We're your partners from strategy to execution."
  },
  {
    icon: ChartBarIcon,
    title: 'Transparent, measurable results',
    desc: 'We track KPIs and deliver on our promises.'
  },
];

const faqs = [
  {
    q: 'How do you ensure results?',
    a: 'We use proven frameworks, set clear KPIs, and provide ongoing support to guarantee measurable outcomes.'
  },
  {
    q: 'What industries do you serve?',
    a: 'We have deep expertise across technology, healthcare, finance, manufacturing, and more.'
  },
  {
    q: 'How quickly can we see impact?',
    a: 'Most clients see tangible results within the first 90 days of engagement.'
  },
  {
    q: "What's your pricing model?",
    a: "We offer flexible, transparent pricing tailored to your project's scope and needs."
  },
];

const solutionDetails: Record<string, string[]> = {
  'Strategic Analysis': [
    'Comprehensive review of your market, competitors, and internal capabilities.',
    'Identify hidden opportunities and threats.',
    'Deliver actionable insights to inform your strategy.',
    'Benchmark your business against industry leaders.',
    'Provide a clear, data-driven foundation for decision-making.'
  ],
  'Innovation & Digital Transformation': [
    'Assess your current digital maturity and innovation culture.',
    'Design a roadmap for technology adoption and process automation.',
    'Foster a culture of continuous improvement and creativity.',
    'Implement scalable digital solutions for long-term growth.',
    'Ensure your business stays ahead in a rapidly changing landscape.'
  ],
  'Change Management': [
    'Develop a tailored change management plan for your organization.',
    'Engage stakeholders at every level for buy-in and support.',
    'Provide training and resources to ease transitions.',
    'Monitor progress and adapt strategies as needed.',
    'Minimize resistance and maximize adoption of new initiatives.'
  ],
  'Performance Metrics & KPIs': [
    'Define clear, relevant KPIs aligned with your business goals.',
    'Set up real-time dashboards for tracking progress.',
    'Establish accountability and ownership for results.',
    'Enable data-driven decision-making at all levels.',
    'Continuously refine metrics to reflect evolving priorities.'
  ],
  'Team Alignment Workshops': [
    'Facilitate interactive workshops to align teams on vision and goals.',
    'Break down silos and foster cross-functional collaboration.',
    'Clarify roles, responsibilities, and expectations.',
    'Build trust and open communication channels.',
    'Create a unified action plan for moving forward together.'
  ],
  'Implementation Roadmaps': [
    'Translate strategy into clear, actionable steps.',
    'Assign timelines, owners, and resources for each initiative.',
    'Identify potential risks and mitigation plans.',
    'Track progress and adjust as needed for success.',
    'Ensure accountability and momentum from start to finish.'
  ],
};

const StrategyPlanning: React.FC<StrategyPlanningProps> = ({ openContactModal }) => {
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
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbfd] to-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#232A7D]">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/images/strategy_planning_hero1.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Strategy Planning & Execution Hero Video"
          poster="/assets/images/hero_strategy.jpg"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#009FE3]/80 via-[#00B6F0]/80 to-[#FFA500]/70 mix-blend-multiply" />
        {/* Hero Content */}
        <motion.div 
          className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-8 mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Left: Headline & Pain Points */}
          <div className="flex-1 text-left text-white max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-xl text-[#00B6F0]">
              Strategy Planning That Solves What Hurts Most
            </h1>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#FFA500] inline-block" />
                <span className="text-lg font-medium">Lack of clear direction & alignment</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#009FE3] inline-block" />
                <span className="text-lg font-medium">Slow, costly execution & missed deadlines</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#232A7D] inline-block" />
                <span className="text-lg font-medium">Siloed teams & poor communication</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-white inline-block" />
                <span className="text-lg font-medium">Inability to measure ROI or impact</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#FFA500] inline-block" />
                <span className="text-lg font-medium">Resistance to change & low buy-in</span>
              </li>
            </ul>
          </div>
          {/* Right: CTA */}
          <div className="flex-1 flex flex-col items-center md:items-end mt-10 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#009FE3] hover:bg-[#00B6F0] font-bold px-10 py-4 rounded-xl shadow-xl text-white text-xl focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40 transition border-2 border-white/10"
              onClick={() => openContactModal()}
              aria-label="Book Our Free Consultation"
            >
              Book Our Free Consultation
            </motion.button>
            <p className="mt-6 text-white/80 text-base max-w-xs text-center md:text-right">
              We turn your vision into measurable results—fast. Let's solve your biggest strategy pain points together.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#F7FAFC]">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232A7D] mb-4">The Real Barriers to Success</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Most organizations struggle to bridge the gap between strategy and execution. We've identified and solved these pain points for clients across industries.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.text}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 border border-[#E6F7FB]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#232A7D] font-medium text-lg">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#E6F7FB] px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232A7D] mb-4">Our Proven Process</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            A clear, expert methodology that delivers results every time.
            </p>
          </motion.div>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, i) => (
              <motion.div
              key={step.title}
              className="bg-white rounded-2xl p-8 shadow-lg flex-1 min-w-[220px] flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300 border border-[#F7FAFC]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              >
              <div className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-white" />
                </div>
              <h3 className="text-lg font-semibold text-[#232A7D] mb-2">{step.title}</h3>
              <p className="text-[#6B7280]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#009FE3] hover:bg-[#00B6F0] font-bold px-8 py-3 rounded-lg shadow-lg text-white text-lg focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40 transition"
            onClick={() => openContactModal()}
            aria-label="Start Your Journey"
          >
            Let's Start Your Journey
          </motion.button>
        </div>
      </section>

      {/* Solutions Section with new color scheme and modal trigger */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#f7f7fa]">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3748] mb-4">Tailored Solutions for Every Challenge</h2>
          <p className="text-xl text-[#4A5568] max-w-2xl mx-auto">
            Our services are designed to address your unique pain points and drive sustainable growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-[#e9f5f2]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="bg-gradient-to-r from-[#38B2AC] to-[#38B2AC] w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <sol.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#2D3748] mb-2">{sol.title}</h3>
              <p className="text-[#4A5568] mb-4">{sol.desc}</p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#38B2AC] font-bold px-5 py-2 rounded-lg shadow text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ECC94B]/40 transition"
                onClick={() => openSolutionModal(sol.title)}
                aria-label={`Learn more about ${sol.title}`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
        {/* Modal for Solution Details */}
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSolutionModal}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-[#F56565] hover:text-[#ECC94B] text-xl font-bold"
                onClick={closeSolutionModal}
                aria-label="Close details modal"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold text-[#2D3748] mb-4">{modalTitle}</h3>
              <ul className="list-disc pl-6 space-y-3 text-[#4A5568] text-base">
                {modalDetails.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Proof & Results Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232A7D] mb-4">Proven Results</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Our strategic approach delivers measurable business outcomes for clients worldwide.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#F7FAFC] rounded-2xl p-8 shadow-lg text-center border border-[#E6F7FB]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#232A7D] mb-2">{stat.value}</div>
              <h3 className="text-lg font-semibold text-[#232A7D] mb-2">{stat.label}</h3>
            </motion.div>
                      ))}
                    </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto md:mx-0 border border-[#E6F7FB]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <p className="text-[#232A7D] italic mb-3">"{t.quote}"</p>
              <div className="text-[#009FE3] font-bold">{t.name}</div>
              <div className="text-[#6B7280] text-sm">{t.company}</div>
              </motion.div>
            ))}
          </div>
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#FFA500] hover:bg-[#FFB347] font-bold px-8 py-3 rounded-lg shadow-lg text-white text-lg focus:outline-none focus:ring-4 focus:ring-[#009FE3]/40 transition"
            onClick={() => openContactModal()}
            aria-label="See More Success Stories"
          >
            See More Success Stories
          </motion.button>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232A7D] mb-4">Client Transformations</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Real-world examples of how we drive impact for our clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((cs, i) => (
              <motion.div
              key={cs.client}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative h-64">
                  <ImageWithFallback
                  src={cs.image}
                  alt={cs.client}
                  className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#232A7D] mb-2">{cs.client}</h3>
                <div className="mb-2 text-[#009FE3] font-medium">Challenge: <span className="text-[#6B7280]">{cs.challenge}</span></div>
                <div className="mb-2 text-[#009FE3] font-medium">Solution: <span className="text-[#6B7280]">{cs.solution}</span></div>
                    <div>
                      <h4 className="font-medium text-[#232A7D] mb-2">Results</h4>
                      <ul className="space-y-2">
                    {cs.results.map((r, idx) => (
                      <li key={idx} className="flex items-center text-[#6B7280]">
                            <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2" />
                        {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                <div className="flex justify-end mt-6">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] font-bold px-6 py-2 rounded-lg shadow text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA500]/40 transition"
                    onClick={() => openContactModal()}
                    aria-label={`Discuss transformation for ${cs.client}`}
                  >
                    Discuss Your Transformation
                  </motion.button>
                </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f3f8fc] px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232A7D] mb-4">Why Choose Nexverse?</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            We're not just consultants—we're your partners in growth. Our clients stay with us because we deliver, every time.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyChoose.map((item, i) => (
          <motion.div 
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#232A7D] mb-2">{item.title}</h3>
              <p className="text-[#6B7280]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] font-bold px-8 py-3 rounded-lg shadow-lg text-white text-lg focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40 transition"
            onClick={() => openContactModal()}
            aria-label="Let's Work Together"
          >
            Let's Work Together
          </motion.button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#232A7D] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Still have questions? We're here to help you make the best decision for your business.
            </p>
          </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="bg-white rounded-xl shadow p-4 cursor-pointer border border-transparent hover:border-[#009FE3] transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              aria-expanded={faqOpen === i}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setFaqOpen(faqOpen === i ? null : i); }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#232A7D]">{faq.q}</span>
                <span className={`ml-2 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`}>▼</span>
              </div>
              {faqOpen === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-[#6B7280]"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
          </div>
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#009FE3] to-[#00B6F0] font-bold px-8 py-3 rounded-lg shadow-lg text-white text-lg focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40 transition"
            onClick={() => openContactModal()}
            aria-label="Still Have Questions?"
          >
            Still Have Questions?
          </motion.button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#009FE3]/90 to-[#005fa3]/90 px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Transform Your Strategy into Results?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free, no-obligation consultation with our experts and discover how Nexverse can help you achieve your goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#FFA500] to-[#009FE3] font-bold px-10 py-4 rounded-lg shadow-xl text-white text-xl focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40 transition"
            onClick={() => openContactModal()}
            aria-label="Book Our Free Consultation"
          >
            Book Our Free Consultation
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default StrategyPlanning; 