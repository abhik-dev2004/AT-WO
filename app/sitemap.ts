import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/customer-content";

const BASE = "https://abstracttechvisions.com";

// Site information architecture — Insights section intentionally omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/customer`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...CASE_STUDIES.map((c) => ({
      url: `${BASE}/customer/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${BASE}/#services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/#contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
