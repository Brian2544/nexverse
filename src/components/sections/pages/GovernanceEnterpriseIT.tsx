import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import {
  DocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CogIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import GlobeComponent from '../../common/Globe';
import AnimatedNumber from '../../common/AnimatedNumber';

interface GovernanceEnterpriseITProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

// LearnMoreModal for Hero Section
const LearnMoreModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={onClose}
    aria-modal="true"
    role="dialog"
  >
    <div
      className="bg-[#101A2A] rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-[#009FE3] transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <h2 className="text-2xl font-bold text-white mb-4">About Our IT Governance Approach</h2>
      <p className="text-gray-200 mb-4 text-base">
        Our IT governance framework is designed to empower enterprises to achieve strategic alignment, risk resilience, and measurable value delivery. We combine global best practices with local expertise, ensuring your IT investments drive business outcomes and regulatory compliance.
      </p>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
        <li><span className="text-[#009FE3] font-semibold">Strategic Alignment:</span> Ensuring IT initiatives directly support business goals and growth.</li>
        <li><span className="text-[#009FE3] font-semibold">Risk & Compliance:</span> Proactive management of cyber, operational, and regulatory risks.</li>
        <li><span className="text-[#009FE3] font-semibold">Resource Optimization:</span> Maximizing ROI through efficient allocation and cost control.</li>
        <li><span className="text-[#009FE3] font-semibold">Value Delivery:</span> Transparent metrics and reporting to prove IT's business impact.</li>
      </ul>
      <p className="text-gray-400 text-sm">
        Our global network and proven methodologies ensure you stay ahead in a rapidly evolving digital landscape. Let us help you transform IT from a cost center to a value driver.
      </p>
    </div>
  </div>
);

const GovernanceEnterpriseIT: React.FC<GovernanceEnterpriseITProps> = ({ openContactModal }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'IT Governance Framework',
      description: 'Comprehensive framework for effective IT governance',
      icon: DocumentCheckIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Performance Metrics',
      description: 'Key performance indicators for IT governance success',
      icon: ChartBarIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Stakeholder Management',
      description: 'Effective engagement with IT stakeholders',
      icon: UserGroupIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Risk Management',
      description: 'Proactive risk assessment and mitigation strategies',
      icon: ShieldCheckIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Process Optimization',
      description: 'Streamlined IT processes for better efficiency',
      icon: CogIcon,
      color: 'bg-red-500'
    },
    {
      title: 'Strategic Alignment',
      description: 'Align IT initiatives with business objectives',
      icon: PresentationChartLineIcon,
      color: 'bg-indigo-500'
    }
  ];

  const governanceFramework = [
    {
      pillar: "Strategic Alignment",
      description: "Align IT strategy with business objectives",
      components: [
        "Business-IT alignment",
        "Strategic planning",
        "Portfolio management",
        "Value delivery"
      ],
      icon: BuildingOfficeIcon,
      color: "bg-blue-500"
    },
    {
      pillar: "Risk Management",
      description: "Identify and mitigate IT-related risks",
      components: [
        "Risk assessment",
        "Security controls",
        "Compliance monitoring",
        "Incident response"
      ],
      icon: ShieldCheckIcon,
      color: "bg-red-500"
    },
    {
      pillar: "Resource Optimization",
      description: "Optimize IT resources and investments",
      components: [
        "Resource allocation",
        "Cost management",
        "Performance optimization",
        "Capacity planning"
      ],
      icon: ScaleIcon,
      color: "bg-green-500"
    },
    {
      pillar: "Value Delivery",
      description: "Ensure IT delivers business value",
      components: [
        "Value measurement",
        "Service delivery",
        "Quality management",
        "Stakeholder satisfaction"
      ],
      icon: ArrowTrendingUpIcon,
      color: "bg-purple-500"
    }
  ];

  const complianceStatus = {
    overall: {
      score: 92,
      status: "Compliant",
      lastUpdated: "2 days ago"
    },
    frameworks: [
      {
        name: "ISO 27001",
        status: "Compliant",
        score: 95,
        lastAudit: "3 months ago",
        icon: DocumentCheckIcon
      },
      {
        name: "COBIT",
        status: "Compliant",
        score: 90,
        lastAudit: "2 months ago",
        icon: DocumentCheckIcon
      },
      {
        name: "ITIL",
        status: "In Progress",
        score: 85,
        lastAudit: "1 month ago",
        icon: ClockIcon
      },
      {
        name: "NIST",
        status: "Compliant",
        score: 88,
        lastAudit: "4 months ago",
        icon: DocumentCheckIcon
      }
    ]
  };

  const roiMetrics = {
    current: {
      investment: "$2.5M",
      returns: "$4.8M",
      roi: "92%",
      paybackPeriod: "18 months"
    },
    breakdown: [
      {
        category: "Cost Reduction",
        value: "$1.2M",
        percentage: "45%",
        trend: "up"
      },
      {
        category: "Productivity Gain",
        value: "$1.5M",
        percentage: "35%",
        trend: "up"
      },
      {
        category: "Risk Mitigation",
        value: "$0.8M",
        percentage: "20%",
        trend: "up"
      }
    ]
  };

  const [learnMoreOpen, setLearnMoreOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO SECTION - Professional Glassmorphic Redesign */}
      <section className="relative z-10 min-h-[90vh] flex items-center pt-10 pb-20 px-4 md:px-8 bg-gradient-to-br from-[#181025] via-[#232046] to-[#181025] overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm mb-6">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2"></span>
                Enterprise IT Governance Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white font-manrope font-light tracking-tight">
              Govern IT. <span className="font-semibold">Drive Value.</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-manrope font-bold mb-4">Modern Governance for Modern Enterprises</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Align IT with business strategy, manage risk, and deliver measurable value. Our platform empowers you to achieve compliance, optimize resources, and transform IT into a business enabler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => openContactModal()} className="py-4 px-8 rounded-xl bg-[#009FE3] text-white font-medium text-center transition-all hover:bg-[#0083b3] shadow-lg">
                Get Started
              </button>
              <button onClick={() => setLearnMoreOpen(true)} className="py-4 px-8 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-center border border-white/10 transition-all">
                <i className="fas fa-info-circle text-xs mr-2"></i> Learn More
              </button>
            </div>
            <div className="mt-10 flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="/assets/images/ceo.png" className="w-10 h-10 rounded-full border-2 border-gray-900" alt="User" />
                <img src="/assets/images/hero_african_team.jpg" className="w-10 h-10 rounded-full border-2 border-gray-900" alt="User" />
                <img src="/assets/images/hero_african_business.jpg" className="w-10 h-10 rounded-full border-2 border-gray-900" alt="User" />
              </div>
              <div className="text-white/70 text-sm">
                Trusted by <span className="text-white font-medium">100+ enterprises</span> worldwide
              </div>
            </div>
          </div>
          {/* Right Content - Glassmorphic Cards */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Main glass card */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -20, 0], opacity: 1 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: 0.2 }}
              className="glass-effect bg-white/5 border border-white/10 rounded-2xl w-80 h-80 absolute transform rotate-6 shadow-xl"
            >
              <div className="absolute top-6 left-6 right-6 bottom-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <i className="fas fa-shield-halved text-white text-sm"></i>
                  </div>
                  <span className="ml-3 text-white text-lg">Compliance Score</span>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-md flex items-center justify-center">
                    <span className="text-4xl text-[#009FE3] font-bold">
                      <AnimatedNumber value={98} duration={2.2} />%
                    </span>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-[#009FE3] rounded-full"></div>
                </div>
                <div className="mt-2 text-xs text-white/70 text-right">Fully Compliant</div>
              </div>
            </motion.div>
            {/* Secondary glass cards */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -30, 0], opacity: 1 }}
              transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse', delay: 0.4 }}
              className="glass-effect bg-white/5 border border-white/10 rounded-2xl w-64 h-44 absolute -bottom-4 -left-4 transform -rotate-12 shadow-lg"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white text-sm">ROI Improvement</span>
                  <i className="fas fa-chart-line text-white text-xs"></i>
                </div>
                <div className="h-20 flex items-end justify-between gap-1 mb-2">
                  <div className="w-1/6 h-[30%] bg-white/40 rounded-sm"></div>
                  <div className="w-1/6 h-[45%] bg-white/50 rounded-sm"></div>
                  <div className="w-1/6 h-[65%] bg-white/60 rounded-sm"></div>
                  <div className="w-1/6 h-[80%] bg-white/70 rounded-sm"></div>
                  <div className="w-1/6 h-[95%] bg-white/80 rounded-sm"></div>
                  <div className="w-1/6 h-[75%] bg-white/90 rounded-sm"></div>
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span>Jan</span>
                  <span>Jun</span>
                </div>
              </div>
            </motion.div>
            {/* Third glass card - Risk Reduction */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -15, 0], opacity: 1 }}
              transition={{ duration: 5.5, repeat: Infinity, repeatType: 'reverse', delay: 0.6 }}
              className="glass-effect bg-white/5 border border-white/10 rounded-2xl w-48 h-48 absolute top-0 right-0 transform rotate-12 shadow-lg"
            >
              <div className="p-4 h-full flex flex-col">
                <div className="text-white text-sm mb-2">Risk Reduction</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-[#009FE3]/80 border-t-transparent transform rotate-45"></div>
                    <span className="text-2xl text-white font-medium">
                      <AnimatedNumber value={85} duration={2.2} />%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Governance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT governance services to ensure alignment and efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#009FE3] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Governance Framework Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Governance Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT governance structure for enterprise success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceFramework.map((pillar, index) => (
              <motion.div
                key={pillar.pillar}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${pillar.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pillar.pillar}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.components.map((component, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2" />
                      {component}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Tracking Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compliance Status
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time compliance monitoring and reporting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overall Status */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Overall Compliance
              </h3>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    <AnimatedNumber value={complianceStatus.overall.score} duration={2.2} className="text-4xl font-bold text-gray-900 mb-1" />%
                  </div>
                  <div className="text-sm text-gray-600">
                    Last updated {complianceStatus.overall.lastUpdated}
                  </div>
                </div>
                <div className="w-24 h-24 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#009FE3"
                      strokeWidth="3"
                      strokeDasharray={`${complianceStatus.overall.score}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {complianceStatus.overall.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Framework Status */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Framework Compliance
              </h3>
              <div className="space-y-4">
                {complianceStatus.frameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <framework.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{framework.name}</h4>
                        <p className="text-sm text-gray-500">
                          Last audit: {framework.lastAudit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          <AnimatedNumber value={framework.score} duration={2.2} className="text-lg font-semibold text-[#101A2A]" />%
                        </div>
                        <div className={`text-sm font-medium ${framework.status === 'Compliant' ? 'text-green-500' : 'text-yellow-500'
                          }`}>
                          {framework.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ROI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measure the value and impact of IT governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current ROI */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Current ROI Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {roiMetrics.current.investment}
                  </div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {roiMetrics.current.returns}
                  </div>
                  <div className="text-sm text-gray-600">Total Returns</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {roiMetrics.current.roi}
                  </div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {roiMetrics.current.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
              </div>
            </div>

            {/* ROI Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                ROI Breakdown
              </h3>
              <div className="space-y-4">
                {roiMetrics.breakdown.map((item, index) => (
                  <motion.div
                    key={item.category}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{item.category}</h4>
                      <div className="text-2xl font-bold text-gray-900">
                        {item.value}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-500">
                        {item.percentage}
                      </span>
                      <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Governance?</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition" onClick={() => openContactModal()}>
            Book a Free Governance Consultation
          </button>
        </motion.div>
      </section>

      {/* Section 1: Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101A2A] mb-4">
              Our Proven Approach to IT Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive framework designed to align IT with business objectives and drive measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment",
                description: "Evaluate current IT governance maturity and identify gaps",
                icon: ChartBarIcon,
                color: "bg-[#009FE3]"
              },
              {
                title: "Strategy",
                description: "Develop a tailored governance framework aligned with business goals",
                icon: PresentationChartLineIcon,
                color: "bg-[#FFA500]"
              },
              {
                title: "Implementation",
                description: "Execute governance initiatives with clear milestones and metrics",
                icon: CogIcon,
                color: "bg-[#009FE3]"
              },
              {
                title: "Optimization",
                description: "Continuously improve and adapt governance practices",
                icon: ArrowTrendingUpIcon,
                color: "bg-[#FFA500]"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#009FE3]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#101A2A] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101A2A] mb-4">
              Transform Your IT Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements in your IT operations and business outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Business Alignment",
                description: "Align IT initiatives with business objectives for maximum impact",
                icon: BuildingOfficeIcon,
                metrics: "40% improvement in strategic alignment"
              },
              {
                title: "Risk Mitigation",
                description: "Proactive risk management and compliance monitoring",
                icon: ShieldCheckIcon,
                metrics: "85% reduction in security incidents"
              },
              {
                title: "Cost Optimization",
                description: "Optimize IT spending and resource allocation",
                icon: CurrencyDollarIcon,
                metrics: "30% reduction in IT costs"
              },
              {
                title: "Improved Performance",
                description: "Enhanced IT service delivery and user satisfaction",
                icon: ChartBarIcon,
                metrics: "92% user satisfaction rate"
              },
              {
                title: "Better Decision Making",
                description: "Data-driven insights for informed IT decisions",
                icon: DocumentCheckIcon,
                metrics: "60% faster decision-making process"
              },
              {
                title: "Scalable Operations",
                description: "Flexible governance framework that grows with your business",
                icon: ArrowTrendingUpIcon,
                metrics: "50% faster time-to-market"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#009FE3]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-[#009FE3]" />
                </div>
                <h3 className="text-xl font-semibold text-[#101A2A] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-[#009FE3] font-semibold">{benefit.metrics}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101A2A] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped organizations transform their IT governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Services Transformation",
                challenge: "Complex regulatory requirements and legacy systems",
                solution: "Implemented comprehensive IT governance framework",
                results: [
                  "92% compliance rate achieved",
                  "40% reduction in operational costs",
                  "60% improvement in decision-making speed"
                ],
                image: "/assets/images/business_application.jpg"
              },
              {
                title: "Healthcare Provider Modernization",
                challenge: "Data security concerns and system integration issues",
                solution: "Deployed secure, compliant IT governance structure",
                results: [
                  "99.9% uptime achieved",
                  "85% reduction in security incidents",
                  "50% faster service delivery"
                ],
                image: "/assets/images/healthcare.jpg"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <OptimizedImage
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {caseStudy.title}
                  </h3>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#101A2A] mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#101A2A] mb-2">Solution</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#101A2A] mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircleIcon className="w-5 h-5 text-[#009FE3] mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101A2A] mb-4">
              Our Governance Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to enterprise IT governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceFramework.map((pillar, index) => (
              <motion.div
                key={pillar.pillar}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${pillar.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#101A2A] mb-2">
                  {pillar.pillar}
                </h3>
                <p className="text-gray-600 mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.components.map((component, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2" />
                      {component}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Compliance & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101A2A] mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with industry standards and regulations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#101A2A] mb-6">
                Overall Compliance
              </h3>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-4xl font-bold text-[#101A2A] mb-1">
                    <AnimatedNumber value={complianceStatus.overall.score} duration={2.2} className="text-4xl font-bold text-gray-900 mb-1" />%
                  </div>
                  <div className="text-sm text-gray-600">
                    Last updated {complianceStatus.overall.lastUpdated}
                  </div>
                </div>
                <div className="w-24 h-24 relative">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#009FE3"
                      strokeWidth="3"
                      strokeDasharray={`${complianceStatus.overall.score}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-[#101A2A]">
                      {complianceStatus.overall.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#101A2A] mb-6">
                Framework Compliance
              </h3>
              <div className="space-y-4">
                {complianceStatus.frameworks.map((framework, index) => (
                  <motion.div
                    key={framework.name}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#009FE3]/10 rounded-xl flex items-center justify-center">
                        <framework.icon className="w-5 h-5 text-[#009FE3]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#101A2A]">{framework.name}</h4>
                        <p className="text-sm text-gray-500">
                          Last audit: {framework.lastAudit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-semibold text-[#101A2A]">
                          <AnimatedNumber value={framework.score} duration={2.2} className="text-lg font-semibold text-[#101A2A]" />%
                        </div>
                        <div className={`text-sm font-medium ${framework.status === 'Compliant' ? 'text-green-500' : 'text-yellow-500'
                          }`}>
                          {framework.status}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#101A2A] mb-4">
              ROI Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measure the value and impact of IT governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#101A2A] mb-6">
                Current ROI Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#101A2A] mb-1">
                    {roiMetrics.current.investment}
                  </div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#101A2A] mb-1">
                    {roiMetrics.current.returns}
                  </div>
                  <div className="text-sm text-gray-600">Total Returns</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#101A2A] mb-1">
                    {roiMetrics.current.roi}
                  </div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-[#101A2A] mb-1">
                    {roiMetrics.current.paybackPeriod}
                  </div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#101A2A] mb-6">
                ROI Breakdown
              </h3>
              <div className="space-y-4">
                {roiMetrics.breakdown.map((item, index) => (
                  <motion.div
                    key={item.category}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div>
                      <h4 className="font-medium text-[#101A2A]">{item.category}</h4>
                      <div className="text-2xl font-bold text-[#101A2A]">
                        {item.value}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-500">
                        {item.percentage}
                      </span>
                      <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#101A2A] to-[#1e2761]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Governance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations that have successfully implemented our governance framework
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openContactModal()}
                className="bg-[#009FE3] hover:bg-[#0083b3] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {learnMoreOpen && (
        <LearnMoreModal onClose={() => setLearnMoreOpen(false)} />
      )}
    </div>
  );
};

export default GovernanceEnterpriseIT; 