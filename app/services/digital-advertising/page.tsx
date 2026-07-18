import type { Metadata } from "next";
import {
  Target,
  Eye,
  TrendingUp,
  Megaphone,
  Cpu,
  LineChart,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import CountUp from "@/components/count-up";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Digital Advertising",
  description:
    "We build digital advertising programs that earn attention and actually convert it: sharper targeting, resonant creative, and tighter measurement.",
};

const NAV = [
  { label: "Core Principles", href: "#principles" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  {
    value: 740,
    prefix: "$",
    suffix: "B+",
    body: "Global digital ad spend in 2025. The channel is non-negotiable to grow your business.",
    key: "rgba(255,178,87,0.9)",
  },
  {
    value: 10000,
    prefix: "",
    suffix: "+",
    body: "Ads the average consumer is exposed to daily. Attention is the scarcest resource.",
    key: "rgba(52,226,234,0.9)",
  },
  {
    value: 3,
    prefix: "",
    suffix: "x",
    body: "Higher conversion rates when creative and audience strategy are aligned from the start.",
    key: "rgba(163,116,255,0.9)",
  },
];

type Principle = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: Target,
    title: "Relevance over reach",
    body: "We prioritize getting in front of buyers who actually have a reason to care and cut everything else to optimize your spend and conversion.",
  },
  {
    icon: Eye,
    title: "No black boxes",
    body: "Every budget decision, audience choice, and performance adjustment comes with a clear rationale, so you’re always informed.",
  },
  {
    icon: TrendingUp,
    title: "Optimize toward business outcomes",
    body: "We optimize for the metrics that actually move the business: pipeline, revenue, and customer acquisition cost.",
  },
];

const CAPABILITIES = [
  {
    title: "Audience intelligence & targeting",
    body: "We build audience frameworks from first-party data, behavioral signals, and market research, so every campaign starts with a precise picture of who we’re trying to reach and why.",
    key: "rgba(52,226,234,0.55)",
    edge: "rgba(52,226,234,0.7)",
  },
  {
    title: "Creative asset development",
    body: "We develop ad creative that’s built to convert, from messaging frameworks and copy to visual direction and platform-native formats, all aligned to each stage of the funnel.",
    key: "rgba(255,77,99,0.55)",
    edge: "rgba(255,77,99,0.7)",
  },
  {
    title: "Campaign management & optimization",
    body: "We manage campaigns actively by adjusting bids, rotating creative, refining audiences, and reallocating budget in real time based on what the data tells us is working.",
    key: "rgba(163,116,255,0.55)",
    edge: "rgba(163,116,255,0.7)",
  },
  {
    title: "Performance analytics & reporting",
    body: "We translate raw campaign data into clear business insight: tracking the metrics that matter, identifying what’s driving results, and surfacing the decisions that need to be made next.",
    key: "rgba(255,178,87,0.55)",
    edge: "rgba(255,178,87,0.7)",
  },
];

const PROCESS = [
  {
    title: "Discover & Diagnose",
    body: "We audit your current position (existing data, past campaign performance, competitive landscape, and audience behavior) to identify where the real opportunity is before we build anything.",
  },
  {
    title: "Strategize & Build",
    body: "We design the campaign architecture, develop creative assets, set up tracking and attribution, and align every channel to a clear strategic brief before a single dollar goes live.",
  },
  {
    title: "Launch, Optimize & Scale",
    body: "We go live with precision, monitor performance in real time, run structured tests, and continuously reallocate budget toward what’s working, compounding returns with every cycle.",
  },
];

// Icon matches the role
const TEAM = [
  { icon: Megaphone, role: "Advertising Strategist" },
  { icon: Cpu, role: "Technology Lead" },
  { icon: LineChart, role: "Paid Media Specialist" },
];

export default function DigitalAdvertisingPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[88rem] px-6 pt-24 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="card relative min-h-[20rem] overflow-hidden sm:min-h-[26rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/digital-advertising-hero.jpg"
                alt="Digital advertising performance dashboard"
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
              <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
                Visibility is easy.{" "}
                <span className="text-gradient">Profitable attention</span> is
                the work.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                In a landscape where every brand is advertising, the advantage
                goes to those who combine sharper targeting, more resonant
                creative, and tighter measurement. We build digital advertising
                programs that earn attention and actually convert it.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats band */}
        <section className="mx-auto mt-20 max-w-[88rem] px-6 sm:mt-28">
          <Reveal>
            <dl className="grid gap-x-8 gap-y-10 text-center md:grid-cols-3 lg:text-left">
              {STATS.map((stat, i) => (
                <Reveal as="div" key={stat.body} delay={i * 90}>
                  <dt className="sr-only">{stat.body}</dt>
                  <dd>
                    <CountUp
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl"
                      style={{
                        background: `radial-gradient(120% 120% at 30% 0%, #fff, ${stat.key})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    />
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-muted lg:mx-0">
                      {stat.body}
                    </p>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* Anchor navigation */}
        <nav
          aria-label="On this page"
          className="mt-16 sm:mt-20"
        >
          <div className="mx-auto max-w-[88rem] px-6">
            <div className="nav-scroll glass mx-auto max-w-full overflow-x-auto rounded-full px-2 py-2 lg:w-fit">
              <ul className="nav-marquee flex w-max items-center gap-1 lg:w-full lg:justify-center">
                {NAV.map((item) => (
                  <li key={item.href} className="shrink-0">
                    <a
                      href={item.href}
                      className="inline-flex whitespace-nowrap rounded-full px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {/* Duplicate set — seamless marquee loop on narrow screens only */}
                {NAV.map((item) => (
                  <li key={`dup-${item.href}`} aria-hidden className="shrink-0 lg:hidden">
                    <a
                      href={item.href}
                      tabIndex={-1}
                      className="inline-flex whitespace-nowrap rounded-full px-4 py-2 text-sm text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Core Principles */}
        <section id="principles" className="mx-auto mt-28 max-w-[88rem] px-6 scroll-mt-40 sm:mt-40">
          {/* On desktop the heading sits inside the triangle instead */}
          <Reveal className="text-center lg:hidden">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Core Principles
            </h2>
          </Reveal>

          {/* Inverted triangle diagram — desktop */}
          <Reveal className="relative mx-auto mt-10 hidden h-[42rem] max-w-4xl lg:block">
            {/* viewBox matches the container's 4:3 box (896x672) so scaling is
                uniform — required for pathLength to yield exactly one dash. */}
            <svg
              viewBox="0 0 100 75"
              className="beam-glow absolute inset-0 h-full w-full"
              aria-hidden
            >
              {/* Outline invisible. Stacked dashes share a leading edge and
                  trail off behind it — one white comet with a fading tail. */}
              {[
                { l: 12, opacity: 0.1, w: 0.2 },
                { l: 8, opacity: 0.18, w: 0.24 },
                { l: 5, opacity: 0.32, w: 0.28 },
                { l: 3, opacity: 0.55, w: 0.32 },
                { l: 1.6, opacity: 0.85, w: 0.36 },
                { l: 0.8, opacity: 1, w: 0.42 },
              ].map((seg) => (
                <polygon
                  key={seg.l}
                  className="tri-beam"
                  points="20,24 80,24 50,51"
                  pathLength={100}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={seg.w}
                  strokeOpacity={seg.opacity}
                  strokeLinecap="round"
                  style={{ strokeDasharray: `${seg.l} ${100 - seg.l}` }}
                />
              ))}
            </svg>

            {/* Centred in the triangle (centroid of 20,24 / 80,24 / 50,51) */}
            <h2 className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Core Principles
            </h2>

            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              // vertex + text placement per node (two up top, one at bottom)
              const pos = [
                "left-[20%] top-[32%]", // top-left
                "left-[80%] top-[32%]", // top-right
                "left-1/2 top-[68%]", // bottom-centre
              ][i];
              const textPos = [
                "left-[20%] top-[32%] w-64 -translate-x-1/2 -translate-y-full pb-12 text-center",
                "left-[80%] top-[32%] w-64 -translate-x-1/2 -translate-y-full pb-12 text-center",
                "left-1/2 top-[68%] w-80 -translate-x-1/2 pt-12 text-center",
              ][i];
              // when the beam reaches this vertex within its 7s lap
              const nodeDelay = ["0s", "4.02s", "2.01s"][i];
              return (
                <div key={p.title}>
                  <span
                    style={{ ["--node-delay" as string]: nodeDelay }}
                    className={`tri-node glass absolute z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-ink transition duration-300 hover:text-white hover:ring-1 hover:ring-[rgba(150,175,255,0.55)] ${pos}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className={`absolute ${textPos}`}>
                    <h3 className="font-display text-base font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>

          {/* Stacked — mobile / tablet */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal as="div" key={p.title} delay={i * 90} className="card flex flex-col p-6 text-center">
                  <span className="glass mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full text-ink transition duration-300 hover:text-white hover:ring-1 hover:ring-[rgba(150,175,255,0.55)] hover:shadow-[0_0_32px_-2px_rgba(150,175,255,0.75)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="mx-auto mt-28 max-w-[88rem] px-6 scroll-mt-40 sm:mt-40">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Capabilities
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal
                as="article"
                key={c.title}
                delay={i * 90}
                style={{
                  ["--key" as string]: c.key,
                  ["--key-edge" as string]: c.edge,
                }}
                className="card card-hover flex flex-col p-7"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto mt-28 max-w-[88rem] px-6 scroll-mt-40 sm:mt-40">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Our Process
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PROCESS.map((step, i) => (
              <Reveal
                as="article"
                key={step.title}
                delay={i * 90}
                className="card card-hover flex flex-col p-7"
              >
                <h3 className="relative pl-3 font-display text-lg font-semibold tracking-tight before:absolute before:inset-y-0 before:left-0 before:w-[2px] before:rounded-full before:bg-[linear-gradient(to_bottom,#ffffff,#a374ff)] before:content-['']">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mx-auto mt-28 max-w-5xl px-6 text-center scroll-mt-40 sm:mt-40">
          {/* Static row of avatars on every screen size — no orbit */}
          <Reveal>
            <h2 className="whitespace-nowrap font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[2.2rem]">
              Your Dedicated Team
            </h2>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-2xl gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-3">
            {TEAM.map((member, i) => {
              const Icon = member.icon;
              return (
                <Reveal
                  as="div"
                  key={member.role}
                  delay={i * 90}
                  className="flex flex-col items-center"
                >
                  <span className="relative grid h-20 w-20 place-items-center rounded-full bg-white text-[#0a0c14] shadow-[0_0_34px_-4px_rgba(255,255,255,0.75)]">
                    <UserRound className="h-10 w-10" />
                    <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-[#0a0c14] text-white ring-2 ring-white">
                      <Icon className="h-4 w-4" />
                    </span>
                  </span>
                  <p className="mt-4 text-sm font-medium leading-tight text-ink-muted">
                    {member.role}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <blockquote className="mx-auto mt-16 max-w-4xl sm:mt-24">
              <p className="font-sans text-xl font-medium leading-[1.5] tracking-tight sm:text-2xl">
                <span aria-hidden className="text-gradient">
                  &ldquo;
                </span>
                Every dollar in digital advertising lives or dies on the quality
                of the data underneath it. We make sure the technology, the data,
                and the strategy are all pulling in the same direction,
                because that&rsquo;s the only way to build something that
                compounds.
                <span aria-hidden className="text-gradient">
                  &rdquo;
                </span>
              </p>
            </blockquote>
          </Reveal>
        </section>

        {/* Contact — shared component (id="contact") */}
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
