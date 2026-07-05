import Reveal from "./reveal";
import CountUp from "./count-up";

const STATS = [
  { num: 94, suffix: "%", decimals: 0, label: "Satisfaction", key: "rgba(255,77,99,0.5)" },
  { num: 200, suffix: "+", decimals: 0, label: "Businesses Transformed", key: "rgba(52,226,234,0.5)" },
  { num: 4.2, suffix: "x", decimals: 1, label: "Average Client ROI", key: "rgba(163,116,255,0.5)" },
  { num: 60, suffix: "%", decimals: 0, label: "Average Operational Lift", key: "rgba(255,178,87,0.5)" },
];

export default function StatsBand() {
  return (
    <section className="mx-auto mt-24 max-w-[88rem] px-6 sm:mt-32">
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal as="div" key={stat.label} delay={i * 80} className="group text-center">
              <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <CountUp
                    value={stat.num}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    className="font-display text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl"
                    style={{
                      background: `radial-gradient(120% 120% at 30% 0%, #fff, ${stat.key.replace(
                        "0.5",
                        "0.9"
                      )})`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  />
                  <span className="mt-2 block text-sm text-ink-muted">
                    {stat.label}
                  </span>
                </dd>
              </Reveal>
            ))}
        </dl>
      </Reveal>
    </section>
  );
}
