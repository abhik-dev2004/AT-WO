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
    // Capped at 1 everywhere, not just on phones. This now redraws *during*
    // scroll, competing with the compositor for the same frame budget — and a
    // frame that misses its deadline is exactly what reads as jitter. At 1.5x
    // a hi-DPI desktop was rendering 2.25x the fragments for a field that is
    // an out-of-focus gradient, where the extra density is invisible.
    const dpr = 1;
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
      uniform float uParallax;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

        // Vertical drift, driven by scroll. Shifting the sample point rather
        // than the canvas keeps the layer fixed to the viewport, so the
        // parallax costs nothing in layout or compositing.
        uv.y += uParallax;

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

        // Static film grain. It used to be reseeded from uTime every frame;
        // now that time only advances while scrolling, an animated seed would
        // make the whole field fizz as you scroll. A fixed seed reads as
        // texture on the surface instead of noise moving through it.
        float grain = fract(sin(dot(fragCoord, vec2(12.9898, 78.233))) * 43758.5453);
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
        uParallax: { value: 0 },
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
    resize();

    function handleMouseMove(event: MouseEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouse = program.uniforms.uMouse.value as Float32Array;
      mouse[0] = (event.clientX - rect.left) / rect.width;
      mouse[1] = 1 - (event.clientY - rect.top) / rect.height;
      // Nothing repaints on its own any more, so ask for a frame.
      schedule();
    }
    container.appendChild(gl.canvas);

    /* ----------------------------------------------------------------- *
     * Scroll-driven, not time-driven.
     *
     * There is no permanent animation loop: the field is a still image until
     * the page scrolls. Scroll position sets a target, a short rAF loop eases
     * the rendered value toward it, and the loop cancels itself once the two
     * converge — so an idle page does zero GPU work rather than burning a
     * full-screen procedural shader at 60fps forever.
     *
     * The easing is what makes it read as parallax rather than as the
     * background being dragged: the field keeps moving briefly after the
     * scroll stops, instead of snapping frame-for-frame to the scrollbar.
     * ----------------------------------------------------------------- */
    let raf = 0;
    let lastT = 0;
    let current = 0; // eased, what is on screen
    let target = 0; // where the scroll position wants it

    // Time constant for the smoothing, in 1/seconds. Lower is softer. This is
    // the main lever on how much a discrete wheel notch is felt.
    const SMOOTH = 5;

    // Scroll measured in viewport heights, so the effect is consistent
    // regardless of how long a given page happens to be.
    function readScroll() {
      return window.scrollY / Math.max(window.innerHeight, 1);
    }

    function draw(progress: number) {
      // Flow (pattern morph) and drift (vertical offset) both advance with
      // scroll; drift is the smaller of the two so the field lags the content.
      //
      // The flow coefficient is deliberately low. The wave term ends in
      // pow(..., 1.8), which makes a narrow bright crest — so a small change in
      // phase sweeps that crest a long way across the screen, and anything but
      // a gentle rate reads as the background twitching while you scroll.
      program.uniforms.uTime.value = progress * speed * 2.6;
      program.uniforms.uParallax.value = -progress * 0.26;
      renderer.render({ scene: mesh });
    }

    function tick(t: number) {
      // Sample scroll here rather than in the listener. Scroll events fire on
      // their own cadence — several per frame on a trackpad, none for a whole
      // frame mid-fling — so reading once per rendered frame is both cheaper
      // and gives an evenly spaced signal to smooth.
      target = readScroll();

      // dt-clamped so a background tab or a long frame can't produce one huge
      // catch-up step when the page becomes visible again.
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 1 / 60;
      lastT = t;

      const delta = target - current;
      if (Math.abs(delta) < 0.0004) {
        current = target;
        draw(current);
        raf = 0; // settled — stop until the next scroll
        lastT = 0;
        return;
      }

      // Frame-rate independent exponential smoothing. The previous fixed
      // `delta * 0.12` per frame eased twice as fast on a 120Hz display as on
      // 60Hz, and fed wheel jumps almost straight through.
      current += delta * (1 - Math.exp(-SMOOTH * dt));
      draw(current);
      raf = requestAnimationFrame(tick);
    }

    function schedule() {
      if (!raf) raf = requestAnimationFrame(tick);
    }

    // The listener only wakes the loop; the loop does the sampling.
    function onScroll() {
      schedule();
    }

    // Resizing changes the canvas buffer, which leaves it blank until
    // something draws — and with no loop running, nothing would.
    function onResize() {
      resize();
      draw(current);
    }
    window.addEventListener("resize", onResize);

    if (reduced) {
      // Static frame, no scroll coupling.
      draw(0);
    } else {
      current = target = readScroll();
      draw(current);
      window.addEventListener("scroll", onScroll, { passive: true });
      if (interactive) window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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
