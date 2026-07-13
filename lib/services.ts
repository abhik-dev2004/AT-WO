export type ServiceItem = {
  name: string;
  slug: string;
  blurb: string;
};

export type ServiceCategory = {
  name: string;
  slug: string;
  tagline: string;
  /** Accent colours driving the card glow (matches the homepage services). */
  key: string;
  edge: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Brand Marketing",
    slug: "brand-marketing",
    tagline:
      "Build a powerful, unified digital footprint that gets your brand noticed and drives meaningful awareness.",
    key: "rgba(255,77,99,0.55)",
    edge: "rgba(255,77,99,0.7)",
    items: [
      {
        name: "Web Experience",
        slug: "web-experience",
        blurb:
          "High-performing, SEO-driven websites and digital experiences engineered to turn attention into action.",
      },
      {
        name: "Brand Identity",
        slug: "brand-identity",
        blurb:
          "Distinct visual systems and messaging that make your brand instantly recognizable and impossible to ignore.",
      },
      {
        name: "Social Media",
        slug: "social-media",
        blurb:
          "Strategic social presence and content that builds audience, authority, and meaningful awareness.",
      },
    ],
  },
  {
    name: "Performance Marketing",
    slug: "performance-marketing",
    tagline:
      "Generate demand, accelerate conversion, and maximize ROI across every channel.",
    key: "rgba(255,178,87,0.55)",
    edge: "rgba(255,178,87,0.7)",
    items: [
      {
        name: "Digital Advertising",
        slug: "digital-advertising",
        blurb:
          "Targeted ad programs that combine sharper targeting and resonant creative to earn attention and convert it.",
      },
      {
        name: "Email Marketing",
        slug: "email-marketing",
        blurb:
          "Lifecycle email journeys that nurture high-intent prospects into loyal, repeat customers.",
      },
      {
        name: "Marketing Intelligence",
        slug: "marketing-intelligence",
        blurb:
          "Deep market and campaign intelligence that turns data into decisions and spend into growth.",
      },
    ],
  },
  {
    name: "Digital Transformation",
    slug: "digital-transformation",
    tagline:
      "Streamline business operations and elevate your customer experience with systems built to scale.",
    key: "rgba(163,116,255,0.55)",
    edge: "rgba(163,116,255,0.7)",
    items: [
      {
        name: "Software Development",
        slug: "software-development",
        blurb:
          "Custom software engineered around your workflows to eliminate bottlenecks and scale with your business.",
      },
      {
        name: "Intelligent Automations & AI Agents",
        slug: "intelligent-automations-ai-agents",
        blurb:
          "Autonomous AI agents and automations that take repetitive work off your team's plate.",
      },
      {
        name: "Platform Development",
        slug: "platform-development",
        blurb:
          "End-to-end platforms and workflows that unify fragmented tools into one connected system.",
      },
      {
        name: "Business Intelligence",
        slug: "business-intelligence",
        blurb:
          "Dashboards and data models that turn raw operations into clear, actionable insight.",
      },
    ],
  },
  {
    name: "IT Operations & Infrastructure",
    slug: "it-operations-infrastructure",
    tagline:
      "Maintain operational continuity and system integrity so your technical environment supports growth.",
    key: "rgba(52,226,234,0.55)",
    edge: "rgba(52,226,234,0.7)",
    items: [
      {
        name: "IT Support & Managed Services",
        slug: "it-support-managed-services",
        blurb:
          "Proactive, responsive IT support that keeps your team productive and your systems healthy.",
      },
      {
        name: "Cloud Support & Migration",
        slug: "cloud-support-migration",
        blurb:
          "Seamless cloud migrations and optimization built for performance, security, and cost efficiency.",
      },
      {
        name: "Database Warehousing & Management",
        slug: "database-warehousing-management",
        blurb:
          "Reliable data warehousing and management that keeps your information organized and accessible.",
      },
      {
        name: "Network & System Monitoring",
        slug: "network-system-monitoring",
        blurb:
          "24/7 monitoring that protects your environment and catches issues before they escalate.",
      },
    ],
  },
];

export function getCategory(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}

export function findService(
  slug: string
): { category: ServiceCategory; item: ServiceItem } | undefined {
  for (const category of SERVICE_CATEGORIES) {
    const item = category.items.find((s) => s.slug === slug);
    if (item) return { category, item };
  }
  return undefined;
}

/** Every routable slug — categories and their child services. */
export function serviceSlugs(): string[] {
  return SERVICE_CATEGORIES.flatMap((c) => [
    c.slug,
    ...c.items.map((s) => s.slug),
  ]);
}
