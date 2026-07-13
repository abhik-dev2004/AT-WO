import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Reveal from "@/components/reveal";
import GlowButton from "@/components/glow-button";
import Contact from "@/components/contact";
import {
  getCategory,
  findService,
  serviceSlugs,
  type ServiceCategory,
  type ServiceItem,
} from "@/lib/services";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Digital Advertising has a bespoke static route — skip it here.
  return serviceSlugs()
    .filter((slug) => slug !== "digital-advertising")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (category) return { title: category.name, description: category.tagline };
  const found = findService(slug);
  if (found) return { title: found.item.name, description: found.item.blurb };
  return {};
}

export default async function ServiceSlugPage({ params }: Params) {
  const { slug } = await params;

  const category = getCategory(slug);
  if (category) return <CategoryView category={category} />;

  const found = findService(slug);
  if (found) return <ServiceView category={found.category} item={found.item} />;

  notFound();
}

/* ------------------------------------------------------------------ *
 *  Category landing — lists its child services
 * ------------------------------------------------------------------ */
function CategoryView({ category }: { category: ServiceCategory }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[88rem] px-6 pt-28 text-center sm:pt-32">
          <Reveal>
            <a
              href="/#services"
              className="inline-flex items-center gap-1.5 text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" /> All services
            </a>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              {category.name}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {category.tagline}
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 max-w-[88rem] px-6 sm:mt-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, i) => (
              <Reveal as="div" key={item.slug} delay={i * 80}>
                <a
                  href={`/services/${item.slug}`}
                  style={{
                    ["--key" as string]: category.key,
                    ["--key-edge" as string]: category.edge,
                  }}
                  className="card card-hover group flex h-full flex-col p-7"
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {item.blurb}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

/* ------------------------------------------------------------------ *
 *  Individual service page
 * ------------------------------------------------------------------ */
function ServiceView({
  category,
  item,
}: {
  category: ServiceCategory;
  item: ServiceItem;
}) {
  const siblings = category.items.filter((s) => s.slug !== item.slug);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-28 text-center sm:pt-32">
          <Reveal>
            <a
              href={`/services/${category.slug}`}
              className="inline-flex items-center gap-1.5 text-sm text-ink-subtle transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" /> {category.name}
            </a>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
              {item.name}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {item.blurb}
            </p>
            <div className="mt-9 flex justify-center">
              <GlowButton
                href="#contact"
                color="#d23a48"
                text="Start a conversation"
                icon={<ArrowRight className="h-4 w-4" />}
              />
            </div>
          </Reveal>
        </section>

        {/* Related services */}
        {siblings.length > 0 && (
          <section className="mx-auto mt-28 max-w-[88rem] px-6 sm:mt-40">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                More in {category.name}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s, i) => (
                <Reveal as="div" key={s.slug} delay={i * 80}>
                  <a
                    href={`/services/${s.slug}`}
                    style={{
                      ["--key" as string]: category.key,
                      ["--key-edge" as string]: category.edge,
                    }}
                    className="card card-hover group flex h-full flex-col p-7"
                  >
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {s.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {s.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
