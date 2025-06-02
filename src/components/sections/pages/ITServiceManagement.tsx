import React, { useState, useRef, useEffect, Suspense } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  WrenchScrewdriverIcon, 
  ClockIcon, 
  UserGroupIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  ServerIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// CountUp hook for animated numbers
function useCountUp(end: number, duration = 1.5, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    let startTime: number | null = null;
    function animateCountUp(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = start + (end - start) * progress;
      setValue(Number(current.toFixed(decimals)));
      if (progress < 1) {
        requestAnimationFrame(animateCountUp);
      } else {
        setValue(end);
      }
    }
    requestAnimationFrame(animateCountUp);
    // eslint-disable-next-line
  }, [end, duration, decimals]);
  return value;
}

interface ITServiceManagementProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const ITServiceManagement: React.FC<ITServiceManagementProps> = ({ openContactModal }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };
  const popIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  // For animated numbers
  const metricsRef = useRef(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: '-100px' });
  const uptime = useCountUp(metricsInView ? 99.99 : 0, 1.2, 2);
  const responseTime = useCountUp(metricsInView ? 12 : 0, 1.2, 0);
  const resolutionTime = useCountUp(metricsInView ? 1.8 : 0, 1.2, 1);
  const satisfaction = useCountUp(metricsInView ? 98 : 0, 1.2, 0);
  const serviceRequests = useCountUp(metricsInView ? 1234 : 0, 1.2, 0);
  const resolutionRate = useCountUp(metricsInView ? 96 : 0, 1.2, 0);
  const firstContact = useCountUp(metricsInView ? 85 : 0, 1.2, 0);
  const clientSatisfaction = useCountUp(metricsInView ? 4.8 : 0, 1.2, 1);

  const painPoints = [
    {
      title: 'Service Disruptions',
      description: 'Frequent IT outages affecting business operations and productivity',
      icon: ExclamationCircleIcon,
      color: 'bg-red-500'
    },
    {
      title: 'Slow Response Times',
      description: 'Delayed IT support leading to extended downtime and frustration',
      icon: ClockIcon,
      color: 'bg-yellow-500'
    },
    {
      title: 'Cost Inefficiencies',
      description: 'Unpredictable IT costs and budget overruns',
      icon: CurrencyDollarIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Security Vulnerabilities',
      description: 'Inadequate security measures exposing business to risks',
      icon: ShieldCheckIcon,
      color: 'bg-purple-500'
    }
  ];

  const features = [
    {
      title: 'Service Desk',
      description: '24/7 support and incident management for your IT services',
      icon: WrenchScrewdriverIcon,
      color: 'bg-[#009FE3]'
    },
    {
      title: 'Response Time',
      description: 'Quick response and resolution of IT service requests',
      icon: ClockIcon,
      color: 'bg-[#FFA500]'
    },
    {
      title: 'Team Management',
      description: 'Expert IT service teams aligned with your business needs',
      icon: UserGroupIcon,
      color: 'bg-[#009FE3]'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of IT services',
      icon: ChartBarIcon,
      color: 'bg-[#FFA500]'
    },
    {
      title: 'Service Level Agreements',
      description: 'Clear SLAs to ensure quality IT service delivery',
      icon: DocumentCheckIcon,
      color: 'bg-[#009FE3]'
    },
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive management of IT infrastructure',
      icon: ServerIcon,
      color: 'bg-[#FFA500]'
    }
  ];

  const serviceLevels = [
    {
      tier: "Enterprise",
      responseTime: "15 minutes",
      resolutionTime: "2 hours",
      uptime: "99.99%",
      features: [
        "24/7 dedicated support",
        "Priority incident handling",
        "Custom SLA terms",
        "Monthly service review",
        "Dedicated account manager",
        "Advanced security features"
      ],
      icon: ShieldCheckIcon,
      color: "from-[#009FE3] to-[#005fa3]"
    },
    {
      tier: "Business",
      responseTime: "30 minutes",
      resolutionTime: "4 hours",
      uptime: "99.9%",
      features: [
        "Business hours support",
        "Standard incident handling",
        "Standard SLA terms",
        "Quarterly service review",
        "Shared account manager",
        "Standard security features"
      ],
      icon: CheckCircleIcon,
      color: "from-[#FFA500] to-[#ff8c00]"
    },
    {
      tier: "Standard",
      responseTime: "2 hours",
      resolutionTime: "8 hours",
      uptime: "99.5%",
      features: [
        "Business hours support",
        "Basic incident handling",
        "Standard SLA terms",
        "Annual service review",
        "Email support",
        "Basic security features"
      ],
      icon: DocumentCheckIcon,
      color: "from-[#009FE3] to-[#005fa3]"
    }
  ];

  const supportProcess = [
    {
      step: 1,
      title: "Issue Detection",
      description: "Proactive monitoring and automated alerting system",
      icon: ExclamationCircleIcon,
      color: "bg-[#009FE3]"
    },
    {
      step: 2,
      title: "Initial Response",
      description: "Immediate acknowledgment and rapid assessment",
      icon: ClockIcon,
      color: "bg-[#FFA500]"
    },
    {
      step: 3,
      title: "Resolution",
      description: "Expert problem-solving and efficient implementation",
      icon: WrenchScrewdriverIcon,
      color: "bg-[#009FE3]"
    },
    {
      step: 4,
      title: "Verification",
      description: "Quality assurance and client satisfaction confirmation",
      icon: CheckCircleIcon,
      color: "bg-[#FFA500]"
    }
  ];

  const performanceMetrics = {
    current: {
      uptime: "99.99%",
      responseTime: "12 min",
      resolutionTime: "1.8 hrs",
      satisfaction: "98%"
    },
    trends: [
      {
        metric: "Service Requests",
        current: "1,234",
        change: "+15%",
        trend: "up"
      },
      {
        metric: "Resolution Rate",
        current: "96%",
        change: "+5%",
        trend: "up"
      },
      {
        metric: "First Contact Resolution",
        current: "85%",
        change: "+8%",
        trend: "up"
      },
      {
        metric: "Client Satisfaction",
        current: "4.8/5",
        change: "+0.2",
        trend: "up"
      }
    ]
  };

  const ContactModal = React.lazy(() => import('../../modals/ContactModal'));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Video */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/images/nairobi_hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero/nairobi-poster.jpg"
        />
        {/* Hero Content */}
        <motion.div 
          className="relative z-20 text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform Your IT Service Management
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Streamline operations, reduce costs, and enhance service delivery with our expert IT service management solutions
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:from-[#ff8c00] hover:to-[#FFA500] transition-colors focus:outline-none focus:ring-4 focus:ring-[#009FE3]/40"
            onClick={() => setModalOpen(true)}
            aria-label="Get Started Today"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#009FE3] mb-4">
            Common IT Service Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand your pain points and have the solutions to address them
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#009FE3] hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.07 }}
            >
              <motion.div
                className={`${point.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <point.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#232A7D] mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#009FE3] transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#009FE3] mb-4">
              Our Service Management Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT service management to keep your business running smoothly
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#FFA500] hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.07 }}
              >
                <motion.div
                  className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#232A7D] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FFA500] transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Level Agreements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#009FE3] mb-4">
              Service Level Agreements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect service level for your business needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <motion.div
                key={level.tier}
                className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden border-t-4 border-[#009FE3] hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.15)' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#009FE3] to-[#005fa3]" />
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-[#232A7D]">
                    {level.tier}
                  </h3>
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-[#009FE3] to-[#005fa3] rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <level.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-medium text-[#232A7D]">{level.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Resolution Time</span>
                    <span className="font-medium text-[#232A7D]">{level.resolutionTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uptime</span>
                    <span className="font-medium text-[#232A7D]">{level.uptime}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-[#009FE3] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#009FE3] to-[#005fa3] text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-[#005fa3] hover:to-[#009FE3] transition-colors"
                  onClick={() => setModalOpen(true)}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#009FE3] mb-4">
              Our Support Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Efficient and effective IT service delivery
            </p>
          </motion.div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {supportProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative bg-white rounded-2xl p-8 shadow-lg text-center border-t-4 border-[#FFA500] hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255,165,0,0.12)' }}
                >
                  <motion.div
                    className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-2xl font-bold text-[#232A7D] mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#232A7D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-20" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#009FE3] mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time service performance and trends
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Performance */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-[#232A7D] mb-6">
                Current Performance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#009FE3] mb-1 transition-all group-hover:text-[#005fa3]">
                    {uptime}%
                  </div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </motion.div>
                <motion.div
                  className="p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,165,0,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#FFA500] mb-1 transition-all group-hover:text-[#ff8c00]">
                    {responseTime} min
                  </div>
                  <div className="text-sm text-gray-600">Avg. Response Time</div>
                </motion.div>
                <motion.div
                  className="p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#009FE3] mb-1 transition-all group-hover:text-[#005fa3]">
                    {resolutionTime} hrs
                  </div>
                  <div className="text-sm text-gray-600">Avg. Resolution Time</div>
                </motion.div>
                <motion.div
                  className="p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,165,0,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-[#FFA500] mb-1 transition-all group-hover:text-[#ff8c00]">
                    {satisfaction}%
                  </div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
            {/* Performance Trends */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#232A7D] mb-6">
                Performance Trends
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div>
                    <h4 className="font-medium text-[#232A7D]">Service Requests</h4>
                    <div className="text-2xl font-bold text-[#009FE3] transition-all group-hover:text-[#005fa3]">
                      {serviceRequests}
                    </div>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowPathIcon className="w-5 h-5 mr-1" />
                    <span className="font-medium">+15%</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div>
                    <h4 className="font-medium text-[#232A7D]">Resolution Rate</h4>
                    <div className="text-2xl font-bold text-[#009FE3] transition-all group-hover:text-[#005fa3]">
                      {resolutionRate}%
                    </div>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowPathIcon className="w-5 h-5 mr-1" />
                    <span className="font-medium">+5%</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div>
                    <h4 className="font-medium text-[#232A7D]">First Contact Resolution</h4>
                    <div className="text-2xl font-bold text-[#009FE3] transition-all group-hover:text-[#005fa3]">
                      {firstContact}%
                    </div>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowPathIcon className="w-5 h-5 mr-1" />
                    <span className="font-medium">+8%</span>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer group"
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.10)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div>
                    <h4 className="font-medium text-[#232A7D]">Client Satisfaction</h4>
                    <div className="text-2xl font-bold text-[#009FE3] transition-all group-hover:text-[#005fa3]">
                      {clientSatisfaction}/5
                    </div>
                  </div>
                  <div className="flex items-center text-green-500">
                    <ArrowPathIcon className="w-5 h-5 mr-1" />
                    <span className="font-medium">+0.2</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#009FE3] to-[#005fa3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Services?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join hundreds of satisfied clients who have improved their IT service delivery with our solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:from-[#ff8c00] hover:to-[#FFA500] transition-colors focus:outline-none focus:ring-4 focus:ring-[#009FE3]/40"
              onClick={() => setModalOpen(true)}
              aria-label="Get Started Today"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="process" />
      </Suspense>
    </div>
  );
};

export default ITServiceManagement; 