import Reveal from "./reveal";

const POINTS = [
  {
    title: "You're funding their operations, not your growth.",
    body: "Most agencies optimize for billable hours, not your outcomes. At Abstract Techvisions, we operate on a fixed-outcome model — no retainer bloat, no ambiguous deliverables. Every dollar you invest is tied directly to a specific result.",
    key: "rgba(255,77,99,0.5)",
    edge: "rgba(255,77,99,0.65)",
  },
  {
    title: "Your marketing strategy and tech stack are not in the same room.",
    body: "Hiring separate vendors for marketing and development creates misaligned strategies and duplicated costs. We co-lead every engagement with a Marketing Expert and a Systems Engineer, so your brand and technology evolve in sync, never in isolation.",
    key: "rgba(163,116,255,0.5)",
    edge: "rgba(163,116,255,0.65)",
  },
  {
    title: "Industry-standard playbooks produce industry-average results.",
    body: "You're getting a template, not a transformation. Our 14-day DNA Mapping sprint identifies your unique structural bottlenecks before a single solution is built, ensuring your roadmap is architectured around your specific business, not recycled from someone else's.",
    key: "rgba(52,226,234,0.5)",
    edge: "rgba(52,226,234,0.65)",
  },
];

export default function PainPoints() {
  return (
    <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
      <Reveal className="max-w-4xl">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
          The services are expected, but here is what most vendors won&rsquo;t
          tell you — and what we built our model around
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {POINTS.map((point, i) => (
          <Reveal
            as="article"
            key={point.title}
            delay={i * 100}
            style={{
              ["--key" as string]: point.key,
              ["--key-edge" as string]: point.edge,
            }}
            className="card card-hover flex flex-col p-7"
          >
            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight">
              {point.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {point.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
