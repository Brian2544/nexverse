import React, { useRef, useEffect } from 'react';

interface AnimatedCardBackgroundProps {
  active: boolean;
  className?: string;
}

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
  void main() {
    vec2 uv = .5 * vUv;
    uv.x *= u_ratio;
    float t = .001 * u_time;
    float noise = sin(uv.x * 10.0 + t) * cos(uv.y * 10.0 - t);
    noise = pow(abs(noise), 2.5);
    vec3 color = vec3(0.1, 0.2, 0.8) + vec3(0.0, 0.1, 0.4) * sin(3.0 * t + 1.5);
    color = color * noise;
    gl_FragColor = vec4(color, noise);
  }
`;

const AnimatedCardBackground: React.FC<AnimatedCardBackgroundProps> = ({ active, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const uniformsRef = useRef<{ u_time: WebGLUniformLocation | null; u_ratio: WebGLUniformLocation | null } | null>(null);

  useEffect(() => {
    if (!active || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');
    if (!gl) return;
    glRef.current = gl;
    // Shaders
    const vShader = gl.createShader(gl.VERTEX_SHADER)!;
    const fShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(vShader, vertexShader);
    gl.shaderSource(fShader, fragmentShader);
    gl.compileShader(vShader);
    gl.compileShader(fShader);
    const program = gl.createProgram()!;
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    // Uniforms
    const uniforms = {
      u_time: gl.getUniformLocation(program, 'u_time'),
      u_ratio: gl.getUniformLocation(program, 'u_ratio'),
    };
    uniformsRef.current = uniforms;
    // Geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    // Resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = canvas.parentElement?.offsetWidth || 320;
      const h = canvas.parentElement?.offsetHeight || 180;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uniforms.u_ratio) gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);
    // Animate
    const animate = () => {
      if (!gl || !uniformsRef.current) return;
      const t = performance.now();
      if (uniformsRef.current.u_time) gl.uniform1f(uniformsRef.current.u_time, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: active ? 1 : 0, pointerEvents: 'none', transition: 'opacity 0.4s' }}
      aria-hidden
    />
  );
};

export default AnimatedCardBackground; 