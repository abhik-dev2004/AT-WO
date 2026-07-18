import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing your use of the Abstract Techvisions website and services.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Acceptance of these terms",
    body: [
      "Placeholder: state that accessing or using the site constitutes agreement to these terms, and that visitors who do not agree should discontinue use.",
      "Placeholder: identify the legal entity behind the site and note that separate written agreements govern paid engagements.",
    ],
  },
  {
    heading: "2. Use of the site",
    body: [
      "Placeholder: describe permitted use and prohibited conduct, including interfering with the site's operation, attempting unauthorised access, scraping, or using the site unlawfully.",
    ],
  },
  {
    heading: "3. Intellectual property",
    body: [
      "Placeholder: confirm ownership of site content, trademarks, and design, and set out the limited licence granted to visitors for personal, non-commercial viewing.",
    ],
  },
  {
    heading: "4. Submissions and feedback",
    body: [
      "Placeholder: explain the treatment of material submitted through forms or otherwise, the licence granted to us for that material, and the warranties given by the person submitting it.",
    ],
  },
  {
    heading: "5. Services and engagements",
    body: [
      "Placeholder: clarify that site content is informational, that no offer is created by the site, and that scope, fees, and deliverables are governed by a separate signed agreement.",
    ],
  },
  {
    heading: "6. Third-party links and services",
    body: [
      "Placeholder: note that links to third-party sites are provided for convenience, that those sites are not controlled by us, and that we accept no responsibility for their content or practices.",
    ],
  },
  {
    heading: "7. Disclaimers",
    body: [
      "Placeholder: state that the site is provided on an \"as is\" and \"as available\" basis, without warranties of any kind to the fullest extent permitted by law.",
    ],
  },
  {
    heading: "8. Limitation of liability",
    body: [
      "Placeholder: set out the limitations and exclusions of liability, including any cap on damages, subject to the liabilities that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "9. Indemnity",
    body: [
      "Placeholder: describe the visitor's obligation to indemnify the company against claims arising from misuse of the site or breach of these terms.",
    ],
  },
  {
    heading: "10. Governing law and disputes",
    body: [
      "Placeholder: specify the governing law, the courts or forum with jurisdiction, and any dispute-resolution or arbitration process.",
    ],
  },
  {
    heading: "11. Changes to these terms",
    body: [
      "Placeholder: explain that terms may be updated, how the effective date is shown, and that continued use after changes constitutes acceptance.",
    ],
  },
  {
    heading: "12. Contact us",
    body: [
      "Placeholder: provide the legal entity name, registered address, and a contact email address for questions about these terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="16 July 2026"
      intro="These terms govern your access to and use of the Abstract Techvisions website. Please read them carefully."
      sections={SECTIONS}
    />
  );
}
