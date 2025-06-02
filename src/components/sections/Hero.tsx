import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.THREE = THREE;
}

// Add this at the top of the file or in a separate global.d.ts file:
// declare module 'vanta/dist/vanta.globe.min';

const stats = [
  {
    label: 'Faster Project Delivery',
    value: 97,
    suffix: '%',
    desc: 'Accelerated timelines, no compromise on quality.'
  },
  {
    label: 'Issues Resolved',
    value: 12000,
    suffix: '+',
    desc: 'Technical roadblocks cleared for our clients.'
  },
  {
    label: '24/7 Expert Support',
    value: 24,
    suffix: '/7',
    desc: 'Always-on assistance, whenever you need it.'
  },
  {
    label: 'Uptime Guarantee',
    value: 99.98,
    suffix: '%',
    desc: 'Your business, always online and secure.'
  },
];

const heroGradient = 'bg-gradient-to-tr from-[#1e2761] via-[#009FE3] to-[#FFA500]';
const glassClass = 'bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl';
const contrastGradient = 'bg-gradient-to-r from-[#1e2761] via-[#009FE3] to-[#FFA500] bg-clip-text text-transparent';

function useCountUp(to: number, duration = 1.6, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    let raf: number;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (to - start) * progress;
      setValue(Number(current.toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, decimals]);
  return value;
}

const VANTA_COLORS = {
  color: 0x1e3a8a, // blue from logo
  color2: 0xf59e42, // orange accent from logo
  backgroundColor: 0x000000,
  backgroundAlpha: 1.0,
  points: 12.0,
  maxDistance: 22.0,
  spacing: 18.0,
  showLines: false,
  lineColor: 0x000000,
};

interface HeroProps {
  openContactModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openContactModal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<HTMLCanvasElement>(null);
  const statValues = [
    useCountUp(stats[0].value, 1.4, 0),
    useCountUp(stats[1].value, 1.7, 0),
    useCountUp(stats[2].value, 1.2, 0),
    useCountUp(stats[3].value, 1.5, 2),
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener('resize', resize);

    // Brand colors from logo
    const colors = [
      '#2B2A7F', // deep blue
      '#009FE3', // blue
      '#00CFFF', // cyan (logo highlight)
      '#FFA500', // orange
      '#F9B233', // yellow
    ];
    function lerp(a: number, b: number, t: number): number {
      return a + (b - a) * t;
    }
    function drawRibbon(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const numRibbons = 3;
      for (let r = 0; r < numRibbons; r++) {
        ctx.save();
        ctx.beginPath();
        for (let i = 0; i <= 200; i++) {
          const pct = i / 200;
          const x = lerp(0, width, pct);
          const y = lerp(
            height * 0.3,
            height * 0.7,
            pct
          ) +
            Math.sin(pct * 6 + t * 0.35 + r * 1.5) * 80 + // much slower
            Math.cos(pct * 3 + t * 0.2 + r * 2.2) * 40 + // much slower
            r * 30;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineWidth = 60; // wider lines
        const grad = ctx.createLinearGradient(0, height * 0.5, width, height * 0.5);
        grad.addColorStop(0, colors[r]);
        grad.addColorStop(1, colors[(r + 1) % colors.length]);
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = colors[r];
        ctx.shadowBlur = 48;
        ctx.stroke();
        ctx.restore();
      }
    }

    let running = true;
    function animateRibbon() {
      if (!running) return;
      const t = performance.now() * 0.001;
      drawRibbon(t);
      requestAnimationFrame(animateRibbon);
    }
    animateRibbon();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let particlesMesh: THREE.Points | null = null;
    let animationId: number;
    function init() {
      if (!canvas) return;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas: canvas as HTMLCanvasElement, alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 400; // fewer, larger stars
      const posArray = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      // Create a star-shaped texture
      const starCanvas = document.createElement('canvas');
      starCanvas.width = 40;
      starCanvas.height = 40;
      const starCtx = starCanvas.getContext('2d');
      if (starCtx) {
        starCtx.clearRect(0, 0, 40, 40);
        starCtx.save();
        starCtx.translate(20, 20);
        starCtx.beginPath();
        const spikes = 5;
        const outerRadius = 16;
        const innerRadius = 6;
        for (let i = 0; i < spikes * 2; i++) {
          const angle = (i * Math.PI) / spikes;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          starCtx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        }
        starCtx.closePath();
        starCtx.fillStyle = '#009FE3'; // blue
        starCtx.shadowColor = '#009FE3';
        starCtx.shadowBlur = 4;
        starCtx.fill();
        starCtx.restore();
      }
      const starTexture = new THREE.Texture(starCanvas);
      starTexture.needsUpdate = true;
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.07, // smaller star
        map: starTexture,
        color: 0x009FE3,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      camera.position.z = 2;
    }
    function animate() {
      if (!renderer || !scene || !camera || !particlesMesh) return;
      particlesMesh.rotation.x += 0.00015; // much slower
      particlesMesh.rotation.y += 0.00015; // much slower
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (camera && renderer) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    init();
    animate();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
      if (scene && particlesMesh) scene.remove(particlesMesh);
      if (renderer) renderer.dispose();
    };
  }, []);

  // Animation variants for hero content
  const heroStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
  };
  const fadeUpDelayed = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18, delay } },
  });

  const statCardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
    hover: {
      scale: 1.06,
      boxShadow: '0 8px 32px 0 #009FE3aa',
      transition: { type: 'spring', stiffness: 200, damping: 12 },
    },
  };
  const statNumberVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 16 } },
  };
  const statLabelVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { delay: 0.08, type: 'spring', stiffness: 60, damping: 18 } },
  };
  const statDescVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { delay: 0.16, type: 'spring', stiffness: 60, damping: 18 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center w-full overflow-hidden bg-black text-white font-inter scroll-mt-20"
      aria-label="Nexverse Hero Section"
    >
      {/* Starfield Canvas Animation Background */}
      <canvas
        ref={starsRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: 'block', width: '100vw', height: '100vh', zIndex: 0 }}
      />
      {/* Vibrant Ribbon Canvas Animation Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        aria-hidden="true"
        tabIndex={-1}
        style={{ display: 'block', width: '100vw', height: '100vh', zIndex: 1 }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left"
        variants={heroStagger}
        initial="hidden"
        animate="show"
      >
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-jakarta font-bold tracking-tight mb-6 leading-tight"
          >
            <span className={contrastGradient}>
              <span className="bg-gradient-to-r from-[#FFA500] via-[#FFD580] to-[#FFA500] bg-clip-text text-transparent">Trans</span>
              form Your Business
            </span>
            <br />
            <span className="text-white">With Expert Guidance</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white md:text-[#009FE3] text-lg md:text-xl mb-4 max-w-2xl font-inter font-light tracking-normal"
          >
            Partner with Nexverse Consulting for expert guidance, tailored strategies, and measurable results.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-white md:text-[#009FE3] text-base md:text-lg mb-8 max-w-2xl font-inter font-light tracking-normal"
          >
            Unlock your company's full potential with a trusted consultancy partner. We listen, strategize, and deliver solutions that drive growth, efficiency, and lasting value.
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start mb-8 w-full"
            variants={fadeUp}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-block ${glassClass} text-white font-inter font-semibold text-base rounded-md px-10 py-4 bg-gradient-to-r from-[#1e2761] via-[#009FE3] to-[#FFA500] hover:from-[#009FE3] hover:to-[#1e2761] transition-all focus:outline-none focus:ring-2 focus:ring-[#009FE3] focus:ring-offset-2 shadow-lg`}
              tabIndex={0}
              aria-label="Get in Touch Today"
              onClick={openContactModal}
            >Get in Touch Today
            </motion.button>
          </motion.div>
        </div>
        <div className="hidden md:block w-2/5" />
      </motion.div>

      {/* Animated Stats */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12"
        variants={heroStagger}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={statCardVariants}
              whileHover="hover"
              className={`text-center rounded-xl p-6 ${glassClass} shadow-lg flex flex-col items-center transition-all duration-300 cursor-pointer`}
              tabIndex={0}
              aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}
              style={{ minWidth: 0 }}
            >
              <motion.span
                className="text-4xl md:text-5xl font-jakarta font-semibold mb-2 tracking-tight flex items-center justify-center"
                variants={statNumberVariants}
                aria-label={`${stat.value}${stat.suffix}`}
              >
                {statValues[i]}
                <span className="ml-1 text-2xl md:text-3xl font-bold text-[#009FE3]">{stat.suffix}</span>
              </motion.span>
              <motion.p
                className="text-[#009FE3] font-inter text-base md:text-lg font-semibold mt-2 mb-1"
                variants={statLabelVariants}
              >
                {stat.label}
              </motion.p>
              <motion.p
                className="text-[#009FE3]/80 font-inter text-sm md:text-base font-light mt-1"
                variants={statDescVariants}
              >
                {stat.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 