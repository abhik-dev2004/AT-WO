import type { Metadata } from "next";
import { Fragment } from "react";
import { ArrowRight, ChevronDown, Compass, Sprout, Rocket } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import GlowButton from "@/components/glow-button";
import Faq from "@/components/faq";
import CountUp from "@/components/count-up";

export const metadata: Metadata = {
  title: "About",
  description:
    "One team of strategists, engineers and builders, synchronizing marketing and technology into a single execution model committed to your growth.",
};

const PHILOSOPHY = [
  {
    icon: Compass,
    title: "We treat transformation as a direction, not a destination",
    body: "We synchronize technology and marketing excellence into a single, unified practice so your business doesn't just adapt to the market as it evolves, it moves ahead of it.",
  },
  {
    icon: Sprout,
    title: "We invest in your growth like it's our own",
    body: "We scope only what your business genuinely needs, price it without overhead, and measure our success by the return it creates for you.",
  },
  {
    icon: Rocket,
    title: "We commit to your long-term momentum",
    body: "We stay alongside you with the infrastructure for long-term monitoring, planning, and optimization, so your momentum never stalls.",
  },
];

const PROCESS = [
  {
    n: "1",
    title: "Discover",
    body: "In 7-14 days, we cut through the noise, isolate what's actually blocking growth, and map the DNA that makes your business distinct.",
  },
  {
    n: "2",
    title: "Strategize",
    body: "We translate what we found into a roadmap that connects marketing and technology into a single, purposeful direction scoped to only what matters.",
  },
  {
    n: "3",
    title: "Build & Iterate",
    body: "We build it, refine it, and rebuild it until it works. Our team operates across every time zone, so your project never sleeps, and neither do we.",
  },
  {
    n: "4",
    title: "Monitor & Scale",
    body: "We stay. We monitor what's running, fix what breaks, and evolve your systems as the market moves. The engagement doesn't end at launch, it deepens.",
  },
];

const IMPACT = [
  {
    num: 28,
    suffix: "+",
    label: "Industries served",
    body: "Our dual-core model gives us the range to move across sectors with precision, translating deep cross-industry knowledge into approaches that are always built around your specific business.",
    key: "rgba(255,77,99,0.9)",
  },
  {
    num: 94,
    suffix: "",
    label: "Net Promoter Score",
    body: "We treat client success as a long-term commitment, not a project milestone. We monitor, maintain, and evolve what we build, and we do it without passing unnecessary costs onto you.",
    key: "rgba(52,226,234,0.9)",
  },
];

const FAQS = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups and mid-market enterprises navigating significant digital and marketing transitions. If your business is at an inflection point, whether that's scaling, repositioning, or rebuilding your digital infrastructure, we're built for that moment. Our model adapts across industries, so the question is less about what sector you're in and more about where you're trying to go.",
  },
  {
    q: "Why would we hire you over a marketing agency?",
    a: "A traditional marketing agency operates without the technical infrastructure to back its strategies up. At Abstract Techvisions, every marketing initiative is built alongside the technology that supports it. You get campaigns, brand, and digital strategy that are engineered to perform, not just designed to look good.",
  },
  {
    q: "Why would we hire you over a software development firm?",
    a: "A development firm builds what you ask for. We build what your business actually needs, and we know the difference because our systems engineers work alongside marketing architects from day one. The result is technology that's aligned to your growth strategy and built to move your business forward.",
  },
  {
    q: "What does your pricing look like?",
    a: "We need a consultation session before we can give you a number, because the right answer depends on your business. What we can tell you upfront: no billable hours, no retainer bloat. We work on a fixed-outcome basis with a project deposit to get started, scaled to the scope of work.",
  },
  {
    q: "How do we get started?",
    a: "We'll set up an initial consultation to understand your business, your goals, and where you are right now. From there, we move into next steps together, whether that's a follow-up discovery session or going straight into strategy and then execution.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section id="top" className="relative pt-24 sm:pt-28">
          <div className="mx-auto max-w-[88rem] px-6">
            <div className="card relative flex min-h-[42rem] items-center overflow-hidden sm:min-h-[34rem] lg:min-h-[38rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/andrius-budrikas-98uR9diNLXc-unsplash.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(100% 90% at 50% 40%, rgba(5,6,9,0.72) 0%, rgba(5,6,9,0.5) 60%, rgba(5,6,9,0.28) 100%)",
                }}
              />
              <Reveal className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-10">
                <h1 className="font-display text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl">
                  We are a team of strategists, engineers, and builders driven by
                  a single belief: that every business deserves a{" "}
                  <span className="text-gradient">
                    partner as committed to its growth
                  </span>{" "}
                  as the people running it
                </h1>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Founding story */}
        <section className="mx-auto mt-24 max-w-[88rem] px-6 sm:mt-36">
          <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
            <Reveal as="article" className="card card-hover flex flex-col p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                The reality we walked into
              </h2>
              <div className="mt-5 space-y-2 text-sm italic text-ink-muted">
                <p>
                  &ldquo;Why is our marketing growing but our operations are
                  falling behind?&rdquo;
                </p>
                <p>
                  &ldquo;Why do we have great technology but no clients to show
                  for it?&rdquo;
                </p>
                <p>
                  &ldquo;We know we need to scale but have no idea how to do
                  it.&rdquo;
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                We heard these questions from leaders after leaders, in different
                industries and at different stages. The specifics varied but the
                core was always the same: marketing and technology were being
                treated in silos and that separation was the problem.
              </p>
            </Reveal>

            <div className="hidden items-center justify-center md:flex">
              <span className="glass flex h-11 w-11 items-center justify-center rounded-full">
                <ArrowRight className="h-5 w-5 text-ink" />
              </span>
            </div>

            <Reveal as="article" delay={120} className="card card-hover flex flex-col p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                The company we built in response
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">
                Abstract Techvisions was founded as the answer to all of those
                questions. We built a firm where the team that grows your
                marketing is the same team that builds the technology to support
                it. We believe in the future where a business scaling through
                marketing deserves systems that can grow with it, and a business
                with strong technology deserves a strategy that makes it visible.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Operating philosophy */}
        <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              How we think
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PHILOSOPHY.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  as="article"
                  key={item.title}
                  delay={i * 100}
                  className="card card-hover flex flex-col p-7"
                >
                  <span className="glass mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full text-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How we work — process */}
        <section className="mx-auto mt-28 max-w-4xl px-6 sm:mt-40">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              How we work
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-col gap-4">
            {PROCESS.map((step, i) => {
              const last = i === PROCESS.length - 1;
              return (
                <Fragment key={step.n}>
                  <Reveal as="div" delay={i * 90}>
                    <div
                      className="card timeline-card flex gap-5 p-6 sm:gap-6 sm:p-7"
                      style={{ ["--delay" as string]: `${i * 0.6}s` }}
                    >
                      <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-lg font-semibold text-ink">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  {/* down chevron between steps (arrowhead only, no tail) */}
                  {!last && (
                    <div aria-hidden className="flex justify-center">
                      <ChevronDown
                        className="timeline-chevron h-6 w-6 text-ink-subtle"
                        style={{ ["--delay" as string]: `${i * 0.3}s` }}
                      />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </section>

        {/* Impact */}
        <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {IMPACT.map((stat, i) => (
              <Reveal as="div" key={stat.label} delay={i * 100} className="text-center">
                <CountUp
                  value={stat.num}
                  suffix={stat.suffix}
                  className="font-display text-6xl font-semibold tracking-tight tabular-nums sm:text-7xl"
                  style={{
                    background: `radial-gradient(120% 120% at 50% 0%, #fff, ${stat.key})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                />
                <p className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {stat.label}
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                  {stat.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Where we are headed — quote */}
        <section className="mx-auto mt-28 max-w-5xl px-6 sm:mt-40">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Where we are headed
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="font-sans text-xl font-normal leading-[1.5] tracking-tight sm:text-2xl">
                <span aria-hidden className="text-gradient">
                  &ldquo;
                </span>
                The next chapter for Abstract Techvisions is fully about{" "}
                <span className="text-gradient text-glow font-bold italic">
                  our clients&rsquo; scalability
                </span>
                . We&rsquo;re developing the infrastructure and strategy to take
                businesses from transformation into permanent market leadership.
                We&rsquo;re moving toward a future where unified digital
                intelligence isn&rsquo;t a competitive advantage; it&rsquo;s a
                baseline. And we&rsquo;re determined to get our clients there
                first.
                <span aria-hidden className="text-gradient">
                  &rdquo;
                </span>
              </p>
              <footer className="mt-6 text-sm text-ink-subtle">
                CEO, Abstract Techvisions
              </footer>
            </blockquote>
          </Reveal>
        </section>

        {/* FAQ — heading left, questions right */}
        <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
          <div className="grid gap-8 lg:grid-cols-[22rem_1fr] lg:items-start lg:gap-16">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <Faq items={FAQS} />
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
          <Reveal className="flex flex-col items-center gap-8 py-8 text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.8rem]">
              The transformation starts when you do
            </h2>
            <GlowButton
              text="Let’s Connect"
              href="/#contact"
              color="#d23a48"
              icon={<ArrowRight className="h-4 w-4" />}
            />
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
