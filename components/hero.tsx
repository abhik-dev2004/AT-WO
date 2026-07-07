"use client";

import { useEffect, useRef, useState } from "react";
import GlowButton from "./glow-button";

type Media = {
  type: "video" | "image";
  src: string;
  /** Image shown instead of a video on mobile */
  mobileSrc?: string;
};

type Slide = {
  pre: string;
  em: string;
  post: string;
  cta: string;
  href: string;
  glow: string;
  media: Media;
  /** Fallback gradient shown behind the media while it loads. */
  visual: string;
};

const SLIDES: Slide[] = [
  {
    pre: "We connect strategy, systems, ",
    em: "brand and performance",
    post: " into one execution model designed to accelerate your business growth",
    cta: "Start Your Transformation",
    href: "#contact",
    glow: "#7b5cff",
    media: {
      type: "video",
      src: "/alt_1.mp4",
      mobileSrc: "/joshua-sun-brq6r83uD8U-unsplash.jpg",
    },
    visual:
      "radial-gradient(50% 60% at 18% 30%, rgba(255,77,99,0.55), transparent 60%), radial-gradient(55% 70% at 85% 22%, rgba(52,226,234,0.45), transparent 60%), radial-gradient(75% 90% at 60% 105%, rgba(163,116,255,0.55), transparent 60%)",
  },
  {
    pre: "The AI revolution is moving fast. We make sure your business moves with it — ",
    em: "securely, intelligently, and on your own terms",
    post: "",
    cta: "Explore Our Capabilities",
    href: "#services",
    glow: "#3f7dff",
    media: { type: "image", src: "/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg" },
    visual:
      "radial-gradient(60% 70% at 78% 28%, rgba(52,226,234,0.6), transparent 60%), radial-gradient(55% 65% at 18% 72%, rgba(163,116,255,0.5), transparent 60%), radial-gradient(65% 80% at 50% 0%, rgba(80,140,255,0.4), transparent 60%)",
  },
  {
    pre: "When businesses were being held back by fragmented tools and mounting vendor costs, we stepped in with ",
    em: "one synchronized system",
    post: " that changed their entire trajectory",
    cta: "See How We Did It",
    href: "#work",
    glow: "#e0692e",
    media: { type: "image", src: "/charlesdeluvio-Lks7vei-eAg-unsplash.jpg" },
    visual:
      "radial-gradient(60% 70% at 24% 30%, rgba(255,178,87,0.55), transparent 60%), radial-gradient(58% 66% at 82% 60%, rgba(255,77,99,0.5), transparent 60%), radial-gradient(65% 80% at 60% 0%, rgba(163,116,255,0.4), transparent 60%)",
  },
];

const INTERVAL = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, [paused, active]);

  return (
    <section id="top" className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-[88rem] px-6">
        <div
          className="card relative min-h-[42rem] overflow-hidden sm:min-h-[34rem] lg:min-h-[38rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Abstract Techvisions highlights"
        >
          {SLIDES.map((slide, i) => {
            const Heading = i === 0 ? "h1" : "h2";
            const isActive = i === active;
            return (
              <article
                key={i}
                className={`hero-slide ${isActive ? "is-active" : ""}`}
                aria-hidden={!isActive}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${SLIDES.length}`}
              >
                {/* media: video or image, with a gradient fallback behind it */}
                <div className="absolute inset-0" style={{ background: slide.visual }} />
                {slide.media.type === "video" ? (
                  <>
                    {/* video on tablet/desktop, image on mobile */}
                    <video
                      className="hero-slide__visual hidden h-full w-full object-cover sm:block"
                      src={slide.media.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    {slide.media.mobileSrc && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="hero-slide__visual h-full w-full object-cover sm:hidden"
                        src={slide.media.mobileSrc}
                        alt=""
                      />
                    )}
                  </>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="hero-slide__visual h-full w-full object-cover"
                    src={slide.media.src}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                )}
                <div aria-hidden className="absolute inset-0 grid-veil opacity-40" />
                {/* legibility scrim — darker behind the centered copy */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(95% 78% at 50% 46%, rgba(5,6,9,0.62) 0%, rgba(5,6,9,0.32) 70%, rgba(5,6,9,0.14) 100%)",
                  }}
                />

                {/* copy — centered */}
                <div className="hero-slide__copy absolute inset-0 flex items-center justify-center pb-14">
                  <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
                    <Heading className="font-display text-2xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.35rem]">
                      {slide.pre}
                      <span className="text-gradient">{slide.em}</span>
                      {slide.post}
                    </Heading>
                    <div className="mt-8 flex justify-center">
                      <GlowButton text={slide.cta} href={slide.href} />
                    </div>
                  </div>
                </div>

              </article>
            );
          })}

          {/* dots */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`dot ${i === active ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
