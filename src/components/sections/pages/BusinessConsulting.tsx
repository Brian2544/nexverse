import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CogIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface BusinessConsultingProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const BusinessConsulting: React.FC<BusinessConsultingProps> = ({ openContactModal }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Business Process Optimization',
      description: 'Streamline operations and enhance efficiency through data-driven process improvements.',
      icon: ChartBarIcon,
      image: '/assets/images/business/process-optimization.jpg',
      features: ['Process Analysis', 'Efficiency Metrics', 'Workflow Automation', 'Performance Monitoring']
    },
    {
      title: 'Organizational Development',
      description: 'Build high-performing teams and create a culture of continuous improvement.',
      icon: UserGroupIcon,
      image: '/assets/images/business/org-development.jpg',
      features: ['Team Building', 'Leadership Development', 'Change Management', 'Culture Transformation']
    },
    {
      title: 'Operational Excellence',
      description: 'Achieve operational excellence through proven methodologies and best practices.',
      icon: CogIcon,
      image: '/assets/images/business/operational-excellence.jpg',
      features: ['Lean Management', 'Quality Control', 'Resource Optimization', 'Performance Metrics']
    },
    {
      title: 'Business Strategy',
      description: 'Develop winning strategies that drive growth and create sustainable advantages.',
      icon: PresentationChartLineIcon,
      image: '/assets/images/business/business-strategy.jpg',
      features: ['Market Analysis', 'Competitive Strategy', 'Growth Planning', 'Resource Allocation']
    }
  ];

  const caseStudies = [
    {
      title: 'Manufacturing Excellence',
      description: 'Helped a manufacturing company achieve 35% cost reduction and 40% productivity increase through process optimization.',
      image: '/assets/images/business/case-study-1.jpg'
    },
    {
      title: 'Retail Transformation',
      description: 'Guided a retail chain through digital transformation, resulting in 50% revenue growth and improved customer satisfaction.',
      image: '/assets/images/business/case-study-2.jpg'
    },
    {
      title: 'Healthcare Innovation',
      description: 'Implemented operational improvements in a healthcare provider, reducing wait times by 60% and increasing patient satisfaction.',
      image: '/assets/images/business/case-study-3.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/images/business_application.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#232A7D]/90 to-[#009FE3]/60 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Business Consulting
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Transform your business with expert guidance and proven methodologies.
              </p>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-base min-w-[90px] max-w-[220px] mx-auto"
                onClick={() => openContactModal()}
              >
                <span className="mr-2">Get Started</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#009FE3] group-hover:bg-gradient-to-r group-hover:from-[#FFA500] group-hover:to-[#009FE3] group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
        </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#232A7D] mb-6">Business Excellence</h2>
            <p className="text-lg text-[#232A7D]/80 leading-relaxed">
              At NexVerse, we combine deep industry expertise with innovative thinking to help organizations navigate complex business challenges and seize new opportunities. Our business consulting services are designed to deliver measurable results and sustainable competitive advantage.
            </p>
          </motion.div>

          {/* Services Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.15)' }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-[#009FE3]/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232A7D]/60 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#009FE3]" />
        </div>
                  <h3 className="text-xl font-bold text-[#009FE3] mb-3 text-center group-hover:text-[#FFA500] transition-colors duration-300">{service.title}</h3>
                  <p className="text-[#232A7D]/80 mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-[#232A7D]/70">
                        <span className="w-2 h-2 bg-[#FFA500] rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
          </ul>
        </div>
              </motion.div>
            ))}
          </div>

          {/* Case Studies Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-[#232A7D] mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(255,165,0,0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border border-[#009FE3]/10 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <OptimizedImage
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#009FE3]/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#009FE3] mb-2 group-hover:text-[#FFA500] transition-colors duration-300">{study.title}</h3>
                    <p className="text-[#232A7D]/80">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-[#232A7D] mb-6">Why Choose NexVerse?</h2>
            <p className="text-lg text-[#232A7D]/80 leading-relaxed mb-8">
              With our headquarters in Westlands, Nairobi, we bring a unique blend of local expertise and global best practices. Our team of seasoned business consultants has helped numerous organizations across East Africa achieve their business objectives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#009FE3]/10 rounded-xl flex flex-col items-center">
                <svg className="w-10 h-10 text-[#009FE3] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v7c0 2.21-3.582 4-8 4z" /></svg>
                <h3 className="text-xl font-bold text-[#009FE3] mb-2">Industry Expertise</h3>
                <p className="text-[#232A7D]/80">Deep understanding of business challenges and solutions</p>
              </div>
              <div className="p-6 bg-[#FFA500]/10 rounded-xl flex flex-col items-center">
                <svg className="w-10 h-10 text-[#FFA500] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <h3 className="text-xl font-bold text-[#FFA500] mb-2">Proven Results</h3>
                <p className="text-[#232A7D]/80">Track record of successful business transformations</p>
              </div>
              <div className="p-6 bg-[#009FE3]/10 rounded-xl flex flex-col items-center">
                <svg className="w-10 h-10 text-[#009FE3] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                <h3 className="text-xl font-bold text-[#009FE3] mb-2">Customized Approach</h3>
                <p className="text-[#232A7D]/80">Tailored solutions for your unique challenges</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section - Professional Carousel Style */}
          <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#232A7D] mb-3">What Our Clients Say</h2>
              <div className="h-1 w-16 bg-[#009FE3] mx-auto mt-2 mb-4 rounded-full"></div>
              <p className="text-[#232A7D]/70 max-w-2xl mx-auto">Hear from the organizations who have transformed their business with NexVerse.</p>
            </div>
            {/* Cards Grid - Now 6 testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  initials: 'JM',
                  name: 'Jane M.',
                  role: 'CEO, FinTech Co.',
                  roleColor: 'text-[#009FE3]',
                  quote: 'NexVerse helped us streamline our operations and achieve measurable growth. Their business expertise is unmatched.',
                  initialsBg: 'bg-gradient-to-br from-[#009FE3] to-[#23A6D5]'
                },
                {
                  initials: 'SK',
                  name: 'Samuel K.',
                  role: 'COO, Retail Group',
                  roleColor: 'text-[#FFA500]',
                  quote: 'The NexVerse team delivered a clear business strategy and supported us every step of the way. Highly recommended!',
                  initialsBg: 'bg-gradient-to-br from-[#FFA500] to-[#FFD580]'
                },
                {
                  initials: 'AL',
                  name: 'Amina L.',
                  role: 'Head of Operations, GrowthHub',
                  roleColor: 'text-[#009FE3]',
                  quote: 'Working with NexVerse was a game-changer. Their process optimization helped us exceed our efficiency targets.',
                  initialsBg: 'bg-gradient-to-br from-[#009FE3] to-[#23A6D5]'
                },
                {
                  initials: 'MT',
                  name: 'Michael T.',
                  role: 'Managing Director, VisionCorp',
                  roleColor: 'text-[#FFA500]',
                  quote: 'Their team\'s professionalism and business acumen made a real difference for our organization.',
                  initialsBg: 'bg-gradient-to-br from-[#FFA500] to-[#FFD580]'
                },
                {
                  initials: 'RS',
                  name: 'Rita S.',
                  role: 'Operations Director, MarketLeaders',
                  roleColor: 'text-[#009FE3]',
                  quote: 'We appreciated their tailored approach to our business needs and the measurable results we achieved.',
                  initialsBg: 'bg-gradient-to-br from-[#009FE3] to-[#23A6D5]'
                },
                {
                  initials: 'DK',
                  name: 'David K.',
                  role: 'Business Director, InnovateX',
                  roleColor: 'text-[#FFA500]',
                  quote: 'NexVerse\'s expertise in business transformation was invaluable to our project\'s success.',
                  initialsBg: 'bg-gradient-to-br from-[#FFA500] to-[#FFD580]'
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,159,227,0.12)' }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-white/90 rounded-2xl border border-[#009FE3]/20 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-0 overflow-hidden group cursor-pointer backdrop-blur-md"
                >
                  {/* Gradient Bar */}
                  <div className="h-3 w-full bg-gradient-to-r from-[#009FE3] via-[#A7A9AC] to-[#FFA500]" />
                  <div className="p-6">
                    {/* Stars */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#FFA500]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-[#232A7D]/80 text-lg italic mb-6">{testimonial.quote}</p>
                    {/* Footer */}
                    <div className="flex items-center gap-3 mt-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow ${testimonial.initialsBg}`}>{testimonial.initials}</div>
                      <div>
                        <div className="font-bold text-[#232A7D]">{testimonial.name}</div>
                        <div className={`text-sm font-semibold ${testimonial.roleColor}`}>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </section>

          {/* Call to Action Section */}
          <div className="flex justify-center mb-20">
            <motion.button
              whileHover={{ scale: 1.07, filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.97, filter: 'brightness(0.95)' }}
              className="group flex items-center px-6 py-2 rounded-full font-bold bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-base min-w-[90px] max-w-[220px]"
              onClick={() => openContactModal()}
            >
              <span className="mr-2">Book a Consultation</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#009FE3] group-hover:bg-gradient-to-r group-hover:from-[#FFA500] group-hover:to-[#009FE3] group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>
        </div>
        </div>
      </section>
  </div>
);
};

export default BusinessConsulting; 