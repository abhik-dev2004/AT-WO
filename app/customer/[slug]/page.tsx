import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/case-study-page";
import { CASE_STUDIES, getCaseStudy } from "@/lib/customer-content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: study.client, description: study.summary };
}

export default async function CustomerStoryPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
