import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Statement",
  description:
    "How Abstract Techvisions Pvt. Ltd. collects, processes, shares and protects the personal information of its users.",
};

const INTRO = [
  "Being an Organization, we are responsible for all the data & information protection that our current and previous Users had provided while visiting our website and uses our services presented by Abstract Techvisions Pvt. Ltd. In this regard, protection of registered User information and data which we process and make sure complying with Data Protection Legislation.",
  "All the general individual private data which will be including personal information, name, address, e-mail id that is comprised in our correspondence with you, portrait photo, resume or any other personal data. We also clarify that you are not obligated to provide us your personal info beyond the limited data we need from you to get register your account or to make payments if you have bought any services from us. We also further clarify that we do not require you to provide “sensitive information” to use our services, and if you select to include it on your profile it will be visible to others.",
];

const SECTIONS: LegalSection[] = [
  {
    heading: "Share information",
    body: [
      "Abstract Techvisions consider all user’s data as private and confidential, and do not sell, trade, or rent this to others. We may share generic aggregated demographic information not related to any private information regarding users with our partners, associates, and advertisers, advocates for some legitimate and business analysis according to the law.",
    ],
  },
  {
    heading: "Security",
    body: [
      "Abstract Techvisions implements appropriate genuine information storage and processing safety measures to protect against unauthorized admission, alteration, disclosure or obliteration of the user’s personal information, username, password, transaction information and data stored on our site. The unidentified/anonymous remarks, notes and/or negotiations would be treated on the internet as plague and will not be encouraged. In this regard, Abstract Techvisions Pvt. Ltd. having the full authority to block the person and also willing to take strict actions against that User.",
    ],
  },
  {
    heading: "Lawful aspects",
    body: [
      "As before, Abstract Techvisions will only collect and process your private information when we have legal bases for doing so. These legal bases include when you provide us consent, when we have a contractual obligation to collect or process your private information, and when we have a legitimate interest in processing your information.",
    ],
  },
  {
    heading: "Changes to the Privacy policy",
    body: [
      "Abstract Techvisions Pvt. Ltd. always updates this policy from time to time, so please check our website intermittently. Abstract Techvisions will mark an announcement on the Home page of our site. If you have any concerns about how your data is being utilized or any questions about Abstract Techvisions Privacy policy, please contact info@tekabs.com.",
    ],
  },
];

const CLOSING = ["We will respond to all inquiries or concerns as soon as possible."];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Statement"
      intro={INTRO}
      sections={SECTIONS}
      closing={CLOSING}
    />
  );
}
