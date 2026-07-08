"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import GlowButton from "./glow-button";

const NAV = [
  { label: "Services", href: "/#services", caret: true },
  { label: "About", href: "/about", caret: false },
  { label: "Work", href: "/#work", caret: false },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-[88rem] items-center justify-between gap-4 rounded-full px-4 py-2.5 pl-5 backdrop-saturate-150 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border border-white/12 bg-[#080a12]/80 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
            : "border border-white/10 bg-[#080a12]/35 backdrop-blur-lg"
        }`}
      >
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Abstract Techvisions" className="h-7 w-auto" />
          <span className="font-display text-[0.98rem] font-semibold tracking-tight text-ink">
            Abstract Techvisions
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
                {item.caret && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-y-0.5" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <GlowButton
            href="/#contact"
            color="#d23a48"
            text="Let’s Connect"
            icon={<ArrowRight className="h-4 w-4" />}
            className="hidden !px-4 !py-2.5 !text-sm md:inline-flex"
          />
          {/* Mobile-only menu toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="glass inline-flex items-center justify-center rounded-full p-2.5 text-ink transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="absolute inset-x-4 top-[4.75rem] z-50 md:hidden">
          <div className="flex flex-col gap-1 rounded-3xl border border-white/12 bg-[#0a0c14]/97 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl backdrop-saturate-150">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <GlowButton
              href="/#contact"
              color="#d23a48"
              text="Let’s Connect"
              icon={<ArrowRight className="h-4 w-4" />}
              onClick={() => setOpen(false)}
              className="mt-1 w-full !text-sm"
            />
          </div>
        </div>
      )}
    </header>
  );
}
