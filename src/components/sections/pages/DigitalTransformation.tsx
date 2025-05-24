import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../AboutSection';

const DigitalTransformation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    function resizeCanvas() {
      if (!canvas || !container) return;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const lineCount = 40;
    const color = '#009FE3';
    const offset = Math.PI * 3.5;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.shadowBlur = 5;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    function Line(this: any, pos: number) { this.pos = pos; }
    Line.prototype = {
      constructor: Line,
      pos: 0,
      width: halfWidth,
      height: 2,
      range: halfHeight * 0.9,
      render: function(this: any, ctx: CanvasRenderingContext2D, delta: number) {
        const pos = this.pos;
        const minWidth = (this.width * 0.25);
        const lineWidth = minWidth + (this.width * 0.75 * pos);
        const lineHeight = Math.cos(delta + (pos * offset)) * this.height;
        const x = (width - minWidth) * (1 - pos);
        const y = (Math.sin(delta + (pos * offset)) * (this.range/2 + this.range/2 * pos)) + halfHeight;
        ctx.globalAlpha = 0.5;
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
      wave += 0.02;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line: any) => line.render(ctx, wave));
    }
    render();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#1f1c31]">
      {/* Hero Section with Canvas Animation */}
      <section ref={containerRef} className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 min-h-[60vh] overflow-hidden rounded-b-3xl shadow-xl bg-gradient-to-t from-[#1e293b] to-[#009FE3]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 max-w-xl">
          <div className="inline-block px-3 py-1 bg-[#009FE3]/20 rounded-full text-[#009FE3] text-xs mb-4">DIGITAL TRANSFORMATION</div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Accelerate Your Digital Journey
          </motion.h1>
          <p className="text-white/90 text-lg mb-6">Unlock new opportunities with seamless digital transformation, powered by innovation and expert guidance.</p>
          <button className="bg-gradient-to-r from-[#009FE3] to-[#005fa3] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition text-white">Start Your Transformation</button>
        </div>
        <div className="relative z-10 mt-10 md:mt-0 md:ml-10 w-full max-w-md">
          <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4 mt-4">
            <div className="text-center">
              <div className="text-lg font-light text-white">AI-Driven</div>
              <div className="text-xs text-white/80">Analytics</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-white">100+</div>
              <div className="text-xs text-white/80">Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-white">24/7</div>
              <div className="text-xs text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-white">Enterprise</div>
              <div className="text-xs text-white/80">Security</div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection
        badgeText="ABOUT DIGITAL TRANSFORMATION"
        title="Transforming Businesses for a Digital Future"
        subtitle="We guide organizations through every stage of digital transformation, from strategy to implementation. Our team leverages the latest technologies and best practices to drive innovation and growth."
        image="/assets/images/hero_strategy.jpg"
        imageAlt="Digital Transformation Team"
        storyTitle="Our Vision"
        story="NexVerse Digital Transformation was founded to help businesses adapt and thrive in a rapidly changing world. We are passionate about empowering clients with the tools and knowledge to succeed."
        highlights={[{ color: 'bg-green-500', text: 'AI & analytics expertise' }, { color: 'bg-blue-400', text: 'Seamless integrations' }, { color: 'bg-indigo-400', text: 'Enterprise security' }]}
        ctaText="See Our Digital Services"
        ctaHref="#services"
        ctaSubText={<>Want to join us? <a href="#careers" className="text-blue-300 underline hover:text-blue-400">We&apos;re hiring</a></>}
      />

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#18162a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-[#009FE3] mb-4">Why Choose NexVerse?</motion.h2>
            <ul className="space-y-4 text-white/80">
              <li><span className="font-bold text-[#009FE3]">• AI-Powered Analytics:</span> Gain real-time insights and make data-driven decisions.</li>
              <li><span className="font-bold text-[#009FE3]">• Seamless Integration:</span> Connect with your existing tools and platforms.</li>
              <li><span className="font-bold text-[#009FE3]">• Enterprise Security:</span> End-to-end encryption and compliance.</li>
              <li><span className="font-bold text-[#009FE3]">• Expert Guidance:</span> Our consultants guide you every step of the way.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-[#232046] rounded-xl p-6 shadow flex items-center gap-4">
              <img src="/assets/images/hero_strategy.jpg" alt="Digital Strategy" className="w-20 h-20 object-cover rounded-lg" loading="lazy" />
              <div>
                <div className="font-bold text-[#009FE3]">Digital Strategy</div>
                <div className="text-white/70 text-sm">Custom roadmaps for your digital transformation journey.</div>
              </div>
            </div>
            <div className="bg-[#232046] rounded-xl p-6 shadow flex items-center gap-4">
              <img src="/assets/images/support.jpg" alt="Support" className="w-20 h-20 object-cover rounded-lg" loading="lazy" />
              <div>
                <div className="font-bold text-[#009FE3]">Continuous Support</div>
                <div className="text-white/70 text-sm">Ongoing optimization and support for lasting results.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#009FE3] to-[#005fa3] flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Go Digital?</h2>
          <button className="bg-white text-[#009FE3] font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">Book a Free Digital Consultation</button>
        </motion.div>
      </section>
  </div>
);
};

export default DigitalTransformation; 