import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import Contact from "@/components/contact";
import { CASE_STUDIES, CUSTOMER_INTRO, MORE_SOON } from "@/lib/customer-content";

export const metadata: Metadata = {
  title: "Customer",
  description: CUSTOMER_INTRO,
};

export default function CustomerPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[88rem] px-6 pt-28 sm:pt-32">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-xl font-semibold leading-[1.45] tracking-tight sm:text-2xl">
              {CUSTOMER_INTRO}
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3 sm:mt-16">
            {CASE_STUDIES.map((study, i) => (
              <Reveal
                as="div"
                key={study.slug}
                delay={i * 100}
                style={{
                  ["--key" as string]: study.key,
                  ["--key-edge" as string]: study.edge,
                }}
              >
                <Link
                  href={`/customer/${study.slug}`}
                  className="card card-hover group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative m-2 h-44 overflow-hidden rounded-[20px] border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.cardImage}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-4">
                    <h2 className="font-display text-base font-semibold leading-snug tracking-tight">
                      {study.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {study.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Read the story
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-14 text-center sm:mt-16">
            <p className="text-sm text-ink-subtle">{MORE_SOON}</p>
          </Reveal>
        </section>

        {/* Contact — shared component (id="contact") */}
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
