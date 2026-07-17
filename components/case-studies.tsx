import Reveal from "./reveal";
import StarBorder from "./star-border";

const CASES = [
  {
    title:
      "How a boutique retail brand built a brand, launched a custom online store, and tripled revenue in 90 days",
    body: "With no digital presence and a brand that wasn't converting, we established their visual identity, built a custom online storefront with an integrated checkout and inventory system, and launched targeted paid social campaigns designed around it.",
    image: "/case-1.jpg",
    key: "rgba(255,77,99,0.5)",
    edge: "rgba(255,77,99,0.65)",
  },
  {
    title:
      "A growing wellness studio cut vendor costs by 60%, scaled bookings by 40%, and built the tech to sustain it",
    body: "Facing budget drain from siloed vendors and a manual booking process that couldn't keep up with demand, we rebuilt their ad campaigns and web experience to drive consistent client acquisition, then engineered a custom booking and client management system that converted that traffic automatically.",
    image: "/case-2.jpg",
    key: "rgba(52,226,234,0.5)",
    edge: "rgba(52,226,234,0.65)",
  },
  {
    title:
      "A solo consulting practice doubled inbound leads and eliminated operational bottlenecks with a custom-built client portal",
    body: "With an outdated brand and disconnected internal workflows slowing them down, we rebuilt their digital presence with an SEO-driven website from scratch and developed a custom client portal that streamlines project intake, communication, and reporting into one system while bringing high-intent prospects directly to them.",
    image: "/case-3.jpg",
    key: "rgba(163,116,255,0.5)",
    edge: "rgba(163,116,255,0.65)",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "They thought of angles I never would have considered. Every meeting felt like a breakthrough because they came prepared with ideas that were tailored to where we were trying to go.",
    name: "Michelle C",
    role: "Business Owner",
    grad: "from-brand-red to-brand-amber",
  },
  {
    quote:
      "The process was clear, the communication was consistent, and the results exceeded what we had originally planned for. It's rare to work with a team where nothing falls through the cracks.",
    name: "Rachel S.",
    role: "CEO/Founder",
    grad: "from-brand-cyan to-brand-purple",
  },
  {
    quote:
      "They didn't just solve the problems in front of us, they anticipated ones I didn't even know I had yet. That is what separates a vendor from a true strategic partner.",
    name: "Kevin L.",
    role: "Managing Director",
    grad: "from-brand-purple to-brand-cyan",
  },
];

export default function CaseStudies() {
  return (
    <section id="customer" className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
      <Reveal className="max-w-4xl">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
          What it looks like when growth is done right
        </h2>
      </Reveal>

      {/* Growth stories */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {CASES.map((item, i) => (
          <Reveal
            as="article"
            key={item.title}
            delay={i * 100}
            style={{
              ["--key" as string]: item.key,
              ["--key-edge" as string]: item.edge,
            }}
            className="card card-hover flex flex-col overflow-hidden"
          >
            <div className="relative m-2 h-44 overflow-hidden rounded-[20px] border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-4">
              <h3 className="font-display text-base font-semibold leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Read More */}
      <Reveal className="mt-10 flex justify-center">
        <StarBorder text="Read More" href="#customer" color="#a374ff" speed="5s" />
      </Reveal>

      {/* Client testimonials */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            as="figure"
            key={t.name}
            delay={i * 90}
            className="card flex flex-col p-7"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-ink-muted">
              <span aria-hidden className="text-gradient font-display text-2xl leading-none">
                &ldquo;
              </span>
              <span className="align-middle italic">{t.quote}</span>
              <span aria-hidden className="text-gradient font-display text-2xl leading-none">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-6 border-t border-white/8 pt-5">
              <span className="block font-display text-sm font-semibold text-ink">
                {t.name}
              </span>
              <span className="block text-xs text-ink-subtle">{t.role}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
