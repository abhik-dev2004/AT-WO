import {
  Target,
  Eye,
  TrendingUp,
  UserRound,
  Compass,
  Cpu,
  LineChart,
  Database,
  Cloud,
  Server,
  Network,
  Palette,
  Boxes,
  Code2,
  ShieldCheck,
  Users,
  Megaphone,
  Activity,
  Workflow,
  Gauge,
  Search,
  BadgeCheck,
  Zap,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import Reveal from "./reveal";
import CountUp from "./count-up";
import Contact from "./contact";
import type { ServiceContent } from "@/lib/service-content";

const NAV = [
  { label: "Core Principles", href: "#principles" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

/**
 * Principle title → icon, most specific rule first. Same collision handling as
 * the team badges, so each service gets its own trio rather than a fixed set.
 */
const PRINCIPLE_RULES: [RegExp, LucideIcon][] = [
  [/black box|transparen|visib|clarity|clear/, Eye],
  [/security|protection|guard|permission|governance/, ShieldCheck],
  [/reliab|availab|continuity|uptime|stable|maintain|prevent|support/, Activity],
  [/data|evidence|measure|metric|insight|analytic|dashboard|report|signal/, LineChart],
  [/automation|workflow|process|journey|lifecycle/, Workflow],
  [/performance|speed|optimi|fast/, Gauge],
  [/found|search|discover/, Search],
  [/platform|architecture|structure|fit|foundation/, Boxes],
  [/design|creative|style/, Palette],
  [/community|people|adoption|human|judgment|ownership/, Users],
  [/trust|consisten|respect/, BadgeCheck],
  [/strategy|strateg|decision|context|priorit/, Compass],
  [/response|alert|escalation/, Zap],
  [/risk|cost|repair/, Wrench],
  [
    /outcome|business|revenue|growth|scale|impact|action|useful|matters|meaningful|relevance|reach/,
    TrendingUp,
  ],
];

const PRINCIPLE_FALLBACK: LucideIcon[] = [
  Target,
  Compass,
  TrendingUp,
  Eye,
  ShieldCheck,
  LineChart,
  Zap,
  Boxes,
];

const STAT_KEYS = [
  "rgba(255,178,87,0.9)",
  "rgba(52,226,234,0.9)",
  "rgba(163,116,255,0.9)",
];

const CAPABILITY_KEYS = [
  { key: "rgba(52,226,234,0.55)", edge: "rgba(52,226,234,0.7)" },
  { key: "rgba(255,77,99,0.55)", edge: "rgba(255,77,99,0.7)" },
  { key: "rgba(163,116,255,0.55)", edge: "rgba(163,116,255,0.7)" },
  { key: "rgba(255,178,87,0.55)", edge: "rgba(255,178,87,0.7)" },
];

/**
 * Splits a stat like "$11.78B" or "$14,000 per minute" into the parts CountUp
 * needs. Anything before the first digit is the prefix, anything after the
 * number is the suffix, and decimals are inferred from the number itself.
 */
function parseStat(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: value, num: 0, decimals: 0, suffix: "" };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix,
    num: parseFloat(numStr.replace(/,/g, "")),
    decimals,
    suffix,
  };
}

/**
 * Role title → badge icon, most specific rule first. A role can match several
 * rules; the first unused one wins so no two team members share an icon.
 */
const ICON_RULES: [RegExp, LucideIcon][] = [
  [/database|warehous/, Database],
  [/cloud/, Cloud],
  [/infrastructure/, Server],
  [/network/, Network],
  [/design|creative|visual/, Palette],
  [/analyst|analytics|insight|scientist|intelligence|data/, LineChart],
  [/architect/, Boxes],
  [/developer|engineer|full-stack|integration|technical|technolog/, Code2],
  [/security|support|operations|managed|reliability/, ShieldCheck],
  [/community|manager/, Users],
  [/content|social|advertis|media|brand|messag|campaign|email|market/, Megaphone],
  [/strateg|lead|consultant|principal|product|platform/, Compass],
];

const ICON_FALLBACK: LucideIcon[] = [
  Compass,
  Cpu,
  LineChart,
  ShieldCheck,
  Users,
  Boxes,
  Megaphone,
];

/**
 * Maps labels to icons using the given rules. A label can match several rules;
 * the first unused one wins, so icons within a set are always distinct.
 */
function pickIcons(
  labels: string[],
  rules: [RegExp, LucideIcon][],
  fallback: LucideIcon[]
): LucideIcon[] {
  const used = new Set<LucideIcon>();
  return labels.map((label) => {
    const l = label.toLowerCase();
    const candidates = rules.filter(([re]) => re.test(l)).map(([, icon]) => icon);
    const icon =
      candidates.find((c) => !used.has(c)) ?? fallback.find((f) => !used.has(f)) ?? Cpu;
    used.add(icon);
    return icon;
  });
}

/** Renders the headline with `highlight` wrapped in the gradient treatment. */
function Headline({ text, highlight }: { text: string; highlight: string }) {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="text-gradient">{highlight}</span>
      {text.slice(at + highlight.length)}
    </>
  );
}

export default function ServicePage({ content }: { content: ServiceContent }) {
  const { name, heroImage, hero, stats, principles, capabilities, process, team } =
    content;
  const teamIcons = pickIcons(team.roles, ICON_RULES, ICON_FALLBACK);
  const principleIcons = pickIcons(
    principles.map((p) => p.title),
    PRINCIPLE_RULES,
    PRINCIPLE_FALLBACK
  );

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-[88rem] px-6 pt-24 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="card relative min-h-[20rem] overflow-hidden sm:min-h-[26rem]">
              {heroImage ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroImage}
                    alt={`${name} service`}
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
                </>
              ) : (
                /* Placeholder until artwork is supplied */
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(60% 70% at 25% 25%, rgba(163,116,255,0.45), transparent 60%), radial-gradient(65% 75% at 80% 30%, rgba(52,226,234,0.35), transparent 60%), radial-gradient(70% 80% at 55% 105%, rgba(80,140,255,0.4), transparent 60%)",
                  }}
                />
              )}
            </Reveal>

            <Reveal delay={120}>
              <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
                <Headline text={hero.headline} highlight={hero.highlight} />
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {hero.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Stats band */}
        <section className="mx-auto mt-20 max-w-[88rem] px-6 sm:mt-28">
          <Reveal>
            <dl className="grid gap-x-8 gap-y-10 text-center md:grid-cols-3 lg:text-left">
              {stats.map((stat, i) => {
                const { prefix, num, decimals, suffix } = parseStat(stat.value);
                return (
                  <Reveal as="div" key={stat.body} delay={i * 90}>
                    <dt className="sr-only">{stat.body}</dt>
                    <dd>
                      {/* Font size must sit on the gradient element itself:
                          background-clip:text clips to this box, so a smaller
                          inherited size would crop the glyphs. Number and unit
                          share this size, so they always match. */}
                      <span
                        className="font-display inline-block text-4xl font-semibold leading-[1.15] tracking-tight tabular-nums sm:text-5xl"
                        style={{
                          background: `radial-gradient(120% 120% at 30% 0%, #fff, ${
                            STAT_KEYS[i % STAT_KEYS.length]
                          })`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        <CountUp
                          value={num}
                          prefix={prefix}
                          decimals={decimals}
                          suffix={suffix}
                        />
                      </span>
                      <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink-muted lg:mx-0">
                        {stat.body}
                      </p>
                    </dd>
                  </Reveal>
                );
              })}
            </dl>
          </Reveal>
        </section>

        {/* Anchor navigation */}
        <nav aria-label="On this page" className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-[88rem] px-6">
            <div className="nav-scroll glass mx-auto w-fit max-w-full overflow-x-auto rounded-full px-2 py-2">
              <ul className="flex items-center gap-1">
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
              </ul>
            </div>
          </div>
        </nav>

        {/* Core Principles */}
        <section
          id="principles"
          className="mx-auto mt-28 max-w-[88rem] px-6 scroll-mt-40 sm:mt-40"
        >
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

            {principles.map((p, i) => {
              const Icon = principleIcons[i];
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
            {principles.map((p, i) => {
              const Icon = principleIcons[i];
              return (
                <Reveal
                  as="div"
                  key={p.title}
                  delay={i * 90}
                  className="card flex flex-col p-6 text-center"
                >
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
        <section
          id="capabilities"
          className="mx-auto mt-28 max-w-[88rem] px-6 scroll-mt-40 sm:mt-40"
        >
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Capabilities
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal
                as="article"
                key={c.title}
                delay={i * 90}
                style={{
                  ["--key" as string]: CAPABILITY_KEYS[i % CAPABILITY_KEYS.length].key,
                  ["--key-edge" as string]:
                    CAPABILITY_KEYS[i % CAPABILITY_KEYS.length].edge,
                }}
                className="card card-hover flex flex-col p-7"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="mx-auto mt-28 max-w-[88rem] px-6 scroll-mt-40 sm:mt-40"
        >
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              Our Process
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step, i) => (
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
        <section
          id="team"
          className="mx-auto mt-28 max-w-5xl px-6 text-center scroll-mt-40 sm:mt-40"
        >
          <Reveal>
            <h2 className="whitespace-nowrap font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[2.2rem]">
              Your Dedicated Team
            </h2>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-2xl gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-3">
            {team.roles.map((role, i) => {
              const Icon = teamIcons[i];
              return (
                <Reveal
                  as="div"
                  key={role}
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
                    {role}
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
                {team.quote}
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
