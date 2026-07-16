import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import Reveal from "./reveal";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared shell for the legal pages (privacy, terms). Narrow measure for
 * comfortable reading; scales cleanly from phone to desktop.
 */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 pt-28 sm:pt-32">
        <Reveal>
          <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ink-subtle">Last updated: {updated}</p>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            {intro}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="card mt-8 p-4 text-sm leading-relaxed text-ink-muted sm:p-5">
            <strong className="text-ink">Placeholder content.</strong> The
            wording below is a structural draft only &mdash; it is not legal
            advice and has not been reviewed by counsel. Replace each section
            with your final, reviewed language before launch.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-12">
          {sections.map((section, i) => (
            <Reveal as="section" key={section.heading} delay={i * 50}>
              <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <p className="mt-14 border-t border-white/8 pt-8 text-sm leading-relaxed text-ink-muted sm:mt-16">
            Questions about this page?{" "}
            <a
              href="/contact"
              className="text-ink underline underline-offset-4 transition-colors hover:text-white"
            >
              Get in touch
            </a>
            .
          </p>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  );
}
