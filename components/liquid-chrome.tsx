"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

type LiquidChromeProps = {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
};

/**
 * Flowing "liquid chrome" WebGL backdrop (adapted from reactbits.dev).
 * Rendered fixed behind all content; freezes on a single frame when the
 * user prefers reduced motion.
 */
export default function LiquidChrome({
  baseColor = [1, 1, 1],
  speed = 0.22,
  amplitude = 0.34,
  frequencyX = 2.6,
  frequencyY = 2.0,
  interactive = false,
}: LiquidChromeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    // Phones report 2-3x DPR; rendering a full-screen procedural shader at
    // that density costs 4-9x the fragments for an effect that is deliberately
    // out of focus. 1.0 on mobile is indistinguishable here.
    const dpr = small ? 1 : Math.min(window.devicePixelRatio, 1.5);
    // antialias is pointless on a full-screen triangle with no geometry edges,
    // and forces a multisampled backbuffer.
    const renderer = new Renderer({ antialias: false, dpr });
    const gl = renderer.gl;
    gl.clearColor(0.02, 0.024, 0.035, 1);

    const vertex = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      uniform float uWaveIters;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

        // Iteration count drops on small screens — later harmonics are a
        // sub-pixel wobble there, so they cost real time and show nothing.
        for (float i = 1.0; i < 10.0; i++) {
          if (i > uWaveIters) break;
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
        }

        vec2 diff = (uvCoord - uMouse);
        float dist = length(diff);
        float falloff = exp(-dist * 20.0);
        float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
        uv += ripple * falloff;

        // Coloured waves on black: violet (left) → blue (right).
        // Intensity peaks along the flowing wave crests and falls to black.
        vec3 colA = vec3(0.62, 0.28, 1.0);
        vec3 colB = vec3(0.18, 0.45, 1.0);
        vec3 tint = mix(colA, colB, smoothstep(-0.15, 1.05, uvCoord.x));
        float wave = pow(1.0 - abs(sin(uTime - uv.y - uv.x)), 1.8);
        vec3 color = uBaseColor * tint * wave;

        // Animated film grain.
        float grain = fract(sin(dot(fragCoord, vec2(12.9898, 78.233)) + uTime * 8.0) * 43758.5453);
        color += (grain - 0.5) * 0.04;

        return vec4(color, 1.0);
      }

      void main() {
        // One sample per pixel. This previously supersampled 3x3, running the
        // whole 9-iteration wave loop nine times per pixel — ~160 trig ops per
        // pixel per frame, which is what pinned mobile GPUs. The effect is a
        // soft gradient, so the extra samples bought almost nothing visually.
        gl_FragColor = renderImage(vUv);
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ]),
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uWaveIters: { value: small ? 4 : 9 },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      if (!container) return;
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      const res = program.uniforms.uResolution.value as Float32Array;
      res[0] = gl.canvas.width;
      res[1] = gl.canvas.height;
      res[2] = gl.canvas.width / gl.canvas.height;
    }
    window.addEventListener("resize", resize);
    resize();

    function handleMouseMove(event: MouseEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouse = program.uniforms.uMouse.value as Float32Array;
      mouse[0] = (event.clientX - rect.left) / rect.width;
      mouse[1] = 1 - (event.clientY - rect.top) / rect.height;
    }
    if (interactive && !reduced) window.addEventListener("mousemove", handleMouseMove);

    let raf = 0;
    let last = 0;
    // A background gradient gains nothing from 60fps; halving the frame rate
    // on phones halves the GPU work and the battery drain with it.
    const minFrameMs = small ? 1000 / 30 : 0;

    function update(t: number) {
      raf = requestAnimationFrame(update);
      if (minFrameMs && t - last < minFrameMs) return;
      last = t;
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
    }

    container.appendChild(gl.canvas);

    function start() {
      if (!raf && !reduced) raf = requestAnimationFrame(update);
    }
    function stop() {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
    // Belt-and-braces: browsers already throttle rAF in background tabs, but
    // this guarantees the loop is fully stopped rather than merely slowed.
    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      // Single static frame — no animation loop.
      program.uniforms.uTime.value = 1.4;
      renderer.render({ scene: mesh });
    } else {
      start();
    }

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      if (interactive && !reduced) window.removeEventListener("mousemove", handleMouseMove);
      if (gl.canvas.parentElement) gl.canvas.parentElement.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return (
    <div ref={containerRef} className="chrome-bg" aria-hidden>
      <div className="chrome-scrim" />
      <div className="chrome-grain" />
    </div>
  );
}
