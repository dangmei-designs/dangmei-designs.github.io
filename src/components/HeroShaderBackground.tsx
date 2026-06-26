import { useEffect, useRef } from "react";

export default function HeroShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.warn("WebGL not supported on this browser");
      return;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    // Standard high-performance WebGL Vertex Shader
    const vsSource = `
      attribute vec2 position;
      varying vec2 v_uv;
      void main() {
        v_uv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // High performance animated organic fluids/swirling mesh gradient
    const fsSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_color_core;
      uniform vec3 u_color_accent;
      uniform vec3 u_color_deep;
      uniform vec3 u_color_accent2;

      // Swirling multi-octave FBM noise for dynamic fluid motion
      float noise(vec2 p) {
        return sin(p.x * 2.0 + u_time * 0.8) * cos(p.y * 2.0 + u_time * 0.7) * 0.5 + 0.5;
      }

      float fbm(vec2 p) {
        float f = 0.0;
        f += 0.5000 * noise(p * 1.0 + vec2(u_time * 0.05, u_time * 0.02));
        f += 0.2500 * noise(p * 2.1 - vec2(u_time * 0.08, -u_time * 0.05));
        f += 0.1250 * noise(p * 4.4 + vec2(-u_time * 0.03, u_time * 0.06));
        return f / 0.875;
      }

      void main() {
        vec2 uv = v_uv;
        
        // Distort coordinates with FBM to create swirling liquid paper patterns
        vec2 q = vec2(
          fbm(uv * 2.0),
          fbm(uv * 1.8 + vec2(1.2, 3.4))
        );
        
        vec2 r = vec2(
          fbm(uv * 2.5 + 3.0 * q + vec2(u_time * 0.06, u_time * 0.04)),
          fbm(uv * 2.2 + 2.5 * q + vec2(-u_time * 0.04, u_time * 0.03))
        );
        
        float f = fbm(uv * 2.0 + 4.0 * r);
        
        // Base deep/backdrop interpolation
        vec3 color = mix(u_color_deep, u_color_core, clamp(f * 1.6, 0.0, 1.0));
        
        // Swerve colors in with accented layers
        color = mix(color, u_color_accent, clamp(length(q), 0.0, 1.0) * 0.65);
        color = mix(color, u_color_accent2, clamp(r.x * 1.5, 0.0, 1.0) * 0.25);
        
        // Soft vignette to keep boundaries dark / clean
        float dist = length(uv - 0.5);
        float edgeGlow = smoothstep(1.3, 0.1, dist);
        
        gl_FragColor = vec4(color * edgeGlow, 1.0);
      }
    `;

    const createShader = (glContext: WebGLRenderingContext, type: number, source: string) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader build mismatch:", glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
    
    // Shader custom uniforms
    const coreColorLoc = gl.getUniformLocation(program, "u_color_core");
    const accentColorLoc = gl.getUniformLocation(program, "u_color_accent");
    const deepColorLoc = gl.getUniformLocation(program, "u_color_deep");
    const accent2ColorLoc = gl.getUniformLocation(program, "u_color_accent2");

    let animationFrameId: number;
    const startTime = Date.now();

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);

      // Check user's light/dark mode state live
      const isDark = document.documentElement.classList.contains("dark");

      // Use consistent high-fidelity dark mode slate and glowing blue colors for maximum contrast and readability
      gl.uniform3f(deepColorLoc, 0.043, 0.058, 0.098);    // Rich dark space slate blue
      gl.uniform3f(coreColorLoc, 0.08, 0.22, 0.62);      // Intense Electric Blue
      gl.uniform3f(accentColorLoc, 0.15, 0.45, 0.95);    // Bright glowing Sky Blue
      gl.uniform3f(accent2ColorLoc, 0.05, 0.15, 0.45);   // Luminous Deep Royal Blue

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const observer = new ResizeObserver(() => {
      resize();
    });
    observer.observe(canvas);

    const handleWindowResize = () => {
      resize();
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleWindowResize);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-300 mix-blend-normal"
        style={{ filter: "none" }}
      />
      {/* Very faint ambient light overlay matching the main body backgrounds for seamless contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9FB] via-transparent to-transparent dark:from-[#0B0F19] dark:via-transparent dark:to-transparent opacity-90 pointer-events-none" />
    </div>
  );
}
