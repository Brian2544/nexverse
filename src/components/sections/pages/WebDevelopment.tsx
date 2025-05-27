import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ImageWithFallback from '../../common/ImageWithFallback';
import ContactModal from '../../modals/ContactModal';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

interface WebDevelopmentProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const brandColors = {
  deepBlue: '#1e2761',
  lightBlue: '#009FE3',
  accentOrange: '#FFA500',
};

const painPoints = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-[#009FE3]" />, title: 'Security Risks',
    desc: 'Outdated websites are vulnerable to attacks and data breaches.'
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-[#FFA500]" />, title: 'Poor Mobile Experience',
    desc: 'Non-responsive sites lose over 50% of potential customers.'
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8 text-[#1e2761]" />, title: 'Slow Performance',
    desc: 'Slow load times drive visitors away and hurt SEO.'
  },
  {
    icon: <PaintBrushIcon className="w-8 h-8 text-[#009FE3]" />, title: 'Uninspiring Design',
    desc: 'First impressions matter—outdated design reduces trust.'
  },
];

const features = [
  {
    title: 'Custom Web Development',
    description: 'Tailored web solutions built with modern technologies and best practices.',
    icon: CodeBracketIcon,
    color: 'bg-[#009FE3]'
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first, pixel-perfect designs for every device.',
    icon: DevicePhoneMobileIcon,
    color: 'bg-[#FFA500]'
  },
  {
    title: 'UI/UX Excellence',
    description: 'Intuitive interfaces and delightful user experiences.',
    icon: PaintBrushIcon,
    color: 'bg-[#1e2761]'
  },
  {
    title: 'Performance Optimization',
    description: 'Lightning-fast websites with optimized loading times.',
    icon: RocketLaunchIcon,
    color: 'bg-[#009FE3]'
  },
  {
    title: 'Security Implementation',
    description: 'Robust security measures to protect your web applications.',
    icon: ShieldCheckIcon,
    color: 'bg-[#FFA500]'
  },
  {
    title: 'Ongoing Support',
    description: 'Continuous support and maintenance for peace of mind.',
    icon: WrenchScrewdriverIcon,
    color: 'bg-[#1e2761]'
  },
];

const portfolio = [
  {
    title: "Enterprise E-commerce Platform",
    description: "Scalable e-commerce solution with real-time inventory, AI-powered recommendations, and advanced analytics",
    image: "/images/portfolio/ecommerce.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Redis", "TensorFlow"],
    metrics: "2M+ monthly users, 99.9% uptime, 40% conversion rate increase",
    industry: "Retail",
    features: ["AI Recommendations", "Real-time Analytics", "Multi-currency Support", "Advanced Search"]
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management system with telemedicine capabilities and secure data handling",
    image: "/images/portfolio/healthcare.jpg",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Azure", "Docker", "Kubernetes"],
    metrics: "HIPAA compliant, 50k+ active users, 99.99% data accuracy",
    industry: "Healthcare",
    features: ["Telemedicine", "EHR Integration", "Secure Messaging", "Analytics Dashboard"]
  },
  {
    title: "Financial Analytics Platform",
    description: "Real-time financial analytics platform with predictive modeling and automated reporting",
    image: "/images/portfolio/finance.jpg",
    technologies: ["Angular", "TypeScript", "GraphQL", "Docker", "Python", "TensorFlow"],
    metrics: "100ms response time, 99.99% accuracy, 60% efficiency gain",
    industry: "Finance",
    features: ["Real-time Analytics", "Predictive Modeling", "Automated Reporting", "Risk Assessment"]
  },
  {
    title: "Smart Manufacturing System",
    description: "IoT-enabled manufacturing platform with real-time monitoring and predictive maintenance",
    image: "/images/portfolio/manufacturing.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS IoT", "Python", "TensorFlow"],
    metrics: "30% efficiency increase, 99.95% uptime, 25% cost reduction",
    industry: "Manufacturing",
    features: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain Analytics"]
  },
  {
    title: "Educational Learning Platform",
    description: "AI-powered learning management system with personalized learning paths and analytics",
    image: "/images/portfolio/education.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Python", "TensorFlow"],
    metrics: "100k+ active students, 45% engagement increase, 99.9% uptime",
    industry: "Education",
    features: ["AI Learning Paths", "Interactive Content", "Progress Tracking", "Analytics Dashboard"]
  },
  {
    title: "Smart City Platform",
    description: "IoT-based smart city solution for traffic management, waste management, and public services",
    image: "/images/portfolio/smartcity.jpg",
    technologies: ["React", "Node.js", "MongoDB", "AWS IoT", "Python", "TensorFlow"],
    metrics: "40% efficiency increase, 99.99% uptime, 35% cost savings",
    industry: "Government",
    features: ["Traffic Management", "Waste Management", "Public Services", "Analytics Dashboard"]
  }
];

const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "/images/tech/react.svg", description: "Modern UI development" },
      { name: "Vue.js", icon: "/images/tech/vue.svg", description: "Progressive framework" },
      { name: "Angular", icon: "/images/tech/angular.svg", description: "Enterprise solutions" },
      { name: "Next.js", icon: "/images/tech/nextjs.svg", description: "React framework" },
      { name: "TypeScript", icon: "/images/tech/typescript.svg", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", icon: "/images/tech/tailwind.svg", description: "Utility-first CSS" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "/images/tech/nodejs.svg", description: "JavaScript runtime" },
      { name: "Python", icon: "/images/tech/python.svg", description: "AI & ML development" },
      { name: "Java", icon: "/images/tech/java.svg", description: "Enterprise applications" },
      { name: "Go", icon: "/images/tech/go.svg", description: "High-performance services" },
      { name: "GraphQL", icon: "/images/tech/graphql.svg", description: "API query language" },
      { name: "REST", icon: "/images/tech/rest.svg", description: "API architecture" }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: "/images/tech/mongodb.svg", description: "NoSQL database" },
      { name: "PostgreSQL", icon: "/images/tech/postgresql.svg", description: "Relational database" },
      { name: "Redis", icon: "/images/tech/redis.svg", description: "In-memory cache" },
      { name: "MySQL", icon: "/images/tech/mysql.svg", description: "Open-source RDBMS" },
      { name: "Elasticsearch", icon: "/images/tech/elasticsearch.svg", description: "Search engine" },
      { name: "Cassandra", icon: "/images/tech/cassandra.svg", description: "Distributed database" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "/images/tech/aws.svg", description: "Cloud platform" },
      { name: "Azure", icon: "/images/tech/azure.svg", description: "Microsoft cloud" },
      { name: "Docker", icon: "/images/tech/docker.svg", description: "Containerization" },
      { name: "Kubernetes", icon: "/images/tech/kubernetes.svg", description: "Container orchestration" },
      { name: "Terraform", icon: "/images/tech/terraform.svg", description: "Infrastructure as code" },
      { name: "Jenkins", icon: "/images/tech/jenkins.svg", description: "CI/CD automation" }
    ]
  },
  {
    category: "AI & ML",
    technologies: [
      { name: "TensorFlow", icon: "/images/tech/tensorflow.svg", description: "Machine learning" },
      { name: "PyTorch", icon: "/images/tech/pytorch.svg", description: "Deep learning" },
      { name: "Scikit-learn", icon: "/images/tech/scikit.svg", description: "ML algorithms" },
      { name: "OpenCV", icon: "/images/tech/opencv.svg", description: "Computer vision" },
      { name: "NLTK", icon: "/images/tech/nltk.svg", description: "Natural language processing" },
      { name: "Pandas", icon: "/images/tech/pandas.svg", description: "Data analysis" }
    ]
  }
];

const testimonials = [
  {
    quote: 'Our new website doubled our leads in 3 months. The NexVerse team delivered beyond expectations!',
    name: 'Alex N.',
    company: 'RetailPro',
  },
  {
    quote: 'The design is stunning, and our customers love the new experience. Highly recommended!',
    name: 'Priya S.',
    company: 'HealthSync',
  },
  {
    quote: "NexVerse solved our performance and security issues—now our site is fast and secure.",
    name: 'James T.',
    company: 'FinEdge',
  },
];

const WebDevelopment: React.FC<WebDevelopmentProps> = ({ openContactModal }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-blue-50">
      {/* SEO */}
      <head>
        <title>Web Development Services | NexVerse Consulting Group</title>
        <meta name="description" content="Modern, secure, and high-converting web development solutions from NexVerse. Custom design, performance, and support. Book a free consultation." />
      </head>

      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-20 min-h-[60vh] overflow-hidden" style={{background: 'none'}}>
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/business_application1.png"
          aria-hidden="true"
        >
          <source src="/assets/images/business_application hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e2761]/80 to-[#009FE3]/60 z-0 pointer-events-none" aria-hidden="true" />
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-2xl text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg text-white">
            Transform Your Business with Advanced Web Development
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Modern, secure, and high-converting websites that drive real business results.
          </p>
          <button
            className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 focus:scale-105 focus:ring-4 focus:ring-[#FFA500]/40 transition text-white text-lg focus:outline-none animate-pulse-once"
            onClick={() => setModalOpen(true)}
            aria-label="Get a Free Web Consultation"
          >
            Get a Free Web Consultation
          </button>
          {/* Scroll Indicator */}
          <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 flex flex-col items-center" aria-hidden="true">
            <span className="block w-1.5 h-6 rounded-full bg-white/70 animate-bounce mb-1" />
            <span className="text-xs text-white/80">Scroll</span>
          </div>
        </motion.div>
      </section>

      {/* 2. Pain Points / Problems We Solve */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e2761] mb-6 text-center">Is Your Website Costing You Customers?</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {painPoints.map((p) => (
              <div key={p.title} className="flex flex-col items-center">
                {p.icon}
                <span className="text-[#1e2761] font-semibold mt-2">{p.title}</span>
                <span className="text-[#3b4a6b] text-sm text-center">{p.desc}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-[#FFA500] text-white px-7 py-3 rounded-lg font-semibold shadow hover:bg-[#ffb733] transition focus:outline-none focus:ring-4 focus:ring-[#009FE3]/40"
              onClick={() => setModalOpen(true)}
              aria-label="Talk to a Web Expert"
            >
              Talk to a Web Expert
            </button>
          </div>
        </motion.div>
      </section>

      {/* 3. Our Solutions / Services */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e2761] mb-8 text-center">Comprehensive Web Development Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-[#009FE3] hover:scale-105 transition-transform">
                <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1e2761] mt-2 mb-2">{feature.title}</h3>
                <p className="text-[#3b4a6b] text-sm mb-2">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="bg-gradient-to-r from-[#009FE3] to-[#FFA500] text-white px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
              onClick={() => setModalOpen(true)}
              aria-label="See How It Works"
            >
              See How It Works
            </button>
          </div>
        </motion.div>
      </section>

      {/* 4. Social Proof / Testimonials */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e2761] mb-8 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-[#FFA500]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <p className="text-[#1e2761] italic mb-4">"{t.quote}"</p>
                <span className="font-bold text-[#009FE3]">{t.name}</span>
                <span className="text-xs text-[#3b4a6b]">{t.company}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="bg-[#FFA500] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#ffb733] transition focus:outline-none focus:ring-4 focus:ring-[#009FE3]/40"
              onClick={() => setModalOpen(true)}
              aria-label="Book a Free Consultation"
            >
              Book a Free Consultation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2761] mb-4 text-center">Our Portfolio</h2>
          <p className="text-[#3b4a6b] text-center mb-12 max-w-3xl mx-auto">Explore our diverse range of successful projects across various industries, showcasing our expertise in delivering cutting-edge solutions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e2761]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-[#009FE3] text-white text-xs font-semibold rounded-full">
                      {project.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e2761] mb-2">{project.title}</h3>
                  <p className="text-[#3b4a6b] text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#009FE3] mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-xs text-[#3b4a6b]">
                          <span className="w-1.5 h-1.5 bg-[#FFA500] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#009FE3] mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-[#f0f9ff] text-[#1e2761] text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-[#e0f2fe] pt-4">
                    <p className="text-sm font-semibold text-[#009FE3]">{project.metrics}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2761] mb-4 text-center">Our Technology Stack</h2>
          <p className="text-[#3b4a6b] text-center mb-12 max-w-3xl mx-auto">We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for our clients.</p>
          
          <div className="space-y-12">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#1e2761] mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col items-center text-center">
                        <ImageWithFallback
                          src={tech.icon}
                          alt={tech.name}
                          className="w-12 h-12 mb-3"
                        />
                        <h4 className="font-semibold text-[#1e2761] mb-1">{tech.name}</h4>
                        <p className="text-xs text-[#3b4a6b]">{tech.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Move Final CTA Banner here, just above the ContactModal/footer */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#FFA500] flex flex-col items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Elevate Your Web Presence?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Let's build a website that converts. Book your free consultation or call us at <a href="tel:+254720943968" className="underline text-[#FFA500] hover:text-white">+254 720 943 968</a>
          </p>
          <button
            className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            onClick={() => setModalOpen(true)}
            aria-label="Book My Free Web Consultation"
          >
            Book My Free Web Consultation
          </button>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="process" />
    </div>
  );
};

export default WebDevelopment; 