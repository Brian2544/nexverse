import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useVanta from '../../../components/common/useVanta';

const BusinessApplications: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef(null);
  useVanta(heroRef, 'HALO', { color: 0x009FE3, amplitudeFactor: 2.6, size: 1.4 });
  const socialProofRef = useRef(null);
  useVanta(socialProofRef, 'WAVES', { color: 0x009FE3, shininess: 59 });
  const painPointRef = useRef(null);
  useVanta(painPointRef, 'FOG', { highlightColor: 0x009FE3, midtoneColor: 0x625fd1, lowlightColor: 0x120951 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const lineCount = 40;
    const color = '#009FE3'; // Brand blue
    const accent = '#FF694B'; // Orange accent
    const offset = Math.PI * 3.5;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.shadowBlur = 10;
    ctx.shadowColor = accent;
    ctx.fillStyle = accent;
    function Line(this: any, pos: number) { this.pos = pos; }
    Line.prototype = {
      constructor: Line,
      pos: 0,
      width: width * 0.8,
      height: 4,
      range: height * 0.4,
      render: function(this: any, ctx: CanvasRenderingContext2D, delta: number) {
        const pos = this.pos;
        const minWidth = (this.width * 0.25);
        const lineWidth = minWidth + (this.width * 0.75 * pos);
        const lineHeight = Math.cos(delta + (pos * offset)) * this.height;
        const x = (width - minWidth) * (1 - pos);
        const y = (Math.sin(delta + (pos * offset)) * (this.range/2 + this.range/2 * pos)) + height * 0.6;
        ctx.globalAlpha = 0.2 + (0.5 * (1 - pos));
        ctx.beginPath();
        ctx.rect(x, y, lineWidth, lineHeight);
        ctx.closePath();
        ctx.fill();
      }
    };
    const lines: any[] = [];
    for (let i = 0; i < lineCount; i++) {
      lines.push(new (Line as any)(i / lineCount));
    }
    let wave = 0;
    function render() {
      requestAnimationFrame(render);
      if (!ctx) return;
      wave += 0.01;
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line: any) => line.render(ctx, wave));
    }
    render();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#181a2a]">
      {/* Hero Section with Canvas Animation */}
      <section ref={containerRef} className="relative flex flex-col items-center justify-center px-6 py-24 min-h-[60vh] overflow-hidden">
        <canvas ref={canvasRef} className="animation-container absolute inset-0 w-full h-full" />
        <div className="hero-content relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Empower Your Business with <span className="bg-gradient-to-r from-[#009FE3] via-[#FF694B] to-[#009FE3] bg-clip-text text-transparent">Custom Applications</span>
          </motion.h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Streamline operations, boost productivity, and gain actionable insights with tailored business applications built for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#" className="glow-button bg-[#009FE3] hover:bg-[#005fa3] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-lg">
              Start Free Trial
            </a>
            <a href="#" className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-[#181a2a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-[#009FE3]/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-[#009FE3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-white/70">Experience unparalleled speed with our optimized, scalable solutions.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-[#FF694B]/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-[#FF694B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
            <p className="text-white/70">Enterprise-grade security and compliance for your business data.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 bg-[#009FE3]/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-[#009FE3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Actionable Insights</h3>
            <p className="text-white/70">Real-time analytics and reporting to drive smarter decisions.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Modernize Your Business?</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Book a Free Demo</button>
        </motion.div>
      </section>
  </div>
);
};

export default BusinessApplications; 