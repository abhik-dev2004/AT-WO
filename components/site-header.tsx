"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import GlowButton from "./glow-button";
import { SERVICE_CATEGORIES } from "@/lib/services";

const SIMPLE_NAV = [
  { label: "About", href: "/about" },
  { label: "Customer", href: "/customer" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };
  const closeMobile = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`relative flex w-full max-w-[88rem] items-center justify-between gap-4 rounded-full px-4 py-2.5 pl-5 backdrop-saturate-150 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border border-white/12 bg-[#080a12]/80 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
            : "border border-white/10 bg-[#080a12]/35 backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Abstract Techvisions" className="h-7 w-auto" />
          <span className="font-display text-[0.98rem] font-semibold tracking-tight text-ink">
            Abstract Techvisions
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          <li onMouseEnter={openServices} onMouseLeave={scheduleClose}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className="group inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 opacity-60 transition-transform ${
                  servicesOpen ? "rotate-180" : "group-hover:translate-y-0.5"
                }`}
              />
            </button>
          </li>
          {SIMPLE_NAV.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <GlowButton
            href="/contact"
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

        {/* Desktop mega-menu */}
        <div
          onMouseEnter={openServices}
          onMouseLeave={scheduleClose}
          className={`absolute inset-x-0 top-full z-40 mt-3 hidden transition duration-200 md:block ${
            servicesOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/12 bg-[#0a0c14]/95 p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)] backdrop-blur-2xl backdrop-saturate-150">
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
              {SERVICE_CATEGORIES.map((cat) => (
                <div key={cat.slug}>
                  <a
                    href={`/services/${cat.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="font-display text-sm font-semibold tracking-tight text-ink transition-colors hover:text-white"
                  >
                    {cat.name}
                  </a>
                  <ul className="mt-3 space-y-1">
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <a
                          href={`/services/${item.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="absolute inset-x-4 top-[4.75rem] z-50 md:hidden">
          <div className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto rounded-3xl border border-white/12 bg-[#0a0c14]/97 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl backdrop-saturate-150">
            {/* Services — expandable */}
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mb-1 ml-3 space-y-3 border-l border-white/10 pl-3">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div key={cat.slug}>
                    <a
                      href={`/services/${cat.slug}`}
                      onClick={closeMobile}
                      className="block px-2 py-1.5 text-sm font-semibold tracking-tight text-ink"
                    >
                      {cat.name}
                    </a>
                    <ul>
                      {cat.items.map((item) => (
                        <li key={item.slug}>
                          <a
                            href={`/services/${item.slug}`}
                            onClick={closeMobile}
                            className="block rounded-lg px-2 py-1.5 text-sm text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {SIMPLE_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="rounded-2xl px-4 py-3 text-base text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <GlowButton
              href="/contact"
              color="#d23a48"
              text="Let’s Connect"
              icon={<ArrowRight className="h-4 w-4" />}
              onClick={closeMobile}
              className="mt-1 w-full !text-sm"
            />
          </div>
        </div>
      )}
    </header>
  );
}
