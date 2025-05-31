import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ContactModal from '../../modals/ContactModal';
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  DevicePhoneMobileIcon, 
  ServerStackIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  LockClosedIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const brandColors = {
  deepBlue: '#1e2761',
  lightBlue: '#009FE3',
  accentOrange: '#FFA500', // Use for highlights/CTAs
};

const stats = [
  { label: 'Uptime', value: '99.99%' },
  { label: 'Devices Managed', value: '1000+' },
  { label: 'Years Experience', value: '15+' },
  { label: '24/7 Support', value: 'Yes' },
];

const solutions = [
  {
    icon: <CloudIcon className="w-8 h-8 text-[#009FE3]" />, title: 'Cloud & Hybrid Infrastructure',
    desc: 'Seamless migration, integration, and management of cloud and on-premises systems.'
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-[#FFA500]" />, title: 'Network & Security',
    desc: 'Enterprise-grade security, firewalls, and proactive threat monitoring.'
  },
  {
    icon: <ServerStackIcon className="w-8 h-8 text-[#1e2761]" />, title: 'Data Storage & Backup',
    desc: 'Reliable, scalable storage and automated backup for business continuity.'
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-[#009FE3]" />, title: 'Device & Endpoint Management',
    desc: 'Centralized management for all your devices, from desktops to mobile.'
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8 text-[#FFA500]" />, title: 'Managed IT & 24/7 Support',
    desc: 'Expert support and monitoring to keep your business running smoothly.'
  },
];

const testimonials = [
  {
    quote: 'NexVerse transformed our IT—zero downtime, seamless cloud migration, and amazing support!',
    name: 'Jane M.',
    company: '',
  },
  {
    quote: 'Their proactive approach to security and infrastructure gave us peace of mind and room to grow.',
    name: 'Samuel K.',
    company: '',
  },
  {
    quote: "We scaled our operations effortlessly thanks to NexVerse's expertise and 24/7 support.",
    name: 'Linda O.',
    company: '',
  },
];

const painPoints = [
  {
    icon: <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />,
    title: 'Security Vulnerabilities',
    description: 'Increasing cyber threats and data breaches putting your business at risk.',
    impact: 'Average cost of a data breach: $4.35M',
    solution: 'Enterprise-grade security with 24/7 threat monitoring'
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-yellow-500" />,
    title: 'System Downtime',
    description: 'Unplanned outages causing productivity loss and revenue impact.',
    impact: '1 hour of downtime can cost up to $100,000',
    solution: '99.99% uptime guarantee with proactive monitoring'
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8 text-green-500" />,
    title: 'High IT Costs',
    description: 'Rising maintenance and operational expenses.',
    impact: 'Traditional IT costs 30% more than modern solutions',
    solution: 'Cost-effective cloud and hybrid infrastructure'
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-500" />,
    title: 'Slow Performance',
    description: 'Outdated systems causing delays and frustration.',
    impact: 'Employees lose 2.5 hours per week due to slow systems',
    solution: 'Performance optimization and modern infrastructure'
  }
];

const caseStudies = [
  {
    title: 'Healthcare Provider Transformation',
    challenge: 'Legacy systems causing compliance risks and operational inefficiencies',
    solution: 'Implemented hybrid cloud infrastructure with HIPAA compliance',
    results: [
      '99.99% uptime achieved',
      '40% reduction in IT costs',
      'Zero security incidents in 2 years'
    ],
    industry: 'Healthcare'
  },
  {
    title: 'Financial Services Modernization',
    challenge: 'Outdated infrastructure limiting growth and innovation',
    solution: 'Deployed secure, scalable cloud infrastructure with real-time monitoring',
    results: [
      '50% faster transaction processing',
      '60% reduction in system downtime',
      'ROI achieved in 8 months'
    ],
    industry: 'Financial Services'
  },
  {
    title: 'Manufacturing Digital Transformation',
    challenge: 'Disconnected systems affecting production efficiency',
    solution: 'Integrated IoT infrastructure with predictive maintenance',
    results: [
      '30% increase in production efficiency',
      '25% reduction in maintenance costs',
      'Real-time analytics dashboard'
    ],
    industry: 'Manufacturing'
  }
];

const serviceTiers = [
  {
    name: 'Essential',
    price: 'Custom',
    features: [
      'Basic IT Infrastructure Setup',
      '24/7 Monitoring & Support',
      'Security Essentials',
      'Cloud Integration',
      'Backup Solutions'
    ],
    bestFor: 'Small businesses starting their digital journey'
  },
  {
    name: 'Professional',
    price: 'Custom',
    features: [
      'Everything in Essential',
      'Advanced Security Suite',
      'Hybrid Cloud Solutions',
      'Disaster Recovery',
      'Performance Optimization',
      'Dedicated Support Team'
    ],
    bestFor: 'Growing businesses needing robust infrastructure'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Professional',
      'Custom Infrastructure Design',
      'Advanced Analytics',
      'Multi-site Management',
      'Compliance Management',
      'Strategic IT Consulting',
      '24/7 Premium Support'
    ],
    bestFor: 'Large organizations requiring enterprise-grade solutions'
  }
];

const benefits = [
  {
    icon: <UserGroupIcon className="w-8 h-8 text-[#009FE3]" />,
    title: 'Enhanced Productivity',
    description: 'Streamlined workflows and automated processes boost team efficiency by up to 40%.'
  },
  {
    icon: <LockClosedIcon className="w-8 h-8 text-[#FFA500]" />,
    title: 'Advanced Security',
    description: 'Multi-layered security with AI-powered threat detection and prevention.'
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-[#1e2761]" />,
    title: 'Future-Ready',
    description: 'Scalable infrastructure that grows with your business needs.'
  }
];

interface ITInfrastructureProps {
  openContactModal: (anchorRect?: DOMRect | null) => void;
}

const ITInfrastructure: React.FC<ITInfrastructureProps> = ({ openContactModal }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    // Vertex shader program
    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
        gl_Position = aVertexPosition;
      }
    `;

    // Fragment shader program (primary colors: deep blue, light blue, accent purple/blue)
    const fsSource = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      const float overallSpeed = 0.2;
      const float gridSmoothWidth = 0.015;
      const float axisWidth = 0.05;
      const float majorLineWidth = 0.025;
      const float minorLineWidth = 0.0125;
      const float majorLineFrequency = 5.0;
      const float minorLineFrequency = 1.0;
      const vec4 gridColor = vec4(0.5);
      const float scale = 5.0;
      // Brand color: deep blue/light blue/purple
      const vec4 lineColor = vec4(0.0, 0.62, 0.89, 1.0); // #009FE3
      const float minLineWidth = 0.01;
      const float maxLineWidth = 0.2;
      const float lineSpeed = 1.0 * overallSpeed;
      const float lineAmplitude = 1.0;
      const float lineFrequency = 0.2;
      const float warpSpeed = 0.2 * overallSpeed;
      const float warpFrequency = 0.5;
      const float warpAmplitude = 1.0;
      const float offsetFrequency = 0.5;
      const float offsetSpeed = 1.33 * overallSpeed;
      const float minOffsetSpread = 0.6;
      const float maxOffsetSpread = 2.0;
      const int linesPerGroup = 16;
      #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
      #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
      #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
      #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))
      float drawGridLines(float axis) {
        return drawCrispLine(0.0, axisWidth, axis)
              + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
              + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
      }
      float drawGrid(vec2 space) {
        return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
      }
      float random(float t) {
        return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;   
      }
      float getPlasmaY(float x, float horizontalFade, float offset) {
        return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
      }
      void main() {
        vec2 fragCoord = gl_FragCoord.xy;
        vec4 fragColor;
        vec2 uv = fragCoord.xy / iResolution.xy;
        vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
        float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
        float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);
        // Wind/turbulence effect
        space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
        space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;
        vec4 lines = vec4(0.0);
        // Brand background gradient: deep blue to light blue
        vec4 bgColor1 = vec4(0.12, 0.15, 0.38, 1.0); // #1e2761
        vec4 bgColor2 = vec4(0.0, 0.62, 0.89, 1.0); // #009FE3
        for(int l = 0; l < linesPerGroup; l++) {
          float normalizedLineIndex = float(l) / float(linesPerGroup);
          float offsetTime = iTime * offsetSpeed;
          float offsetPosition = float(l) + space.x * offsetFrequency;
          float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
          float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
          float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
          float linePosition = getPlasmaY(space.x, horizontalFade, offset);
          float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);
          float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
          vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
          float circle = drawCircle(circlePosition, 0.01, space) * 4.0;
          line = line + circle;
          lines += line * lineColor * rand;
        }
        fragColor = mix(bgColor1, bgColor2, uv.x);
        fragColor *= verticalFade;
        fragColor.a = 1.0;
        fragColor += lines;
        gl_FragColor = fragColor;
      }
    `;

    function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) {
        return null;
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
      const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
      const shaderProgram = gl.createProgram();
      if (vertexShader === null || fragmentShader === null || shaderProgram === null) {
        return null;
      }
      const vShader: WebGLShader = vertexShader;
      const fShader: WebGLShader = fragmentShader;
      gl.attachShader(shaderProgram, vShader);
      gl.attachShader(shaderProgram, fShader);
      gl.linkProgram(shaderProgram);
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        return null;
      }
      return shaderProgram;
    }

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        resolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
        time: gl.getUniformLocation(shaderProgram, 'iTime'),
      },
    };

    function resizeCanvas() {
      if (!canvas || !heroRef.current || !gl) return;
      // Set canvas size to match hero section
      const rect = heroRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let startTime = Date.now();
    let animationFrameId: number;
    function render() {
      if (!gl) return;
      if (!canvas) return;
      const currentTime = (Date.now() - startTime) / 1000;
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(programInfo.program);
      gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
      gl.uniform1f(programInfo.uniformLocations.time, currentTime);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-blue-50">
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center px-6 py-20 min-h-[60vh] overflow-hidden" style={{background: 'none'}}>
        {/* WebGL Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }} />
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-2xl text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg text-white">
            Empower Your Business with Next-Gen IT Infrastructure
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Modernize, secure, and future-proof your business with NexVerse IT Infrastructure solutions.
          </p>
          <button
            className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition text-white text-lg focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            onClick={() => setModalOpen(true)}
            aria-label="Get a Free IT Assessment"
          >
            Get a Free IT Assessment
          </button>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#FFA500]">{stat.value}</span>
                <span className="text-xs text-white/80 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-16 px-4 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2761] mb-12 text-center">Common IT Infrastructure Challenges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point) => (
              <motion.div
                key={point.title}
                className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#009FE3] hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                {point.icon}
                <h3 className="text-xl font-bold text-[#1e2761] mt-4 mb-2">{point.title}</h3>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="bg-red-50 p-3 rounded-lg mb-4">
                  <p className="text-red-600 font-semibold text-sm">{point.impact}</p>
                </div>
                <p className="text-[#009FE3] font-medium">{point.solution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2761] mb-12 text-center">Why Choose Our IT Infrastructure Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                {benefit.icon}
                <h3 className="text-xl font-bold text-[#1e2761] mt-4 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Case Studies Section */}
      <section className="py-16 px-4 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2761] mb-4 text-center">Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">See how we've helped businesses across industries transform their IT infrastructure</p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.title}
                className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#009FE3] hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-block px-3 py-1 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </span>
                <h3 className="text-xl font-bold text-[#1e2761] mb-3">{study.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-[#009FE3] mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] text-white px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            >
              See More Case Studies
            </button>
          </div>
        </motion.div>
      </section>

      {/* 5. Service Tiers Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e2761] mb-4 text-center">Choose Your IT Infrastructure Solution</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Select the perfect infrastructure package for your business needs</p>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier) => (
              <motion.div
                key={tier.name}
                className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#009FE3] hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-[#1e2761] mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-[#009FE3] mb-6">{tier.price}</p>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircleIcon className="w-5 h-5 text-[#009FE3] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mb-6">{tier.bestFor}</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full bg-gradient-to-r from-[#009FE3] to-[#005fa3] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. Solutions Section */}
      <section className="py-16 px-4 bg-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e2761] mb-8 text-center">Comprehensive IT Infrastructure Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((sol) => (
              <div key={sol.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-[#009FE3] hover:scale-105 transition-transform">
                {sol.icon}
                <h3 className="text-lg font-bold text-[#1e2761] mt-3 mb-2">{sol.title}</h3>
                <p className="text-[#3b4a6b] text-sm mb-4">{sol.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] text-white px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            >
              See How It Works
            </button>
          </div>
        </motion.div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0f9ff]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e2761] mb-8 text-center">Trusted by Businesses Like Yours</h2>
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
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#FFA500] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-[#ffb733] transition focus:outline-none focus:ring-4 focus:ring-[#009FE3]/40"
            >
              Book a Free Consultation
            </button>
          </div>
        </motion.div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Upgrade Your IT?</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Let's build a future-ready IT foundation together. Book your free consultation or call us at <a href="tel:+254720943968" className="underline text-[#FFA500] hover:text-white">+254 720943968</a>.
          </p>
          <button
            className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-[#FFA500]/40"
            onClick={() => setModalOpen(true)}
          >
            Book My Free IT Consultation
          </button>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="process" />
    </div>
  );
};

export default ITInfrastructure; 