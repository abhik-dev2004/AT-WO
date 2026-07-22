import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import Reveal from "./reveal";

export type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  /** Lead paragraphs shown above the first section. */
  intro: string[];
  sections: LegalSection[];
  /** Closing paragraphs shown after the last section. */
  closing?: string[];
};

/**
 * Shared shell for the legal pages (privacy, terms). Narrow measure for
 * comfortable reading; scales cleanly from phone to desktop.
 */
export default function LegalPage({
  title,
  intro,
  sections,
  closing = [],
}: LegalPageProps) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 pt-28 sm:pt-32">
        <Reveal>
          <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {intro.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
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

        {closing.length > 0 && (
          <Reveal delay={60} className="mt-12 border-t border-white/8 pt-8 sm:mt-16">
            {closing.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-3 text-sm leading-relaxed text-ink-muted first:mt-0 sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        )}

        <Reveal delay={80} className="mt-12 sm:mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-subtle transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </Reveal>
      </main>

      <SiteFooter />
    </>
  );
}
