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

const GovernanceEnterpriseIT: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/governance-hero.jpg"
            alt="Governance of Enterprise IT"
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
            Governance of Enterprise IT
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Establish effective IT governance to drive business success
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
                    {complianceStatus.overall.score}%
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
                          {framework.score}%
                        </div>
                        <div className={`text-sm font-medium ${
                          framework.status === 'Compliant' ? 'text-green-500' : 'text-yellow-500'
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
    </div>
  );
};

export default GovernanceEnterpriseIT; 