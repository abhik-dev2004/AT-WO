import { XIcon, LinkedInIcon, InstagramIcon } from "./brand";

const COLUMNS = [
  {
    heading: "Brand Marketing",
    links: ["Web Experience", "Brand Identity", "Social Media"],
  },
  {
    heading: "Performance Marketing",
    links: ["Digital Advertising", "Email Marketing", "Marketing Intelligence"],
  },
  {
    heading: "Digital Transformation",
    links: [
      "Software Development",
      "Intelligent Automations & AI Agents",
      "Platform Development",
      "Business Intelligence",
    ],
  },
  {
    heading: "IT Operations & Infrastructure",
    links: [
      "IT Support & Managed Services",
      "Cloud Support & Migration",
      "Database Warehousing & Management",
      "Network & System Monitoring",
    ],
  },
  {
    heading: "About",
    links: ["Privacy Policy", "Terms & Conditions", "Sitemap"],
  },
];

const SOCIAL = [
  { label: "Abstract Techvisions on X", Icon: XIcon },
  { label: "Abstract Techvisions on LinkedIn", Icon: LinkedInIcon },
  { label: "Abstract Techvisions on Instagram", Icon: InstagramIcon },
];

export default function SiteFooter() {
  return (
    <footer className="relative mt-28 border-t border-white/8 sm:mt-40">
      <div className="mx-auto max-w-[88rem] px-6 py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-display text-sm font-semibold tracking-tight text-ink">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              {col.heading === "About" && (
                <div className="mt-8">
                  <h3 className="font-display text-sm font-semibold tracking-tight text-ink">
                    Follow us on
                  </h3>
                  <ul className="mt-4 flex gap-2.5">
                    {SOCIAL.map(({ label, Icon }) => (
                      <li key={label}>
                        <a
                          href="#"
                          aria-label={label}
                          className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-muted transition-colors hover:text-ink"
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/8 pt-6">
          <a href="#top" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Abstract Techvisions" className="h-6 w-auto" />
            <span className="font-display text-sm font-semibold tracking-tight">
              Abstract Techvisions
            </span>
          </a>
          <p className="text-xs text-ink-subtle">© 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
