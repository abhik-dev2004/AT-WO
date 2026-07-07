"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Reveal from "./reveal";
import GlowButton from "./glow-button";

type Status = "idle" | "submitting" | "success";

const FIELD =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-ink-subtle outline-none transition-colors focus:border-brand-cyan/60 focus:bg-white/[0.06]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    // Simulated async submit — wire to your endpoint here.
    setTimeout(() => setStatus("success"), 1100);
  };

  return (
    <section id="contact" className="relative mt-28 overflow-hidden sm:mt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora aurora-drift-slow left-[10%] top-[10%] h-[28rem] w-[28rem] bg-[#ff4d63]/25" />
        <div className="aurora aurora-drift right-[8%] bottom-0 h-[26rem] w-[26rem] bg-[#34e2ea]/25" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal
          style={{
            ["--key" as string]: "rgba(163,116,255,0.3)",
            ["--key-edge" as string]: "rgba(163,116,255,0.5)",
          }}
          className="card p-6 sm:p-10"
        >
          {/* Header */}
          <div className="flex items-start gap-4">
            <span className="glass hidden h-12 w-12 shrink-0 items-center justify-center rounded-full text-ink sm:inline-flex">
              <Sparkles className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
                Your transformation is one conversation away
              </h2>
              <p className="mt-2 text-ink-muted">
                Tell us what&rsquo;s holding your business back. We&rsquo;ll
                respond within 1 business day.
              </p>
            </div>
          </div>

          {status === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-8 flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center"
            >
              <CheckCircle2 className="h-12 w-12 text-brand-cyan" />
              <h3 className="font-display text-xl font-semibold">
                Thank you — your message is on its way.
              </h3>
              <p className="max-w-md text-sm text-ink-muted">
                A member of our team will be in touch within 1 business day to
                map out your path forward.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm text-ink-muted">
                    First Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Jane"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm text-ink-muted">
                    Last Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Doe"
                    className={FIELD}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-ink-muted">
                    Email <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    className={FIELD}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm text-ink-muted">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (000) 000-0000"
                    className={FIELD}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-ink-muted">
                  Message <span className="text-brand-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you transform?"
                  className={`${FIELD} resize-none`}
                />
              </div>

              {/* Both consent lines together — opt-in emphasised over the note */}
              <div className="mt-1 flex flex-col items-center gap-2 text-center">
                <label className="flex items-center justify-center gap-3 text-[0.95rem] font-medium text-ink">
                  <input
                    type="checkbox"
                    name="marketingOptIn"
                    className="h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-[#a374ff]"
                  />
                  <span className="whitespace-normal xl:whitespace-nowrap">
                    Sign me up to receive future marketing communications
                    regarding Abstract Techvision&rsquo;s products, services and
                    events
                  </span>
                </label>
                <p className="mx-auto max-w-xl text-xs text-ink-subtle">
                  By submitting this form you confirm that you agree to Abstract
                  Techvision&rsquo;s{" "}
                  <a href="#privacy" className="underline underline-offset-2 hover:text-ink-muted">
                    privacy policy
                  </a>
                </p>
              </div>

              {/* Button below the consent lines */}
              <div className="flex justify-center">
                <GlowButton
                  type="submit"
                  color="#d23a48"
                  text={status === "submitting" ? "Sending…" : "Let’s Connect"}
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                  icon={
                    status === "submitting" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )
                  }
                />
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
