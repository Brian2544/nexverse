import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Shader code
const vertexShader = `
  precision mediump float;
  varying vec2 vUv;
  attribute vec2 a_position;

  void main() {
    vUv = .5 * (a_position + 1.);
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;
  uniform float u_ratio;
  uniform vec2 u_pointer_position;
  uniform float u_scroll_progress;

  vec2 rotate(vec2 uv, float th) {
    return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
  }

  float neuro_shape(vec2 uv, float t, float p) {
    vec2 sine_acc = vec2(0.);
    vec2 res = vec2(0.);
    float scale = 8.;

    for (int j = 0; j < 15; j++) {
      uv = rotate(uv, 1.);
      sine_acc = rotate(sine_acc, 1.);
      vec2 layer = uv * scale + float(j) + sine_acc - t;
      sine_acc += sin(layer) + 2.4 * p;
      res += (.5 + .5 * cos(layer)) / scale;
      scale *= (1.2);
    }
    return res.x + res.y;
  }

  void main() {
    vec2 uv = .5 * vUv;
    uv.x *= u_ratio;

    vec2 pointer = vUv - u_pointer_position;
    pointer.x *= u_ratio;
    float p = clamp(length(pointer), 0., 1.);
    p = .5 * pow(1. - p, 2.);

    float t = .001 * u_time;
    vec3 color = vec3(0.);

    float noise = neuro_shape(uv, t, p);

    noise = 1.2 * pow(noise, 3.);
    noise += pow(noise, 10.);
    noise = max(.0, noise - .5);
    noise *= (1. - length(vUv - .5));

    // Blue/indigo color palette
    color = vec3(0.1, 0.2, 0.8); // Base blue color
    color += vec3(0.0, 0.1, 0.4) * sin(3.0 * u_scroll_progress + 1.5); // Indigo variation

    color = color * noise;

    gl_FragColor = vec4(color, noise);
  }
`;

// Service card data with icon, title, and description
const services = [
  {
    title: 'Digital Transformation',
    description: 'Leverage cutting-edge technology to modernize your business and stay ahead.',
    icon: (
      // Device Mobile (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="3" strokeWidth="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: 'Business Strategy',
    description: 'Develop winning strategies that drive growth and create sustainable advantages.',
    icon: (
      // Trending Up (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    title: 'Technology Consulting',
    description: 'Optimize operations and drive innovation with expert technology guidance.',
    icon: (
      // Cpu (Lucide)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
  },
  {
    title: 'Innovation & R&D',
    description: 'Stay ahead of the curve with our research-driven approach to innovation.',
    icon: (
      // Light Bulb (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 00-7 7c0 2.386 1.053 4.507 2.75 5.75V19a2 2 0 002 2h2a2 2 0 002-2v-3.25C17.947 14.507 19 12.386 19 10a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.',
    icon: (
      // Bar Chart (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-2a4 4 0 014-4h2a4 4 0 014 4v2m0 0v2a4 4 0 01-4 4H7a4 4 0 01-4-4v-2m16 0v2a4 4 0 01-4 4h-2a4 4 0 01-4-4v-2" />
      </svg>
    ),
  },
  {
    title: 'Change Management',
    description: 'Navigate organizational change with confidence using proven methodologies.',
    icon: (
      // Refresh (Heroicons)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M4 20a9 9 0 0116-8.485M20 4a9 9 0 01-16 8.485" />
      </svg>
    ),
  },
  {
    title: 'Strategy Consulting',
    description: 'Expert advice to help you define and achieve your business goals.',
    icon: (
      // Target (Lucide)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'IT Infrastructure',
    description: 'Build a robust, scalable, and secure IT foundation for your business.',
    icon: (
      // Server (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="6" rx="2" />
        <rect x="3" y="15" width="18" height="6" rx="2" />
        <circle cx="7.5" cy="10" r="1" />
        <circle cx="7.5" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: 'Web Design & Development',
    description: 'Create stunning, user-friendly websites and applications that drive results.',
    icon: (
      // Code (Lucide)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Information Security',
    description: 'Protect your data and systems with advanced security solutions.',
    icon: (
      // Shield Check (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Business Applications',
    description: 'Streamline your operations with custom business software solutions.',
    icon: (
      // App Window (Lucide)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: 'IT Service Management',
    description: 'Deliver efficient IT services that align with your business objectives.',
    icon: (
      // Clipboard List (Heroicons)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="4" y="6" width="16" height="16" rx="2" />
        <path d="M9 10h6M9 14h6M9 18h2" />
      </svg>
    ),
  },
  {
    title: 'Strategy Planning & Execution',
    description: 'Turn your vision into reality with actionable, results-driven plans.',
    icon: (
      // Calendar Check (Lucide)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Governance of Enterprise IT',
    description: 'Ensure compliance and maximize value from your IT investments.',
    icon: (
      // Scale (Heroicons)
      <svg className="w-20 h-20 text-[#ff5e00]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description: 'Deliver projects on time and within budget with expert management.',
    icon: (
      // Clipboard Check (Heroicons)
      <svg className="w-20 h-20 text-[#0e254a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <rect x="4" y="6" width="16" height="16" rx="2" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Data Protection & Compliance',
    description: 'Safeguard sensitive information and meet regulatory requirements.',
    icon: (
      // Lock Closed (Heroicons)
      <svg className="w-20 h-20 text-[#279ac4]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="6" y="10" width="12" height="10" rx="2" />
        <path d="M12 16v2" />
        <path d="M8 10V7a4 4 0 118 0v3" />
      </svg>
    ),
  },
];

const CARD_WIDTH = 380;
const CARD_HEIGHT = 320;
const CARD_GAP = 4;
const VISIBLE_CARDS = 3;
const SCROLL_SPEED = 1.7; // px per frame, increased speed

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollStart, setDragScrollStart] = useState(0);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, tX: 0, tY: 0 });
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const uniformsRef = useRef<{
    u_time: WebGLUniformLocation | null;
    u_ratio: WebGLUniformLocation | null;
    u_pointer_position: WebGLUniformLocation | null;
    u_scroll_progress: WebGLUniformLocation | null;
  } | null>(null);

  // Initialize WebGL
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    glRef.current = gl;

    // Create shaders
    const vertexShaderObj = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShaderObj = gl.createShader(gl.FRAGMENT_SHADER);

    if (!vertexShaderObj || !fragmentShaderObj) {
      console.error('Failed to create shaders');
      return;
    }

    gl.shaderSource(vertexShaderObj, vertexShader);
    gl.shaderSource(fragmentShaderObj, fragmentShader);

    gl.compileShader(vertexShaderObj);
    gl.compileShader(fragmentShaderObj);

    // Check for shader compilation errors
    if (!gl.getShaderParameter(vertexShaderObj, gl.COMPILE_STATUS)) {
      console.error('Vertex shader compilation error:', gl.getShaderInfoLog(vertexShaderObj));
      return;
    }
    if (!gl.getShaderParameter(fragmentShaderObj, gl.COMPILE_STATUS)) {
      console.error('Fragment shader compilation error:', gl.getShaderInfoLog(fragmentShaderObj));
      return;
    }

    // Create program
    const program = gl.createProgram();
    if (!program) {
      console.error('Failed to create program');
      return;
    }

    gl.attachShader(program, vertexShaderObj);
    gl.attachShader(program, fragmentShaderObj);
    gl.linkProgram(program);

    // Check for program linking errors
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    // Get uniforms
    const uniforms = {
      u_time: gl.getUniformLocation(program, 'u_time'),
      u_ratio: gl.getUniformLocation(program, 'u_ratio'),
      u_pointer_position: gl.getUniformLocation(program, 'u_pointer_position'),
      u_scroll_progress: gl.getUniformLocation(program, 'u_scroll_progress'),
    };

    uniformsRef.current = uniforms;

    // Set up geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);

    // Initial resize
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uniforms.u_ratio) {
        gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!gl || !uniformsRef.current) return;

      const currentTime = performance.now();
      pointer.x += (pointer.tX - pointer.x) * 0.2;
      pointer.y += (pointer.tY - pointer.y) * 0.2;

      if (uniformsRef.current.u_time) {
        gl.uniform1f(uniformsRef.current.u_time, currentTime);
      }
      if (uniformsRef.current.u_pointer_position) {
        gl.uniform2f(
          uniformsRef.current.u_pointer_position,
          pointer.x / window.innerWidth,
          1 - pointer.y / window.innerHeight
        );
      }
      if (uniformsRef.current.u_scroll_progress) {
        gl.uniform1f(
          uniformsRef.current.u_scroll_progress,
          window.pageYOffset / (2 * window.innerHeight)
        );
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const updatePointer = (x: number, y: number) => {
      setPointer(prev => ({ ...prev, tX: x, tY: y }));
    };

    window.addEventListener('pointermove', (e) => updatePointer(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => updatePointer(e.touches[0].clientX, e.touches[0].clientY));
    window.addEventListener('click', (e) => updatePointer(e.clientX, e.clientY));

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Continuous right-to-left scroll
  useEffect(() => {
    if (isHovered || dragging) return;
    let raf: number;
    const frame = () => {
      setScrollX(prev => {
        const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
        let next = prev + SCROLL_SPEED;
        if (next >= totalWidth) next -= totalWidth;
        return next;
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [isHovered, dragging]);

  // Mouse drag scroll (manual override)
  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
    setDragScrollStart(scrollX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
    setScrollX((dragScrollStart - dx + totalWidth) % totalWidth);
  };
  const onMouseUp = () => setDragging(false);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragScrollStart(scrollX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - dragStartX;
    const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
    setScrollX((dragScrollStart - dx + totalWidth) % totalWidth);
  };
  const onTouchEnd = () => setDragging(false);

  // Manual scroll with arrows
  const scrollBy = (dir: number) => {
    const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;
    setScrollX(prev => (prev - dir * (CARD_WIDTH + CARD_GAP) + totalWidth) % totalWidth);
  };

  // Responsive card count
  const [cardsToShow, setCardsToShow] = useState(VISIBLE_CARDS);
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(VISIBLE_CARDS);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Duplicate cards for infinite loop
  const displayCards = [...services, ...services];
  const totalWidth = (CARD_WIDTH + CARD_GAP) * services.length;

  return (
    <section id="services" className="py-15 w-full min-h-[400px] z-0 relative scroll-mt-20" style={{ background: 'linear-gradient(90deg, #0e254a 0%, #279ac4 60%, #ff5e00 100%)', contain: 'layout paint', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
      <canvas
        ref={canvasRef}
        id="neuro"
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-95"
      />
      <div className="container mx-auto px-4 py-12 max-w-[1200px]">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 mb-2 pb-3 font-bold tracking-wide text-[#0e254a] text-lg">
            <span className="w-2 h-2 rounded-full bg-[#0e254a] inline-block"></span>
            <span className="text-[#0e254a] text-lg font-bold">Our Services</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif leading-tight">
            Comprehensive Solutions for<br className="hidden md:block" />
            Your Business Growth
          </h2>
        </div>

        {/* Sliding Cards Container */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ 
              transform: `translateX(-${scrollX}px)`,
              width: `${totalWidth}px`
            }}
          >
            {displayCards.map((service, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 bg-gradient-to-br from-[#0e254a] via-[#10163a] to-[#279ac4] group border border-[#1a233a]/60"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT, minHeight: 280, maxHeight: 400 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="p-6 md:p-8 flex flex-col h-full relative">
                  {/* Icon container */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#10163a] border-2 border-[#279ac4] shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#e5e7eb] text-base leading-relaxed mb-2">
                      {service.description}
                    </p>
                  </div>
                  {/* Bottom accent */}
                  <div className="mt-auto pt-4">
                    <div className="flex items-center text-[#FFA500] font-medium gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Premium Service</span>
                    </div>
                  </div>
                  {/* Overlay for vignette effect - less opaque */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => scrollBy(1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous services"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollBy(-1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next services"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 