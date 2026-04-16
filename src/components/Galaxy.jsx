import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useState } from "react";
import "./Galaxy.css";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uDensity;
uniform float uHueShift;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uInvert;

varying vec2 vUv;

float Hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

void main() {
    vec2 uv = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
    
    // Scale UV for warp speed
    float speed = uTime * 0.5;
    
    vec3 finalColor = vec3(0.0);
    float alpha = 0.0;
    
    // Create multiple layers of stars for depth
    for(float i = 0.0; i < 6.0; i++) {
        float size = 1.0 - i / 6.0;
        float fade = fract(speed + i * 0.166);
        
        // Radial star movement
        vec2 p = uv * mix(10.0, 0.05, fade);
        p += 50.0 * i; // Offset layers
        
        vec2 id = floor(p);
        vec2 gv = fract(p) - 0.5;
        
        float n = Hash21(id);
        
        // Star shape + glow
        float d = length(gv);
        float star = (0.02 * uGlowIntensity) / d;
        
        // Smooth fade out at edges and center
        float mask = smoothstep(0.0, 0.5, fade) * smoothstep(1.0, 0.8, fade);
        mask *= smoothstep(0.01, 0.1, length(uv)); // Hide center black hole
        
        // Color variation based on hueShift
        vec3 col = 0.5 + 0.5 * cos(uHueShift * 0.01 + i + vec3(0, 2, 4));
        
        finalColor += star * mask * col;
        alpha += star * mask;
    }

    // Output with alpha transparency to let theme background show through
    gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
}
`;

export default function Galaxy({
  density = 1.2,
  glowIntensity = 0.4,
  saturation = 0.6,
  hueShift = 220,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(0, 0, 1) },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      program.uniforms.uResolution.value = new Color(
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height
      );
    }

    window.addEventListener("resize", resize);
    resize();

    let raf;
    function animate(t) {
      raf = requestAnimationFrame(animate);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }
    animate(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeChild(gl.canvas);
    };
  }, [density, glowIntensity, hueShift, saturation]);

  return <div ref={ref} className="galaxy-container" />;
}
