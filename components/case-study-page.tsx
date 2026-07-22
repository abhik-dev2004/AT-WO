import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import Reveal from "./reveal";
import Contact from "./contact";
import CaseStudyTabs from "./case-study-tabs";
import type { CaseStudy } from "@/lib/customer-content";

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const { hero, tabsHeading, tabs, quote, stats, outcome, key: accent } = study;

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[88rem] px-6 pt-24 sm:pt-28">
          <Reveal>
            <Link
              href="/customer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" /> All customer stories
            </Link>
          </Reveal>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Cover image, shared with the card on the customers index */}
            <Reveal className="card relative min-h-[18rem] overflow-hidden sm:min-h-[24rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.cardImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90% 80% at 30% 20%, rgba(5,6,9,0.35), rgba(5,6,9,0.7))",
                }}
              />
            </Reveal>

            <Reveal delay={120}>
              <h1 className="font-display text-2xl font-semibold leading-[1.18] tracking-tight sm:text-4xl">
                {hero.headline}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
                {hero.intro}
              </p>

              {hero.bullets.length > 0 && (
                <ul className="mt-6 flex flex-col gap-3">
                  {hero.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </section>

        {/* Interactive slider */}
        <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[2.2rem]">
              {tabsHeading}
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <CaseStudyTabs tabs={tabs} accent={accent} />
          </Reveal>
        </section>

        {/* Quote */}
        <section className="mx-auto mt-28 max-w-5xl px-6 text-center sm:mt-40">
          <Reveal>
            <blockquote className="mx-auto max-w-4xl">
              <p className="font-sans text-xl font-medium leading-[1.5] tracking-tight sm:text-2xl">
                <span aria-hidden className="text-gradient">
                  &ldquo;
                </span>
                {quote.text}
                <span aria-hidden className="text-gradient">
                  &rdquo;
                </span>
              </p>
              {(quote.name || quote.role) && (
                <footer className="mt-6 text-sm text-ink-subtle">
                  {quote.name}
                  {quote.name && quote.role ? ", " : ""}
                  {quote.role}
                </footer>
              )}
            </blockquote>
          </Reveal>
        </section>

        {/* Outcome — stats left, narrative right */}
        <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
          <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,44rem)] lg:justify-center lg:gap-20">
            <div className="flex flex-col gap-10">
              {stats.map((stat, i) => (
                <Reveal as="div" key={stat.label} delay={i * 90}>
                  <span
                    className="font-display inline-block text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl"
                    style={{
                      background: `radial-gradient(120% 120% at 30% 0%, #fff, ${accent})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </span>
                  <p className="mt-2 max-w-[13rem] text-sm leading-relaxed text-ink-muted">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="flex flex-col gap-5">
              {outcome.map((para) => (
                <p
                  key={para}
                  className="text-sm leading-relaxed text-ink-muted sm:text-base"
                >
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Contact — shared component (id="contact") */}
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
