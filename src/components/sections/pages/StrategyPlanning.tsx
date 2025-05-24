import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import ImageWithFallback from '../../common/ImageWithFallback';
import { 
  ChartBarIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  DocumentCheckIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const StrategyPlanning: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Strategic Analysis',
      description: 'Comprehensive analysis of market trends and business opportunities',
      icon: ChartBarIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Innovation Strategy',
      description: 'Forward-thinking approaches to drive business innovation',
      icon: LightBulbIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Performance Metrics',
      description: 'Data-driven KPIs to measure and track strategic success',
      icon: PresentationChartLineIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Growth Planning',
      description: 'Scalable strategies for sustainable business growth',
      icon: RocketLaunchIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Team Alignment',
      description: 'Aligning organizational goals with team objectives',
      icon: UserGroupIcon,
      color: 'bg-red-500'
    },
    {
      title: 'Implementation Roadmap',
      description: 'Clear, actionable plans for strategy execution',
      icon: DocumentCheckIcon,
      color: 'bg-indigo-500'
    }
  ];

  const successMetrics = [
    {
      title: "Revenue Growth",
      value: "45%",
      description: "Average increase in client revenue",
      icon: CurrencyDollarIcon,
      color: "text-green-500"
    },
    {
      title: "Market Share",
      value: "30%",
      description: "Average market share growth",
      icon: ChartBarIcon,
      color: "text-blue-500"
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      description: "Client satisfaction rate",
      icon: UserGroupIcon,
      color: "text-purple-500"
    },
    {
      title: "Global Reach",
      value: "25+",
      description: "Countries served",
      icon: GlobeAltIcon,
      color: "text-orange-500"
    }
  ];

  const industries = [
    {
      name: "Technology",
      description: "Digital transformation and innovation strategies",
      image: "/images/industries/tech.jpg",
      clients: ["TechCorp", "InnovateTech", "Digital Solutions"]
    },
    {
      name: "Healthcare",
      description: "Healthcare modernization and compliance",
      image: "/images/industries/healthcare.jpg",
      clients: ["MediCare", "HealthPlus", "Life Sciences"]
    },
    {
      name: "Finance",
      description: "Financial services optimization",
      image: "/images/industries/finance.jpg",
      clients: ["Global Finance", "SecureBank", "Wealth Management"]
    },
    {
      name: "Manufacturing",
      description: "Industry 4.0 and smart manufacturing",
      image: "/images/industries/manufacturing.jpg",
      clients: ["AutoTech", "SmartFactory", "Industrial Solutions"]
    }
  ];

  const transformations = [
    {
      title: "Digital Transformation Success",
      client: "TechCorp",
      challenge: "Legacy systems hindering growth",
      solution: "Implemented cloud-first strategy",
      results: [
        "60% reduction in operational costs",
        "40% increase in customer engagement",
        "50% faster time-to-market"
      ],
      image: "/images/transformations/techcorp.jpg"
    },
    {
      title: "Healthcare Innovation",
      client: "MediCare",
      challenge: "Outdated patient management",
      solution: "Modern healthcare platform",
      results: [
        "70% improved patient satisfaction",
        "45% reduction in wait times",
        "30% increase in operational efficiency"
      ],
      image: "/images/transformations/medicare.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-4 text-[#009FE3] font-semibold text-lg">• Impact</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Real results that drive lasting impact for everyone</h2>
          <p className="text-lg text-gray-600 mb-12">We deliver tailored strategies, innovative solutions, and dedicated support to drive lasting growth</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          {/* Left Stats */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-[#009FE3] to-yellow-400 text-white font-bold px-5 py-2 rounded-full text-lg shadow">$7M+</span>
              <span className="text-gray-700 font-medium text-lg">Revenue</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-[#009FE3] to-yellow-400 text-white font-bold px-5 py-2 rounded-full text-lg shadow">72%</span>
              <span className="text-gray-700 font-medium text-lg">Growth</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-[#009FE3] to-yellow-400 text-white font-bold px-5 py-2 rounded-full text-lg shadow">65%</span>
              <span className="text-gray-700 font-medium text-lg">Skills</span>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <ImageWithFallback
              src="/images/impact/profile.jpg"
              alt="Impact Profile"
              className="w-64 h-64 object-cover rounded-3xl shadow-lg border-4 border-white"
              priority
            />
          </div>
          {/* Right Stats */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
              <span className="bg-gradient-to-r from-[#009FE3] to-yellow-400 text-white font-bold px-5 py-2 rounded-full text-lg shadow">78%</span>
              <span className="text-gray-700 font-medium text-lg">Impact</span>
            </div>
            <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
              <span className="bg-gradient-to-r from-[#009FE3] to-yellow-400 text-white font-bold px-5 py-2 rounded-full text-lg shadow">1%</span>
              <span className="text-gray-700 font-medium text-lg">Designers</span>
            </div>
            <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
              <span className="bg-gradient-to-r from-[#009FE3] to-yellow-400 text-white font-bold px-5 py-2 rounded-full text-lg shadow">10+</span>
              <span className="text-gray-700 font-medium text-lg">Consultants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/hero/strategy-planning-hero.jpg"
            alt="Strategy Planning"
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
            Strategy Planning & Execution
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Transform your vision into actionable strategies that drive success
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
            Our Strategic Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive strategy planning and execution services
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

      {/* Success Metrics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic approach delivers measurable business outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${metric.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.title}
                </h3>
                <p className="text-gray-600">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain knowledge across key industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={industry.image}
                    alt={industry.name}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">Notable Clients:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map(client => (
                        <span 
                          key={client}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Transformations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Client Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real success stories from our strategic partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.title}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={transformation.image}
                    alt={transformation.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {transformation.title}
                  </h3>
                  <p className="text-lg text-[#009FE3] font-medium mb-4">
                    {transformation.client}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Challenge</h4>
                      <p className="text-gray-600">{transformation.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Solution</h4>
                      <p className="text-gray-600">{transformation.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {transformation.results.map((result, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <span className="w-2 h-2 bg-[#009FE3] rounded-full mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyPlanning; 