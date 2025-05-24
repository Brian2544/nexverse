import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from '../../common/ImageWithFallback';
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
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const InformationSecurity: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your security infrastructure and protocols',
      icon: ShieldCheckIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Data Encryption',
      description: 'Advanced encryption solutions to protect sensitive information',
      icon: LockClosedIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Access Control',
      description: 'Robust authentication and authorization systems',
      icon: KeyIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Compliance Management',
      description: 'Ensure adherence to security standards and regulations',
      icon: DocumentCheckIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Identity Protection',
      description: 'Comprehensive solutions to safeguard user identities',
      icon: ShieldExclamationIcon,
      color: 'bg-red-500'
    },
    {
      title: 'Infrastructure Security',
      description: 'Protect your IT infrastructure from threats and vulnerabilities',
      icon: ServerIcon,
      color: 'bg-indigo-500'
    }
  ];

  const complianceBadges = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      icon: "/images/compliance/iso27001.svg",
      year: "2023"
    },
    {
      name: "SOC 2",
      description: "Service Organization Control",
      icon: "/images/compliance/soc2.svg",
      year: "2023"
    },
    {
      name: "GDPR",
      description: "Data Protection Regulation",
      icon: "/images/compliance/gdpr.svg",
      year: "2023"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability",
      icon: "/images/compliance/hipaa.svg",
      year: "2023"
    }
  ];

  const threatIntelligence = {
    metrics: [
      {
        title: "Threats Blocked",
        value: "1.2M+",
        change: "+15%",
        trend: "up"
      },
      {
        title: "Response Time",
        value: "< 15min",
        change: "-20%",
        trend: "down"
      },
      {
        title: "Active Threats",
        value: "24/7",
        change: "100%",
        trend: "up"
      },
      {
        title: "Security Score",
        value: "98/100",
        change: "+5%",
        trend: "up"
      }
    ],
    recentThreats: [
      {
        type: "Ransomware",
        severity: "High",
        status: "Blocked",
        time: "2 hours ago"
      },
      {
        type: "Phishing",
        severity: "Medium",
        status: "Contained",
        time: "5 hours ago"
      },
      {
        type: "DDoS",
        severity: "High",
        status: "Mitigated",
        time: "1 day ago"
      }
    ]
  };

  const assessmentTools = [
    {
      name: "Vulnerability Scanner",
      description: "Automated security scanning and assessment",
      features: [
        "Real-time vulnerability detection",
        "Automated patch management",
        "Compliance reporting"
      ],
      icon: ShieldCheckIcon
    },
    {
      name: "Penetration Testing",
      description: "Simulated cyber attacks to identify weaknesses",
      features: [
        "Network penetration testing",
        "Web application security",
        "Social engineering assessment"
      ],
      icon: LockClosedIcon
    },
    {
      name: "Security Analytics",
      description: "Advanced threat detection and analysis",
      features: [
        "Behavioral analytics",
        "Threat intelligence integration",
        "Real-time monitoring"
      ],
      icon: ChartBarIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/hero/info-security-hero.jpg"
            alt="Information Security"
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
            Information Security
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Protect your digital assets with enterprise-grade security solutions
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
            Our Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive information security services to protect your business
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

      {/* Compliance Badges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Security Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified to the highest security standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <ImageWithFallback
                    src={badge.icon}
                    alt={badge.name}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {badge.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {badge.description}
                </p>
                <span className="text-sm text-[#009FE3] font-medium">
                  Certified {badge.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Dashboard Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Threat Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time security monitoring and threat detection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {threatIntelligence.metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.title}
                  </h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {metric.value}
                    </span>
                    <span className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Threats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Recent Threats
              </h3>
              <div className="space-y-4">
                {threatIntelligence.recentThreats.map((threat, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        threat.severity === 'High' ? 'bg-red-100' : 'bg-yellow-100'
                      }`}>
                        <ExclamationTriangleIcon className={`w-5 h-5 ${
                          threat.severity === 'High' ? 'text-red-500' : 'text-yellow-500'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{threat.type}</h4>
                        <p className="text-sm text-gray-500">{threat.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        threat.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {threat.severity}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {threat.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Assessment Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Security Assessment Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security testing and analysis tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assessmentTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <tool.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tool.description}
                </p>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  </div>
);
};

export default InformationSecurity; 