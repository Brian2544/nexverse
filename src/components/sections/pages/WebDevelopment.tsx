import React from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from '../../common/ImageWithFallback';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const WebDevelopment: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: 'Custom Web Development',
      description: 'Tailored web solutions built with modern technologies and best practices',
      icon: CodeBracketIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Responsive Design',
      description: 'Beautiful, mobile-first designs that work flawlessly across all devices',
      icon: DevicePhoneMobileIcon,
      color: 'bg-green-500'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces and engaging user experiences',
      icon: PaintBrushIcon,
      color: 'bg-purple-500'
    },
    {
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with optimized loading times',
      icon: RocketLaunchIcon,
      color: 'bg-orange-500'
    },
    {
      title: 'Security Implementation',
      description: 'Robust security measures to protect your web applications',
      icon: ShieldCheckIcon,
      color: 'bg-red-500'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website running smoothly',
      icon: WrenchScrewdriverIcon,
      color: 'bg-indigo-500'
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with real-time inventory",
      image: "/images/portfolio/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      metrics: "2M+ monthly users, 99.9% uptime"
    },
    {
      title: "Healthcare Portal",
      description: "Secure patient management system",
      image: "/images/portfolio/healthcare.jpg",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Azure"],
      metrics: "HIPAA compliant, 50k+ active users"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics platform",
      image: "/images/portfolio/finance.jpg",
      technologies: ["Angular", "TypeScript", "GraphQL", "Docker"],
      metrics: "100ms response time, 99.99% accuracy"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "/images/tech/react.svg" },
        { name: "Vue.js", icon: "/images/tech/vue.svg" },
        { name: "Angular", icon: "/images/tech/angular.svg" },
        { name: "Next.js", icon: "/images/tech/nextjs.svg" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", icon: "/images/tech/nodejs.svg" },
        { name: "Python", icon: "/images/tech/python.svg" },
        { name: "Java", icon: "/images/tech/java.svg" },
        { name: "Go", icon: "/images/tech/go.svg" }
      ]
    },
    {
      category: "Database",
      technologies: [
        { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
        { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
        { name: "Redis", icon: "/images/tech/redis.svg" },
        { name: "MySQL", icon: "/images/tech/mysql.svg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/hero/web-dev-hero.jpg"
            alt="Web Development"
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
            Web Design & Development
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Create stunning, high-performance websites that drive business growth
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
            Our Web Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web solutions tailored to your business needs
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent web development projects and success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-[#009FE3] font-medium">
                    {project.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cutting-edge technologies to build robust web solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map(tech => (
                    <div 
                      key={tech.name}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-8 h-8 relative">
                        <ImageWithFallback
                          src={tech.icon}
                          alt={tech.name}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  </div>
);
};

export default WebDevelopment; 