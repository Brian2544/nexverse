import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
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
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ITServiceManagement: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Service Desk',
      description: '24/7 support and incident management for your IT services',
      icon: WrenchScrewdriverIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Response Time',
      description: 'Quick response and resolution of IT service requests',
      icon: ClockIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Team Management',
      description: 'Expert IT service teams aligned with your business needs',
      icon: UserGroupIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and optimization of IT services',
      icon: ChartBarIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Service Level Agreements',
      description: 'Clear SLAs to ensure quality IT service delivery',
      icon: DocumentCheckIcon,
      color: 'bg-red-500'
    },
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive management of IT infrastructure',
      icon: ServerIcon,
      color: 'bg-indigo-500'
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
        "Monthly service review"
      ],
      icon: ShieldCheckIcon
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
        "Quarterly service review"
      ],
      icon: CheckCircleIcon
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
        "Annual service review"
      ],
      icon: DocumentCheckIcon
    }
  ];

  const supportProcess = [
    {
      step: 1,
      title: "Issue Detection",
      description: "Automated monitoring and alerting system",
      icon: ExclamationCircleIcon,
      color: "bg-red-500"
    },
    {
      step: 2,
      title: "Initial Response",
      description: "Quick acknowledgment and assessment",
      icon: ClockIcon,
      color: "bg-yellow-500"
    },
    {
      step: 3,
      title: "Resolution",
      description: "Expert problem-solving and implementation",
      icon: WrenchScrewdriverIcon,
      color: "bg-green-500"
    },
    {
      step: 4,
      title: "Verification",
      description: "Quality assurance and client confirmation",
      icon: CheckCircleIcon,
      color: "bg-blue-500"
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/it-service-hero.jpg"
            alt="IT Service Management"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#009FE3]/90 to-[#009FE3]/70" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Service Management
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Streamline your IT services with professional management solutions
          </p>
        </motion.div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          {...fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
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

      {/* Service Level Agreements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Service Level Agreements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, measurable service commitments for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <motion.div
                key={level.tier}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {level.tier}
                  </h3>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <level.icon className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-medium text-gray-900">{level.responseTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Resolution Time</span>
                    <span className="font-medium text-gray-900">{level.resolutionTime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uptime</span>
                    <span className="font-medium text-gray-900">{level.uptime}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
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
                  className="relative bg-white rounded-2xl p-8 shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time service performance and trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Current Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Current Performance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {performanceMetrics.current.uptime}
                  </div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {performanceMetrics.current.responseTime}
                  </div>
                  <div className="text-sm text-gray-600">Avg. Response Time</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {performanceMetrics.current.resolutionTime}
                  </div>
                  <div className="text-sm text-gray-600">Avg. Resolution Time</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {performanceMetrics.current.satisfaction}
                  </div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Performance Trends */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Performance Trends
              </h3>
              <div className="space-y-4">
                {performanceMetrics.trends.map((trend, index) => (
                  <motion.div
                    key={trend.metric}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{trend.metric}</h4>
                      <div className="text-2xl font-bold text-gray-900">
                        {trend.current}
                      </div>
                    </div>
                    <div className={`flex items-center ${
                      trend.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      <ArrowPathIcon className="w-5 h-5 mr-1" />
                      <span className="font-medium">{trend.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServiceManagement; 