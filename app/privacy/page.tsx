import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Abstract Techvisions collects, uses, and protects your personal information.",
};

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Information we collect",
    body: [
      "Placeholder: describe the categories of information collected — details submitted through forms (such as name, email address, phone number, and message content), and information gathered automatically (such as IP address, browser type, device identifiers, and pages visited).",
      "Placeholder: note any information received from third parties, such as analytics providers, advertising platforms, or business partners.",
    ],
  },
  {
    heading: "2. How we use your information",
    body: [
      "Placeholder: explain the purposes for processing — responding to enquiries, delivering and improving services, sending marketing communications where opted in, maintaining security, and meeting legal obligations.",
      "Placeholder: state the lawful basis for each purpose where applicable (for example, consent, contract, or legitimate interests).",
    ],
  },
  {
    heading: "3. Cookies and similar technologies",
    body: [
      "Placeholder: describe the cookies and similar technologies used, what each category does (strictly necessary, analytics, advertising), and how visitors can manage their preferences through the cookie banner or browser settings.",
    ],
  },
  {
    heading: "4. Sharing and disclosure",
    body: [
      "Placeholder: identify the categories of recipients — service providers and processors, professional advisers, and authorities where required by law. Confirm whether personal information is sold or shared for cross-context behavioural advertising.",
    ],
  },
  {
    heading: "5. International transfers",
    body: [
      "Placeholder: explain whether information is transferred outside your primary jurisdiction and the safeguards relied upon for those transfers.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "Placeholder: set out how long each category of information is retained, and the criteria used to determine those periods.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "Placeholder: summarise the rights available to individuals — access, correction, deletion, portability, objection, restriction, and withdrawal of consent — and explain how a request can be submitted and verified.",
      "Placeholder: include the right to lodge a complaint with a supervisory authority where applicable.",
    ],
  },
  {
    heading: "8. Security",
    body: [
      "Placeholder: describe the technical and organisational measures used to protect personal information, and note that no method of transmission or storage is completely secure.",
    ],
  },
  {
    heading: "9. Children's privacy",
    body: [
      "Placeholder: state the minimum age for using the site and confirm that information is not knowingly collected from children below that age.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    body: [
      "Placeholder: explain how updates are published, how the effective date is indicated, and how material changes are communicated.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      "Placeholder: provide the legal entity name, registered address, and a contact email address for privacy enquiries, along with details of any data protection officer or representative.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="16 July 2026"
      intro="This policy explains what information Abstract Techvisions collects, why we collect it, how we use and protect it, and the choices available to you."
      sections={SECTIONS}
    />
  );
}
