import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../common/OptimizedImage';

interface FormData {
  name: string;
  email: string;
  date: string;
  service: string;
  budget: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Aurora/film grain shader animation for background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;
    // Vertex shader
    const vert = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0, 1); }
    `;
    // Fragment shader (adapted for primary colors)
    const frag = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      #define filmGrainIntensity 0.08
      mat2 Rot(float a) {
          float s = sin(a);
          float c = cos(a);
          return mat2(c, -s, s, c);
      }
      vec2 hash(vec2 p) {
          p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37)));
          return fract(sin(p)*43758.5453);
      }
      float noise(in vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          float n = mix(mix(dot(-1.0+2.0*hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                            dot(-1.0+2.0*hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                       mix(dot(-1.0+2.0*hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                            dot(-1.0+2.0*hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
          return 0.5 + 0.5*n;
      }
      float filmGrainNoise(in vec2 uv) {
          return length(hash(vec2(uv.x, uv.y)));
      }
      void main() {
          vec2 fragCoord = gl_FragCoord.xy;
          vec2 uv = fragCoord / iResolution.xy;
          float aspectRatio = iResolution.x / iResolution.y;
          vec2 tuv = uv - .5;
          float degree = noise(vec2(iTime*.05, tuv.x*tuv.y));
          tuv.y *= 1./aspectRatio;
          tuv = Rot(radians((degree-.5)*720.+180.)) * tuv;
          tuv.y *= aspectRatio;
          float frequency = 5.;
          float amplitude = 30.;
          float speed = iTime * 2.;
          tuv.x += sin(tuv.y*frequency+speed)/amplitude;
          tuv.y += sin(tuv.x*frequency*1.5+speed)/(amplitude*.5);
          // Brand-inspired colors
          vec3 blue = vec3(0.0, 0.62, 0.89); // #009FE3
          vec3 orange = vec3(1.0, 0.65, 0.0); // #FFA500
          vec3 navy = vec3(0.055, 0.145, 0.29); // #0e254a
          vec3 white = vec3(1.0);
          float cycle = sin(iTime * 0.5);
          float t = (sign(cycle) * pow(abs(cycle), 0.6) + 1.) / 2.;
          vec3 color1 = mix(blue, orange, t);
          vec3 color2 = mix(navy, white, t);
          vec3 color = mix(color1, color2, smoothstep(.5, -.3, tuv.y));
          color = color - filmGrainNoise(uv) * filmGrainIntensity;
          gl_FragColor = vec4(color, 1.0);
      }
    `;
    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || 'Shader compile error');
      }
      return shader;
    }
    function createProgram(gl: WebGLRenderingContext, vsrc: string, fsrc: string) {
      const vshader = createShader(gl, gl.VERTEX_SHADER, vsrc);
      const fshader = createShader(gl, gl.FRAGMENT_SHADER, fsrc);
      const prog = gl.createProgram()!;
      gl.attachShader(prog, vshader);
      gl.attachShader(prog, fshader);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) || 'Program link error');
      }
      return prog;
    }
    let prog: WebGLProgram, posBuf: WebGLBuffer, positionLoc: number, iTimeLoc: WebGLUniformLocation, iResolutionLoc: WebGLUniformLocation;
    function resize() {
      if (!canvas || !gl) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    function main() {
      resize();
      prog = createProgram(gl!, vert, frag);
      positionLoc = gl!.getAttribLocation(prog, 'position');
      iTimeLoc = gl!.getUniformLocation(prog, 'iTime')!;
      iResolutionLoc = gl!.getUniformLocation(prog, 'iResolution')!;
      posBuf = gl!.createBuffer()!;
      gl!.bindBuffer(gl!.ARRAY_BUFFER, posBuf);
      gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array([
        -1,-1, 1,-1, -1,1, 1,1
      ]), gl!.STATIC_DRAW);
      render();
    }
    function render(t = 0) {
      if (!gl || !canvas) return;
      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.enableVertexAttribArray(positionLoc);
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(iTimeLoc, t*0.001);
      gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    main();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="contact" className="section bg-[#0e254a] scroll-mt-20 min-h-[400px] w-full z-0 relative overflow-hidden" style={{ contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">Contact</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif leading-tight">
            A proven process to achieve<br className="hidden md:block" />
            your biggest goals
          </h2>
          <p className="subheading max-w-2xl mx-auto text-[#B3B8C5] text-lg font-normal">
            Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 bg-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-[#0e254a] rounded-2xl p-8 flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                name="date"
                placeholder="dd/mm/yyyy"
                value={formData.date}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              >
                <option value="">Service...</option>
                <option value="Strategy Consulting">Strategy Consulting</option>
                <option value="Technology Consulting">Technology Consulting</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                required
              >
                <option value="">Budget...</option>
                <option value="<$5,000">&lt;$5,000</option>
                <option value="$5,000-$20,000">$5,000-$20,000</option>
                <option value=">$20,000">&gt;$20,000</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="How Can We Help?"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[#0e254a] border border-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              required
            />
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 4px 24px 0 rgba(14,37,74,0.18)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              type="submit"
              className="flex items-center gap-2 self-start mt-2 px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-[#0e254a] to-[#009FE3] text-white shadow-lg hover:from-[#009FE3] hover:to-[#0e254a] focus:outline-none focus:ring-2 focus:ring-[#009FE3]/40 text-base"
            >
              Submit your Form
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </form>

          {/* Image Side */}
          <div className="w-full max-w-xl flex justify-center items-center">
            <OptimizedImage
              src="/assets/images/support2.jpg"
              alt="Support Team"
              className="rounded-2xl w-full h-[400px] md:h-[480px] object-cover shadow-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 