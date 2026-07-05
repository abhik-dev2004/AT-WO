"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const NAV = [
  { label: "Services", href: "#services", caret: true },
  { label: "About", href: "#about", caret: false },
  { label: "Work", href: "#work", caret: false },
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
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
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
          <a
            href="#contact"
            className="btn btn-glass hidden !py-2.5 !px-4 text-sm md:inline-flex"
          >
            Let&rsquo;s Connect
            <ArrowRight className="h-4 w-4" />
          </a>
          {/* Mobile-only menu toggle */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="btn btn-glass !p-2.5"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="absolute inset-x-4 top-[4.75rem] z-50 md:hidden">
          <div className="flex flex-col gap-1 rounded-3xl border border-white/12 bg-[#080a12]/90 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
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
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-1 w-full"
            >
              Let&rsquo;s Connect
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
