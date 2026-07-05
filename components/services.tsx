import {
  PenTool,
  Target,
  Boxes,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  tokens: string[];
  key: string;
  edge: string;
};

const SERVICES: Service[] = [
  {
    icon: PenTool,
    title: "Brand Marketing",
    body: "Build a powerful, unified digital footprint. From high-performing web design and distinct brand identities to strategic social media optimization, we ensure your brand gets noticed and drives meaningful awareness.",
    tokens: ["Web Experience", "Brand Identity", "Social Media"],
    key: "rgba(255,77,99,0.55)",
    edge: "rgba(255,77,99,0.7)",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    body: "Generate demand, accelerate conversion, and maximize ROI. We launch targeted ad campaigns, deploy lifecycle email journeys, and leverage deep market intelligence to turn high-intent traffic into loyal customers and measurable business growth.",
    tokens: ["Digital Advertising", "Email Marketing", "Marketing Intelligence"],
    key: "rgba(255,178,87,0.55)",
    edge: "rgba(255,178,87,0.7)",
  },
  {
    icon: Boxes,
    title: "Digital Transformation",
    body: "Streamline business operations and elevate your customer experience. We engineer custom software solutions, build platform workflows, and develop autonomous AI agents to eliminate operational bottlenecks and maximize productivity.",
    tokens: [
      "Software Development",
      "Platform Development",
      "Business Intelligence",
      "Intelligent Automations & AI Agents",
    ],
    key: "rgba(163,116,255,0.55)",
    edge: "rgba(163,116,255,0.7)",
  },
  {
    icon: ServerCog,
    title: "IT Operations and Infrastructure",
    body: "Maintain operational continuity and system integrity. We provide infrastructure optimization, cloud migrations, 24/7 network monitoring, and database management to protect your technical environment and support scalable growth.",
    tokens: [
      "IT Support & Management",
      "Cloud Support & Migration",
      "Database Warehousing & Management",
      "Network & System Monitoring",
    ],
    key: "rgba(52,226,234,0.55)",
    edge: "rgba(52,226,234,0.7)",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
          End-to-end solutions built to handle every dimension of your digital
          growth
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <Reveal
              as="article"
              key={service.title}
              delay={i * 90}
              style={{
                ["--key" as string]: service.key,
                ["--key-edge" as string]: service.edge,
              }}
              className="card card-hover flex flex-col p-7"
            >
              <span className="glass mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full text-ink">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {service.body}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tokens.map((token) => (
                  <li key={token} className="token">
                    {token}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
